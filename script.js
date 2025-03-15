document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const startReadingBtn = document.getElementById('start-reading');
    const introSection = document.getElementById('intro');
    const readingSection = document.getElementById('reading-section');
    const spreadBtns = document.querySelectorAll('.spread-btn');
    const cardDeck = document.getElementById('card-deck');
    const spreadContainer = document.getElementById('spread-container');
    const readingResult = document.getElementById('reading-result');
    const readingContent = document.getElementById('reading-content');
    const lotmSection = document.getElementById('lotm-section');
    const lotmContent = document.getElementById('lotm-content');
    const testSubmitBtn = document.getElementById('test-submit');
    const testResult = document.getElementById('test-result');
    const aboutBtn = document.getElementById('about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeAboutBtn = document.getElementById('close-about');
    const themeToggle = document.getElementById('theme-toggle');
    
    // State
    let selectedSpread = 1;
    let drawnCards = [];
    let isDrawing = false;
    
    // Initialize
    initializeApp();
    
    function initializeApp() {
        // Set up event listeners
        startReadingBtn.addEventListener('click', startReading);
        spreadBtns.forEach(btn => {
            btn.addEventListener('click', selectSpread);
        });
        cardDeck.addEventListener('click', drawCards);
        testSubmitBtn.addEventListener('click', analyzeTest);
        aboutBtn.addEventListener('click', () => aboutModal.classList.remove('hidden'));
        closeAboutBtn.addEventListener('click', () => aboutModal.classList.add('hidden'));
        themeToggle.addEventListener('click', toggleTheme);
        
        // Close modal when clicking outside
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) {
                aboutModal.classList.add('hidden');
            }
        });
        
        // Preload card images
        preloadCardImages();
    }
    
    function preloadCardImages() {
        // Preload card images to ensure smooth transitions
        tarotCards.forEach(card => {
            const img = new Image();
            img.src = card.image;
        });
    }
    
    function startReading() {
        introSection.classList.add('hidden');
        readingSection.classList.remove('hidden');
        
        // Setup spread
        setupSpread(selectedSpread);
    }
    
    function selectSpread(e) {
        // Remove selected class from all buttons
        spreadBtns.forEach(btn => btn.classList.remove('selected'));
        
        // Add selected class to clicked button
        e.target.classList.add('selected');
        
        // Update selected spread
        selectedSpread = parseInt(e.target.dataset.cards);
        
        // Reset UI
        resetReadingUI();
        
        // Setup new spread
        setupSpread(selectedSpread);
    }
    
    function resetReadingUI() {
        // Hide reading results and lotm section
        readingResult.classList.add('hidden');
        lotmSection.classList.add('hidden');
        
        // Clear drawn cards
        drawnCards = [];
    }
    
    function setupSpread(numCards) {
        // Clear spread container
        spreadContainer.innerHTML = '';
        
        // Remove any existing layout classes
        spreadContainer.className = '';
        spreadContainer.id = 'spread-container';
        
        // Add cross layout class if needed
        if (numCards === 5) {
            spreadContainer.classList.add('cross-layout');
        } else {
            // Add grid classes based on number of cards
            if (numCards === 1) {
                spreadContainer.classList.add('grid', 'grid-cols-1', 'gap-6');
            } else if (numCards === 3) {
                spreadContainer.classList.add('grid', 'grid-cols-1', 'md:grid-cols-3', 'gap-6');
            }
        }
        
        // Create placeholders based on spread type
        for (let i = 0; i < numCards; i++) {
            let position = '';
            
            if (numCards === 1) {
                position = '現狀或問題';
            } else if (numCards === 3) {
                if (i === 0) position = '過去';
                if (i === 1) position = '現在';
                if (i === 2) position = '未來';
            } else if (numCards === 5) {
                if (i === 0) position = '現狀';
                if (i === 1) position = '影響因素';
                if (i === 2) position = '過去基礎';
                if (i === 3) position = '潛在問題';
                if (i === 4) position = '可能結果';
            }
            
            const placeholder = document.createElement('div');
            placeholder.className = 'card-placeholder';
            placeholder.textContent = position;
            placeholder.dataset.position = position;
            
            spreadContainer.appendChild(placeholder);
        }
    }
    
    function drawCards() {
        if (isDrawing) return;
        
        // Check if all cards are already drawn
        const placeholders = document.querySelectorAll('.card-placeholder');
        if (placeholders.length === 0) return;
        
        isDrawing = true;
        
        // Reset previous reading if any
        drawnCards = [];
        readingResult.classList.add('hidden');
        lotmSection.classList.add('hidden');
        
        // Animate deck
        animateDeckDraw();
        
        // Generate random cards
        const totalCards = placeholders.length;
        const selectedCards = [];
        
        // Draw cards with slight delay between each
        let drawnCount = 0;
        
        const drawInterval = setInterval(() => {
            if (drawnCount >= totalCards) {
                clearInterval(drawInterval);
                setTimeout(() => {
                    displayReadingResult();
                    displayLotmSection();
                    isDrawing = false;
                }, 1000);
                return;
            }
            
            // Draw a random card
            let randomCard;
            do {
                randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
            } while (selectedCards.includes(randomCard.id));
            
            selectedCards.push(randomCard.id);
            
            // Decide if the card is reversed (30% chance)
            const isReversed = Math.random() < 0.3;
            
            // Store drawn card
            drawnCards.push({
                ...randomCard,
                isReversed,
                position: placeholders[drawnCount].dataset.position
            });
            
            // Replace placeholder with card
            const placeholder = placeholders[drawnCount];
            const cardElement = createCardElement(randomCard, isReversed, placeholder.dataset.position);
            placeholder.parentNode.replaceChild(cardElement, placeholder);
            
            // Flip card after a short delay
            setTimeout(() => {
                cardElement.classList.add('flipped');
            }, 300);
            
            drawnCount++;
        }, 600);
    }
    
    function createCardElement(card, isReversed, position) {
        const cardElement = document.createElement('div');
        cardElement.className = `tarot-card ${isReversed ? 'reversed' : ''}`;
        cardElement.dataset.cardId = card.id;
        
        cardElement.innerHTML = `
            <div class="card-position">${position}</div>
            <div class="tarot-card-inner">
                <div class="tarot-card-front"></div>
                <div class="tarot-card-back">
                    <div class="card-image">
                        <img src="${card.image}" alt="${card.name}">
                    </div>
                    <div class="card-title">${card.name}</div>
                    <div class="card-subtitle">${isReversed ? '逆位' : '正位'}</div>
                </div>
            </div>
        `;
        
        return cardElement;
    }
    
    function animateDeckDraw() {
        cardDeck.classList.add('drawing');
        
        // Apply animation to deck cards
        const deckCards = document.querySelectorAll('.deck-card');
        deckCards.forEach((card, index) => {
            card.style.animation = `drawCard 0.5s ${index * 0.1}s forwards`;
        });
        
        // Reset animation after completion
        setTimeout(() => {
            deckCards.forEach(card => {
                card.style.animation = '';
            });
            cardDeck.classList.remove('drawing');
        }, 1500);
    }
    
    function displayReadingResult() {
        // Clear previous content
        readingContent.innerHTML = '';
        
        // Create header
        const header = document.createElement('div');
        header.className = 'text-center mb-6';
        header.innerHTML = `
            <h4 class="text-xl font-cinzel mb-2 text-white">塔羅解讀</h4>
            <p class="text-gray-300">以下是對您所抽取的塔羅牌的解讀</p>
        `;
        readingContent.appendChild(header);
        
        // Create reading for each card
        drawnCards.forEach(card => {
            const cardReading = document.createElement('div');
            cardReading.className = 'card-reading mb-8 p-4 bg-gray-800/40 rounded-lg border border-purple-800/30';
            
            const meaning = card.isReversed ? card.reversedMeaning : card.uprightMeaning;
            const keywords = card.isReversed ? card.reversedKeywords : card.uprightKeywords;
            
            cardReading.innerHTML = `
                <div class="flex items-center gap-4 mb-3">
                    <div class="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center">
                        <span class="font-cinzel text-lg">${card.number}</span>
                    </div>
                    <div>
                        <h5 class="font-cinzel text-lg text-white">${card.name} (${card.isReversed ? '逆位' : '正位'})</h5>
                        <p class="text-gray-400 text-sm">${card.position}</p>
                    </div>
                </div>
                <div class="mb-3">
                    <p class="text-gray-300">${meaning}</p>
                </div>
                <div class="mt-3">
                    <p class="text-sm text-gray-400 font-geist-mono">關鍵詞: ${keywords.join(' · ')}</p>
                </div>
            `;
            
            readingContent.appendChild(cardReading);
        });
        
        // Show result
        readingResult.classList.remove('hidden');
        
        // Scroll to reading result
        setTimeout(() => {
            readingResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    
    function displayLotmSection() {
        // Clear previous content
        lotmContent.innerHTML = '';
        
        // Find major arcana cards from drawn cards
        const majorArcanaCards = drawnCards.filter(card => card.majorArcana);
        
        if (majorArcanaCards.length === 0) {
            lotmContent.innerHTML = `
                <div class="text-center">
                    <p class="text-gray-300">未抽到大阿卡納牌，無法進行《詭秘之主》途徑解讀。</p>
                    <p class="text-gray-400 mt-2">請嘗試重新抽牌。</p>
                </div>
            `;
        } else {
            // Find the most dominant pathway
            const pathwaysCount = {};
            majorArcanaCards.forEach(card => {
                const pathway = findLotmPathway(card.id);
                if (pathway) {
                    pathwaysCount[pathway.id] = (pathwaysCount[pathway.id] || 0) + 1;
                }
            });
            
            // Find the pathway with the highest count
            let dominantPathwayId = null;
            let highestCount = 0;
            
            for (const [pathwayId, count] of Object.entries(pathwaysCount)) {
                if (count > highestCount) {
                    dominantPathwayId = pathwayId;
                    highestCount = count;
                }
            }
            
            const dominantPathway = lotmPathways.find(p => p.id === dominantPathwayId);
            
            if (dominantPathway) {
                const pathwayElement = document.createElement('div');
                pathwayElement.className = 'pathway-reading p-4 bg-gray-800/40 rounded-lg border border-purple-800/30';
                
                pathwayElement.innerHTML = `
                    <div class="flex items-center gap-4 mb-4">
                        <div class="flex-shrink-0 w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center">
                            <img src="${dominantPathway.symbolImage}" alt="${dominantPathway.name}" class="w-10 h-10">
                        </div>
                        <div>
                            <h5 class="font-cinzel text-xl text-white">${dominantPathway.name}途徑</h5>
                            <p class="text-gray-400 text-sm">對應塔羅牌: ${dominantPathway.tarotCard}</p>
                        </div>
                    </div>
                    <div class="mb-4">
                        <p class="text-gray-300">${dominantPathway.description}</p>
                    </div>
                    <div class="mt-4">
                        <h6 class="font-cinzel text-lg text-white mb-2">序列特點</h6>
                        <ul class="list-disc list-inside space-y-1 text-gray-300">
                            ${dominantPathway.sequences.map(seq => 
                                `<li><span class="text-purple-300">${seq.name}</span>: ${seq.description}</li>`
                            ).join('')}
                        </ul>
                    </div>
                `;
                
                lotmContent.appendChild(pathwayElement);
            }
        }
        
        // Show LOTM section
        lotmSection.classList.remove('hidden');
        
        // Scroll to LOTM section after a delay
        setTimeout(() => {
            lotmSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }
    
    function findLotmPathway(cardId) {
        // Convert card id to number and find corresponding pathway
        const cardNumber = parseInt(cardId);
        return lotmPathways.find(p => p.tarotNumber === cardNumber);
    }
    
    function analyzeTest() {
        // Get all selected answers
        const q1 = document.querySelector('input[name="q1"]:checked')?.value;
        const q2 = document.querySelector('input[name="q2"]:checked')?.value;
        const q3 = document.querySelector('input[name="q3"]:checked')?.value;
        
        // Check if all questions are answered
        if (!q1 || !q2 || !q3) {
            alert('請回答所有問題');
            return;
        }
        
        // Calculate pathway based on answers
        const pathwayScores = {
            fool: 0,
            magician: 0,
            priestess: 0,
            emperor: 0,
            justice: 0,
            hermit: 0,
            strength: 0,
            chariot: 0,
            tower: 0,
            devil: 0,
            death: 0,
            moon: 0
        };
        
        // Add scores based on answers
        pathwayScores[q1] += 2;  // First question has more weight
        pathwayScores[q2] += 1;
        pathwayScores[q3] += 1;
        
        // Find the pathway with the highest score
        let dominantPathwayId = '';
        let highestScore = 0;
        
        for (const [pathway, score] of Object.entries(pathwayScores)) {
            if (score > highestScore) {
                dominantPathwayId = pathway;
                highestScore = score;
            }
        }
        
        // Map the dominant pathway to a LOTM pathway
        let resultPathway;
        switch (dominantPathwayId) {
            case 'fool':
                resultPathway = lotmPathways.find(p => p.id === 'fool');
                break;
            case 'magician':
                resultPathway = lotmPathways.find(p => p.id === 'magician');
                break;
            case 'priestess':
                resultPathway = lotmPathways.find(p => p.id === 'priestess');
                break;
            case 'emperor':
                resultPathway = lotmPathways.find(p => p.id === 'emperor');
                break;
            case 'justice':
                resultPathway = lotmPathways.find(p => p.id === 'justice');
                break;
            case 'hermit':
                resultPathway = lotmPathways.find(p => p.id === 'hermit');
                break;
            case 'strength':
                resultPathway = lotmPathways.find(p => p.id === 'strength');
                break;
            case 'chariot':
                resultPathway = lotmPathways.find(p => p.id === 'chariot');
                break;
            case 'tower':
                resultPathway = lotmPathways.find(p => p.id === 'sun');
                break;
            case 'devil':
                resultPathway = lotmPathways.find(p => p.id === 'devil');
                break;
            case 'death':
                resultPathway = lotmPathways.find(p => p.id === 'death');
                break;
            case 'moon':
                resultPathway = lotmPathways.find(p => p.id === 'moon');
                break;
            default:
                resultPathway = lotmPathways.find(p => p.id === 'fool');
        }
        
        // Determine sequence level (1-3) randomly
        const sequenceLevel = Math.floor(Math.random() * 3);
        const sequence = resultPathway.sequences[sequenceLevel];
        
        // Display result
        testResult.innerHTML = `
            <div class="flex flex-col md:flex-row gap-4 items-center md:items-start">
                <div class="flex-shrink-0 w-20 h-20 bg-purple-900/50 rounded-full flex items-center justify-center">
                    <img src="${resultPathway.symbolImage}" alt="${resultPathway.name}" class="w-12 h-12">
                </div>
                <div class="flex-grow text-center md:text-left">
                    <h5 class="font-cinzel text-xl text-white mb-1">${resultPathway.name}途徑</h5>
                    <p class="text-purple-300 font-cinzel mb-2">序列${9-sequenceLevel}: ${sequence.name}</p>
                    <p class="text-gray-300">${sequence.description}</p>
                    <p class="mt-3 text-gray-400 text-sm">在《詭秘之主》的世界中，您適合成為${resultPathway.name}途徑的非凡者，${sequence.personalityTraits}</p>
                </div>
            </div>
        `;
        
        // Show test result
        testResult.classList.remove('hidden');
        
        // Scroll to test result
        setTimeout(() => {
            testResult.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
    
    function toggleTheme() {
        // Simple theme toggle (could be expanded to actual dark/light mode)
        document.body.classList.toggle('light-theme');
        
        // Toggle icon
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-theme')) {
            icon.setAttribute('data-lucide', 'sun');
        } else {
            icon.setAttribute('data-lucide', 'moon');
        }
        lucide.createIcons();
    }
});
