const lotmPathways = [
    {
        id: "fool",
        name: "愚者",
        tarotCard: "愚者",
        tarotNumber: 0,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/d/d7/Fool_Symbol2.png/revision/latest/scale-to-width-down/200",
        description: "愚者途徑的非凡者以靈性為基礎，專長於命運、占卜、欺詐和混亂。他們擅長預知未來，操縱命運的力量，並能施展各種稀奇古怪的能力。隨著序列提升，他們逐漸獲得掌控混亂和命運的能力。",
        sequences: [
            {
                name: "小醜",
                description: "能夠通過愚弄、捉弄他人獲得靈性，並能使用簡單的占卜預知技巧。",
                personalityTraits: "您具有令人意想不到的幽默感和靈活思維，善於觀察周圍環境並從中尋找樂趣。"
            },
            {
                name: "占卜家",
                description: "具有較強的預知能力，能夠通過卡牌、星象等方式預測未來。",
                personalityTraits: "您擁有超凡的直覺和洞察力，對事物的發展有著不可思議的預感。"
            },
            {
                name: "魔術師",
                description: "掌握混亂的力量，能夠實現不可思議的奇蹟，並操縱運氣和命運。",
                personalityTraits: "您能夠在混亂中找到秩序，善於利用偶然性創造出不可思議的結果。"
            }
        ]
    },
    {
        id: "magician",
        name: "魔術師",
        tarotCard: "魔術師",
        tarotNumber: 1,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/d/d7/Magician_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "魔術師途徑的非凡者專注於實物和元素的操控，擅長製造各種神奇物品。他們有著優秀的創造能力，可以賦予物品各種超凡特性，甚至能夠變化物質的形態和性質。",
        sequences: [
            {
                name: "學徒",
                description: "掌握基礎的物品操控能力，可以簡單改變物體的屬性。",
                personalityTraits: "您對新知識充滿熱情，有著強烈的好奇心和實驗精神。"
            },
            {
                name: "變魔師",
                description: "能夠巧妙操控物品，創造複雜的幻象和變化。",
                personalityTraits: "您思維靈活，動手能力強，對細節有極高的敏感度。"
            },
            {
                name: "工匠",
                description: "能夠製造具有超凡特性的物品，掌握物質本質的變化。",
                personalityTraits: "您專注而耐心，能夠將想像轉化為現實，創造出令人驚嘆的作品。"
            }
        ]
    },
    {
        id: "priestess",
        name: "女祭司",
        tarotCard: "女祭司",
        tarotNumber: 2,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/7/71/Priestess_Symbol1.png/revision/latest/scale-to-width-down/200",
        description: "女祭司途徑的非凡者與靈界有著密切聯繫，能夠溝通和操控靈體。他們擅長精神和靈性方面的能力，可以影響他人思想，甚至能夠進入靈界。",
        sequences: [
            {
                name: "通靈者",
                description: "能夠感知靈體存在，與靈界有微弱的聯繫。",
                personalityTraits: "您對靈性世界有著特殊的感知，常能察覺到他人感受不到的存在。"
            },
            {
                name: "靈媒",
                description: "能夠與靈體溝通，並借助靈體的力量。",
                personalityTraits: "您具有強烈的同理心和理解力，能夠連接並調和不同的存在。"
            },
            {
                name: "巫師",
                description: "掌握靈界力量，能夠操控靈體和靈性。",
                personalityTraits: "您擁有深刻的智慧和洞察力，能夠看透表象理解事物的本質。"
            }
        ]
    },
    {
        id: "emperor",
        name: "皇帝",
        tarotCard: "皇帝",
        tarotNumber: 4,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/d/d7/Emperor_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "皇帝途徑的非凡者擅長領導和征服，擁有強大的威嚴和影響力。他們能夠激發追隨者的忠誠和勇氣，並在戰鬥中展現出非凡的指揮才能。",
        sequences: [
            {
                name: "管理者",
                description: "具有基礎的領導能力，能夠有效組織和管理小團隊。",
                personalityTraits: "您天生就有領導氣質，善於組織和協調，讓事情有條不紊地進行。"
            },
            {
                name: "統治者",
                description: "擁有強大的威嚴，能夠影響他人的決定和行為。",
                personalityTraits: "您具有不凡的魄力和決斷力，能在關鍵時刻做出正確的判斷。"
            },
            {
                name: "征服者",
                description: "具有非凡的戰略思維和指揮能力，能夠在戰場上取得勝利。",
                personalityTraits: "您眼光長遠，善於分析局勢，並能找到最有效的解決方案。"
            }
        ]
    },
    {
        id: "hierophant",
        name: "教皇",
        tarotCard: "教皇",
        tarotNumber: 5,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/d/d7/Hanged_Man_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "教皇途徑的非凡者專注於知識和真理的探索，能夠獲取並傳播各種秘密信息。他們對知識有著強烈的渴望，並能將所學應用於實踐。",
        sequences: [
            {
                name: "學者",
                description: "擁有超凡的學習能力，能夠快速掌握和理解各種知識。",
                personalityTraits: "您渴求知識，善於學習和思考，對未知充滿好奇。"
            },
            {
                name: "教師",
                description: "能夠有效傳播知識，影響他人的思想和理解。",
                personalityTraits: "您善於表達和溝通，能夠將複雜的概念簡化並傳遞給他人。"
            },
            {
                name: "哲人",
                description: "對真理有深刻的理解，能夠看透事物本質。",
                personalityTraits: "您思考深入，善於從不同角度分析問題，追求真理和本質。"
            }
        ]
    },
    {
        id: "lovers",
        name: "情人",
        tarotCard: "戀人",
        tarotNumber: 6,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/c/c7/Lover_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "情人途徑的非凡者專長於人際關係和情感操控，能夠吸引並影響他人。他們在社交場合如魚得水，能夠輕易獲取他人的信任和好感。",
        sequences: [
            {
                name: "迷惑者",
                description: "具有令人難以抗拒的魅力，能夠輕易吸引他人注意。",
                personalityTraits: "您天生具有吸引力，善於展現自己最好的一面，讓人不由自主被您吸引。"
            },
            {
                name: "情聖",
                description: "能夠理解並影響他人情感，在社交場合遊刃有餘。",
                personalityTraits: "您對人心有著深刻的洞察，能夠捕捉到細微的情感變化，並做出恰當回應。"
            },
            {
                name: "蠱惑者",
                description: "能夠深度影響他人思想和行為，甚至控制他人意志。",
                personalityTraits: "您言語中帶有一種特殊的力量，能夠影響他人的決定和行動。"
            }
        ]
    },
    {
        id: "chariot",
        name: "戰車",
        tarotCard: "戰車",
        tarotNumber: 7,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/37/Chariot_Symbol1.png/revision/latest/scale-to-width-down/200",
        description: "戰車途徑的非凡者擅長速度和戰鬥，具有超凡的反應能力和戰鬥技巧。他們能夠在戰場上迅速移動，給敵人致命一擊。",
        sequences: [
            {
                name: "獵手",
                description: "擁有超越常人的敏捷和反應能力，追蹤能力出色。",
                personalityTraits: "您行動敏捷，思維迅速，能夠在瞬息萬變的情況下做出正確反應。"
            },
            {
                name: "騎士",
                description: "戰鬥能力強大，移動速度驚人，戰場掌控力出色。",
                personalityTraits: "您勇敢無懼，面對挑戰毫不退縮，總是沖在最前線。"
            },
            {
                name: "冠軍",
                description: "戰鬥技巧達到巔峰，能夠擊敗強大對手，戰無不勝。",
                personalityTraits: "您具有不屈的意志和出色的戰略思維，能夠在逆境中找到勝利的方法。"
            }
        ]
    },
    {
        id: "strength",
        name: "力量",
        tarotCard: "力量",
        tarotNumber: 8,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/37/Strength_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "力量途徑的非凡者擁有超越常人的體魄和力量，能夠承受和施加巨大的物理破壞。他們的身體如同鋼鐵般堅韌，力量如同猛獸般可怕。",
        sequences: [
            {
                name: "戰士",
                description: "身體素質遠超常人，具有出色的耐力和力量。",
                personalityTraits: "您堅韌不拔，面對困難毫不退縮，總是能夠依靠自身力量克服障礙。"
            },
            {
                name: "角鬥士",
                description: "力量達到驚人地步，能夠徒手對抗猛獸，承受重創。",
                personalityTraits: "您勇猛果敢，有著不屈的意志，即使面對強大對手也能保持冷靜。"
            },
            {
                name: "巨人",
                description: "力量如山岳般偉岸，能夠造成毀滅性的破壞。",
                personalityTraits: "您是團隊中的中流砥柱，能夠為他人提供強大的支持和保護。"
            }
        ]
    },
    {
        id: "hermit",
        name: "隱者",
        tarotCard: "隱者",
        tarotNumber: 9,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/9/95/Hermit_Symbol1.png/revision/latest/scale-to-width-down/200",
        description: "隱者途徑的非凡者專長於隱藏和探索秘密，能夠發現常人無法察覺的線索和真相。他們善於獨立思考，能夠在孤獨中獲得智慧和力量。",
        sequences: [
            {
                name: "偵探",
                description: "擁有敏銳的觀察力，能夠發現微小線索，解開謎團。",
                personalityTraits: "您注重細節，善於觀察和分析，能夠從微小的線索中推導出重要信息。"
            },
            {
                name: "密探",
                description: "擅長隱藏自己，獲取秘密信息，追蹤目標。",
                personalityTraits: "您行事謹慎，善於保持低調，同時能夠精準捕捉關鍵信息。"
            },
            {
                name: "窺秘人",
                description: "能夠看透謊言和偽裝，發現最深的秘密。",
                personalityTraits: "您思維獨立，不受外界影響，能夠通過冷靜分析得出正確結論。"
            }
        ]
    },
    {
        id: "wheel",
        name: "命運",
        tarotCard: "命運之輪",
        tarotNumber: 10,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/3b/Wheel_of_Fortune_Symbol1.png/revision/latest/scale-to-width-down/200",
        description: "命運途徑的非凡者能夠影響和操控概率，改變事件的發展走向。他們具有不可思議的運氣，能夠在看似不可能的情況下創造奇蹟。",
        sequences: [
            {
                name: "幸運兒",
                description: "擁有異常的好運，危險時刻總能化險為夷。",
                personalityTraits: "您樂觀向上，相信生活中的美好，總能在困境中找到希望。"
            },
            {
                name: "賭徒",
                description: "能夠影響小範圍事件的概率，賭局中幾乎無人能敵。",
                personalityTraits: "您善於冒險，敢於面對未知，同時有著出色的風險評估能力。"
            },
            {
                name: "命運操控者",
                description: "能夠大範圍改變事件走向，扭轉不利局面。",
                personalityTraits: "您具有超凡的洞察力，能夠預見各種可能性，並引導事態朝著有利方向發展。"
            }
        ]
    },
    {
        id: "justice",
        name: "正義",
        tarotCard: "正義",
        tarotNumber: 11,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/3b/Justice_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "正義途徑的非凡者專注於維護平衡和秩序，能夠審判善惡，執行裁決。他們具有強烈的道德感和正義感，無懼黑暗勢力的挑戰。",
        sequences: [
            {
                name: "仲裁者",
                description: "能夠感知謊言，判斷是非，主持公道。",
                personalityTraits: "您公正無私，重視事實和真相，不被個人情感左右。"
            },
            {
                name: "法官",
                description: "能夠辨別善惡，審判罪行，維護秩序。",
                personalityTraits: "您有著堅定的道德準則和正義感，願意為維護公正而戰。"
            },
            {
                name: "執法者",
                description: "能夠執行裁決，懲罰邪惡，保護弱者。",
                personalityTraits: "您行事果斷，敢於面對挑戰，為保護他人不惜犧牲自己。"
            }
        ]
    },
    {
        id: "hanged",
        name: "倒吊人",
        tarotCard: "倒吊人",
        tarotNumber: 12,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/d/d7/Hanged_Man_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "倒吊人途徑的非凡者擅長承受和轉化痛苦，具有超強的生存能力。他們能夠在最惡劣的環境中生存，並從痛苦中獲得力量。",
        sequences: [
            {
                name: "忍者",
                description: "能夠忍受常人難以想像的痛苦，意志堅定。",
                personalityTraits: "您堅韌不拔，能夠在逆境中保持冷靜，不斷尋找生存的可能。"
            },
            {
                name: "苦行僧",
                description: "能夠從痛苦中獲得力量，恢復能力驚人。",
                personalityTraits: "您看待事物的角度獨特，能夠從痛苦和挫折中學習和成長。"
            },
            {
                name: "殉道者",
                description: "能夠轉化痛苦為力量，在最危險的環境中生存。",
                personalityTraits: "您具有超凡的忍耐力和適應能力，能夠在最不利的條件下生存並取得成功。"
            }
        ]
    },
    {
        id: "death",
        name: "死神",
        tarotCard: "死神",
        tarotNumber: 13,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/e/e2/Death_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "死神途徑的非凡者專長於死亡和靈魂的領域，能夠操控屍體和靈魂。他們具有與死亡有關的各種能力，被常人視為恐怖的存在。",
        sequences: [
            {
                name: "掘墓人",
                description: "能夠感知死亡和靈魂，與屍體有特殊聯系。",
                personalityTraits: "您對生死有著獨特的理解，不懼怕死亡，反而能從中看到生命的意義。"
            },
            {
                name: "收屍人",
                description: "能夠操控屍體，利用死者的能力。",
                personalityTraits: "您深沈而冷靜，能夠面對他人避之不及的場景，保持理性和專注。"
            },
            {
                name: "通靈師",
                description: "能夠溝通和控制靈魂，掌握死亡的奧秘。",
                personalityTraits: "您能夠看到事物的終結和新生，理解變化和轉化的本質。"
            }
        ]
    },
    {
        id: "temperance",
        name: "節制",
        tarotCard: "節制",
        tarotNumber: 14,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/e/e2/Temperate_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "節制途徑的非凡者專注於平衡和調和，能夠融合不同元素創造出奇妙效果。他們在醫療和煉金方面有著驚人的天賦。",
        sequences: [
            {
                name: "藥劑師",
                description: "能夠制作各種藥劑，治療疾病和傷痛。",
                personalityTraits: "您細心謹慎，關注細節，善於平衡各種因素以達到最佳效果。"
            },
            {
                name: "醫生",
                description: "具有出色的醫療能力，能夠治愈各種疾病和傷勢。",
                personalityTraits: "您富有同情心，願意幫助他人，同時具有理性分析和解決問題的能力。"
            },
            {
                name: "煉金術士",
                description: "能夠融合不同元素，創造出神奇的煉金產物。",
                personalityTraits: "您善於創新和實驗，能夠將看似不相關的事物結合，創造出新的可能。"
            }
        ]
    },
    {
        id: "devil",
        name: "惡魔",
        tarotCard: "惡魔",
        tarotNumber: 15,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/37/Devil_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "惡魔途徑的非凡者擅長操控欲望和誘惑，能夠激發他人最原始的沖動。他們具有強大的蠱惑能力，能夠引導他人走向墮落。",
        sequences: [
            {
                name: "誘惑者",
                description: "能夠感知並激發他人欲望，具有不可抗拒的魅力。",
                personalityTraits: "您善於理解人性的弱點，能夠發現並利用他人內心深處的渴望。"
            },
            {
                name: "腐蝕者",
                description: "能夠腐蝕他人靈魂，引導他們走向墮落。",
                personalityTraits: "您善於言辭，能夠看透表象，洞察人心最深處的秘密。"
            },
            {
                name: "欲望使者",
                description: "能夠完全控制他人的欲望和沖動，操縱他人行為。",
                personalityTraits: "您具有強大的個人魅力和影響力，能夠引導他人按照您的意願行動。"
            }
        ]
    },
    {
        id: "sun",
        name: "太陽",
        tarotCard: "太陽",
        tarotNumber: 19,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/5/53/Sun_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "太陽途徑的非凡者專注於光明和熱量，擁有凈化和燃燒的能力。他們能夠驅散黑暗，對邪惡生物造成致命傷害。",
        sequences: [
            {
                name: "火焰使者",
                description: "能夠操控火焰和熱量，點燃物體，驅散寒冷。",
                personalityTraits: "您熱情洋溢，充滿活力，如同太陽般溫暖和照耀周圍的人。"
            },
            {
                name: "光明使者",
                description: "能夠創造和操控光明，凈化污穢，驅散黑暗。",
                personalityTraits: "您樂觀向上，總是能看到事物積極的一面，並為他人帶來希望。"
            },
            {
                name: "太陽騎士",
                description: "擁有太陽般的力量，能夠凈化邪惡，治愈傷痛。",
                personalityTraits: "您正直無畏，願意為正義而戰，成為他人黑暗中的明燈。"
            }
        ]
    },
    {
        id: "moon",
        name: "月亮",
        tarotCard: "月亮",
        tarotNumber: 18,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/6/69/Moon_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "月亮途徑的非凡者專長於幻象和變化，能夠操控夢境和幻覺。他們的能力神秘而多變，如同月亮般捉摸不定。",
        sequences: [
            {
                name: "夢行者",
                description: "能夠進入和影響夢境，創造簡單幻象。",
                personalityTraits: "您富有想象力，創造力豐富，思維跳躍而靈活。"
            },
            {
                name: "幻術師",
                description: "能夠創造逼真的幻象，幹擾他人感知。",
                personalityTraits: "您善於觀察和模仿，能夠理解並重現各種覆雜的場景和情感。"
            },
            {
                name: "變形者",
                description: "能夠改變自身外貌，模仿他人，甚至部分轉化身體。",
                personalityTraits: "您適應能力強，善於在不同環境中生存，且具有很強的變通性。"
            }
        ]
    },
    {
        id: "star",
        name: "星辰",
        tarotCard: "星星",
        tarotNumber: 17,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/c/c8/Star_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "星辰途徑的非凡者擅長空間和時間的操控，能夠進行遠距離傳送和預知未來。他們與宇宙的奧秘有著深刻的聯系。",
        sequences: [
            {
                name: "航海家",
                description: "擁有出色的方向感和導航能力，不會迷路。",
                personalityTraits: "您善於尋找方向和指引，即使在最覆雜的情況下也能找到出路。"
            },
            {
                name: "占星家",
                description: "能夠通過星象預測未來，感知遠方事件。",
                personalityTraits: "您思維開闊，善於從宏觀角度理解事物，看到他人看不到的聯系。"
            },
            {
                name: "空間行者",
                description: "能夠短距離傳送，穿越空間障礙。",
                personalityTraits: "您思想自由，不受常規束縛，能夠找到常人無法發現的解決方案。"
            }
        ]
    },
    {
        id: "tower",
        name: "高塔",
        tarotCard: "高塔",
        tarotNumber: 16,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/1/1c/Tower_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "高塔途徑的非凡者專精於破壞和創造，能夠操控雷電和風暴的力量。他們如同自然的憤怒，能夠帶來毀滅性的破壞。",
        sequences: [
            {
                name: "風暴使者",
                description: "能夠感知和小範圍操控天氣，引導風和雨。",
                personalityTraits: "您性格如同風暴般變幻莫測，時而平靜，時而激昂。"
            },
            {
                name: "雷電使者",
                description: "能夠操控雷電，釋放強大的破壞力。",
                personalityTraits: "您行動迅速，決斷有力，如同閃電般直擊問題核心。"
            },
            {
                name: "毀滅者",
                description: "能夠引發大範圍的自然災害，摧毀一切障礙。",
                personalityTraits: "您具有強大的變革能力，能夠摧毀舊有秩序，創造全新可能。"
            }
        ]
    },
    {
        id: "judgement",
        name: "審判",
        tarotCard: "審判",
        tarotNumber: 20,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/37/Judgement_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "審判途徑的非凡者專注於凈化和救贖，能夠辨別善惡，懲罰邪惡。他們如同神明的代言人，代表著最終的裁決。",
        sequences: [
            {
                name: "凈化者",
                description: "能夠凈化污穢，驅散邪惡影響，治愈精神創傷。",
                personalityTraits: "您具有強烈的正義感和同情心，願意幫助他人擺脫內心的黑暗。"
            },
            {
                name: "審判者",
                description: "能夠判斷善惡，懲罰邪惡，保護無辜。",
                personalityTraits: "您公正嚴明，不受私情影響，能夠客觀評判各種覆雜情況。"
            },
            {
                name: "救贖者",
                description: "能夠救贖墮落的靈魂，給予重生的機會。",
                personalityTraits: "您堅信每個人都有改變的可能，願意給予他人第二次機會。"
            }
        ]
    },
    {
        id: "world",
        name: "世界",
        tarotCard: "世界",
        tarotNumber: 21,
        symbolImage: "https://static.wikia.nocookie.net/lord-of-the-mystery/images/3/37/World_Symbol.png/revision/latest/scale-to-width-down/200",
        description: "世界途徑的非凡者擁有連接和了解世界本質的能力，能夠操控自然法則和世界規則。他們代表著完成和整合，是最接近真理的存在。",
        sequences: [
            {
                name: "探索者",
                description: "能夠感知世界的規律和法則，理解自然的秩序。",
                personalityTraits: "您充滿好奇心，不斷探索未知，渴望理解世界的本質。"
            },
            {
                name: "旅行者",
                description: "能夠穿梭於不同的世界和維度，了解多元宇宙。",
                personalityTraits: "您思想開放，能夠接受和融合不同的文化和觀念，視野極為廣闊。"
            },
            {
                name: "守護者",
                description: "能夠維護世界的平衡和秩序，保護世界免於破壞。",
                personalityTraits: "您具有全局意識，考慮問題周全，能夠理解各種決定的長遠影響。"
            }
        ]
    }
];
