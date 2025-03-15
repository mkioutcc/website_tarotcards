const tarotCards = [
    {
        id: "0",
        number: "0",
        name: "愚者",
        image: "https://www.trustedtarot.com/img/cards/the-fool.png",
        majorArcana: true,
        uprightMeaning: "新的開始、冒險、自由、無憂無慮、純真、自發性",
        reversedMeaning: "魯莽、冒失、風險、愚蠢、無意識、衝動",
        uprightKeywords: ["開始", "冒險", "自由", "可能性"],
        reversedKeywords: ["魯莽", "衝動", "愚蠢", "風險"]
    },
    {
        id: "1",
        number: "I",
        name: "魔術師",
        image: "https://www.trustedtarot.com/img/cards/the-magician.png",
        majorArcana: true,
        uprightMeaning: "創造力、掌控、意志力、技巧、外交手腕、自信",
        reversedMeaning: "操縱、欺騙、技能不足、權力濫用、浪費才能",
        uprightKeywords: ["創造", "技能", "意志力", "掌控"],
        reversedKeywords: ["操縱", "欺騙", "浪費", "未實現"]
    },
    {
        id: "2",
        number: "II",
        name: "女祭司",
        image: "https://www.trustedtarot.com/img/cards/the-high-priestess.png",
        majorArcana: true,
        uprightMeaning: "直覺、秘密知識、內在聲音、潛意識、神秘",
        reversedMeaning: "隱藏的動機、信息不足、表面知識、直覺被忽視",
        uprightKeywords: ["直覺", "智慧", "秘密", "神秘"],
        reversedKeywords: ["表面", "忽視", "混亂", "隱藏"]
    },
    {
        id: "3",
        number: "III",
        name: "皇後",
        image: "https://www.trustedtarot.com/img/cards/the-empress.png",
        majorArcana: true,
        uprightMeaning: "豐饒、母性、創造力、自然、滋養、富足",
        reversedMeaning: "依賴、過度保護、創意阻滯、懶惰、虛榮",
        uprightKeywords: ["豐饒", "母性", "創造力", "自然"],
        reversedKeywords: ["依賴", "阻滯", "疏忽", "過度關注"]
    },
    {
        id: "4",
        number: "IV",
        name: "皇帝",
        image: "https://www.trustedtarot.com/img/cards/the-emperor.png",
        majorArcana: true,
        uprightMeaning: "權威、領導力、結構、穩定、權力、保護",
        reversedMeaning: "獨裁、控制、僵化、冷酷、過度支配",
        uprightKeywords: ["權威", "結構", "穩定", "保護"],
        reversedKeywords: ["控制", "僵化", "獨裁", "冷酷"]
    },
    {
        id: "5",
        number: "V",
        name: "教皇",
        image: "https://www.trustedtarot.com/img/cards/the-hierophant.png",
        majorArcana: true,
        uprightMeaning: "傳統、習俗、規則、精神導師、遵循社會規範",
        reversedMeaning: "叛逆、不循規蹈矩、非傳統的方法、過於墨守成規",
        uprightKeywords: ["傳統", "規則", "導師", "學習"],
        reversedKeywords: ["叛逆", "非傳統", "不服從", "固執"]
    },
    {
        id: "6",
        number: "VI",
        name: "戀人",
        image: "https://www.trustedtarot.com/img/cards/the-lovers.png",
        majorArcana: true,
        uprightMeaning: "愛情、和諧、關係、價值觀、選擇、結合",
        reversedMeaning: "不平衡、分離、錯位的價值觀、不良選擇",
        uprightKeywords: ["愛情", "和諧", "關係", "選擇"],
        reversedKeywords: ["分離", "不和", "衝突", "錯誤選擇"]
    },
    {
        id: "7",
        number: "VII",
        name: "戰車",
        image: "https://www.trustedtarot.com/img/cards/the-chariot.png",
        majorArcana: true,
        uprightMeaning: "意志力、決心、勝利、自信、控制、勇氣",
        reversedMeaning: "自我懷疑、缺乏方向、侵略、失控",
        uprightKeywords: ["勝利", "決心", "意志力", "勇氣"],
        reversedKeywords: ["失控", "懷疑", "無方向", "挫敗"]
    },
    {
        id: "8",
        number: "VIII",
        name: "力量",
        image: "https://www.trustedtarot.com/img/cards/strength.png",
        majorArcana: true,
        uprightMeaning: "力量、勇氣、耐心、溫柔、說服力、影響力",
        reversedMeaning: "虛弱、自我懷疑、缺乏信心、強權",
        uprightKeywords: ["力量", "勇氣", "耐心", "影響力"],
        reversedKeywords: ["虛弱", "懷疑", "殘暴", "強權"]
    },
    {
        id: "9",
        number: "IX",
        name: "隱者",
        image: "https://www.trustedtarot.com/img/cards/the-hermit.png",
        majorArcana: true,
        uprightMeaning: "內省、沈思、獨處、尋找答案、內在指引",
        reversedMeaning: "孤獨、隔離、被忽視、退卻、不安",
        uprightKeywords: ["內省", "引導", "智慧", "獨處"],
        reversedKeywords: ["孤獨", "隔離", "不安", "退縮"]
    },
    {
        id: "10",
        number: "X",
        name: "命運之輪",
        image: "https://www.trustedtarot.com/img/cards/wheel-of-fortune.png",
        majorArcana: true,
        uprightMeaning: "命運、週期、轉折點、機會、發展",
        reversedMeaning: "厄運、阻礙、失控、外部力量、停滯",
        uprightKeywords: ["命運", "轉折", "機會", "發展"],
        reversedKeywords: ["厄運", "阻礙", "停滯", "失控"]
    },
    {
        id: "11",
        number: "XI",
        name: "正義",
        image: "https://www.trustedtarot.com/img/cards/justice.png",
        majorArcana: true,
        uprightMeaning: "正義、公平、真理、法律、清晰、因果",
        reversedMeaning: "不公、偏見、不公平、失衡、拖延",
        uprightKeywords: ["正義", "公平", "真理", "平衡"],
        reversedKeywords: ["不公", "偏見", "失衡", "拖延"]
    },
    {
        id: "12",
        number: "XII",
        name: "倒吊人",
        image: "https://www.trustedtarot.com/img/cards/the-hanged-man.png",
        majorArcana: true,
        uprightMeaning: "犧牲、暫停、放手、新視角、超脫",
        reversedMeaning: "停滯、拖延、抵抗、無謂的犧牲",
        uprightKeywords: ["犧牲", "暫停", "視角", "超脫"],
        reversedKeywords: ["停滯", "抵抗", "無意義", "耽擱"]
    },
    {
        id: "13",
        number: "XIII",
        name: "死神",
        image: "https://www.trustedtarot.com/img/cards/death.png",
        majorArcana: true,
        uprightMeaning: "結束、變化、轉型、過渡、失去，新生",
        reversedMeaning: "抵制變化、停滯、拒絕放手、恐懼轉變",
        uprightKeywords: ["結束", "變化", "轉型", "新生"],
        reversedKeywords: ["抵抗", "停滯", "恐懼", "拒絕"]
    },
    {
        id: "14",
        number: "XIV",
        name: "節制",
        image: "https://www.trustedtarot.com/img/cards/temperance.png",
        majorArcana: true,
        uprightMeaning: "均衡、適度、耐心、調合、目的",
        reversedMeaning: "失衡、過度、不調和、衝突、缺乏遠見",
        uprightKeywords: ["平衡", "適度", "調合", "耐心"],
        reversedKeywords: ["失衡", "過度", "衝突", "缺乏"]
    },
    {
        id: "15",
        number: "XV",
        name: "惡魔",
        image: "https://www.trustedtarot.com/img/cards/the-devil.png",
        majorArcana: true,
        uprightMeaning: "束縛、慾望、誘惑、沈迷、依戀",
        reversedMeaning: "釋放、擺脫束縛、重獲自由、重獲力量",
        uprightKeywords: ["束縛", "誘惑", "沈迷", "陰影"],
        reversedKeywords: ["釋放", "自由", "恢復", "突破"]
    },
    {
        id: "16",
        number: "XVI",
        name: "高塔",
        image: "https://www.trustedtarot.com/img/cards/the-tower.png",
        majorArcana: true,
        uprightMeaning: "突變、動盪、崩潰、揭示、醒悟、解放",
        reversedMeaning: "避免災難、恐懼變化、延遲必然的轉變",
        uprightKeywords: ["突變", "揭示", "崩潰", "醒悟"],
        reversedKeywords: ["恐懼", "避免", "延遲", "阻滯"]
    },
    {
        id: "17",
        number: "XVII",
        name: "星星",
        image: "https://www.trustedtarot.com/img/cards/the-star.png",
        majorArcana: true,
        uprightMeaning: "希望、信念、靈感、寧靜、更新，療癒",
        reversedMeaning: "失落、缺乏信心、疏離、失望、沮喪",
        uprightKeywords: ["希望", "靈感", "寧靜", "更新"],
        reversedKeywords: ["失望", "沮喪", "疏離", "缺乏"]
    },
    {
        id: "18",
        number: "XVIII",
        name: "月亮",
        image: "https://www.trustedtarot.com/img/cards/the-moon.png",
        majorArcana: true,
        uprightMeaning: "幻覺、直覺、潛意識、謎團、混亂、恐懼",
        reversedMeaning: "釋放恐懼、澄清、揭示、不確定性結束",
        uprightKeywords: ["幻覺", "直覺", "潛意識", "恐懼"],
        reversedKeywords: ["澄清", "釋放", "揭示", "真相"]
    },
    {
        id: "19",
        number: "XIX",
        name: "太陽",
        image: "https://www.trustedtarot.com/img/cards/the-sun.png",
        majorArcana: true,
        uprightMeaning: "喜悅、成功、慶祝、積極、活力、啟蒙",
        reversedMeaning: "過度樂觀、天真、不現實期望、延遲成功",
        uprightKeywords: ["喜悅", "成功", "活力", "啟蒙"],
        reversedKeywords: ["過度", "天真", "延遲", "不切實際"]
    },
    {
        id: "20",
        number: "XX",
        name: "審判",
        image: "https://www.trustedtarot.com/img/cards/judgement.png",
        majorArcana: true,
        uprightMeaning: "重生、內心召喚、覺醒、寬恕、救贖",
        reversedMeaning: "自我懷疑、拒絕呼召、拖延、失去自我",
        uprightKeywords: ["重生", "覺醒", "寬恕", "救贖"],
        reversedKeywords: ["懷疑", "拒絕", "拖延", "恐懼"]
    },
    {
        id: "21",
        number: "XXI",
        name: "世界",
        image: "https://www.trustedtarot.com/img/cards/the-world.png",
        majorArcana: true,
        uprightMeaning: "完成、成就、旅行、整合、成功",
        reversedMeaning: "不完整、停滯、缺乏願景、短視",
        uprightKeywords: ["完成", "成就", "整合", "旅行"],
        reversedKeywords: ["不完整", "停滯", "短視", "受限"]
    },
    {
        id: "wands_ace",
        number: "A",
        name: "權杖王牌",
        image: "https://www.trustedtarot.com/img/cards/ace-of-wands.png",
        majorArcana: false,
        uprightMeaning: "創意、靈感、新項目、精力、激情、潛力",
        reversedMeaning: "延遲、阻礙、創意阻塞、能量分散、壓抑",
        uprightKeywords: ["創意", "靈感", "潛力", "開始"],
        reversedKeywords: ["延遲", "阻塞", "分散", "壓抑"]
    },
    {
        id: "wands_2",
        number: "2",
        name: "權杖二",
        image: "https://www.trustedtarot.com/img/cards/two-of-wands.png",
        majorArcana: false,
        uprightMeaning: "計劃、決定、離別、發展、個人力量",
        reversedMeaning: "恐懼變化、拖延決定、缺乏規劃、後悔",
        uprightKeywords: ["計劃", "決定", "展望", "進步"],
        reversedKeywords: ["恐懼", "拖延", "缺乏", "後悔"]
    },
    {
        id: "wands_3",
        number: "3",
        name: "權杖三",
        image: "https://www.trustedtarot.com/img/cards/three-of-wands.png",
        majorArcana: false,
        uprightMeaning: "擴張、成長、探索、信心、遠見卓識",
        reversedMeaning: "障礙、延誤、合作問題、缺乏遠見",
        uprightKeywords: ["擴張", "成長", "遠見", "探索"],
        reversedKeywords: ["障礙", "延誤", "問題", "局限"]
    },
    {
        id: "cups_ace",
        number: "A",
        name: "聖杯王牌",
        image: "https://www.trustedtarot.com/img/cards/ace-of-cups.png",
        majorArcana: false,
        uprightMeaning: "新感情、直覺、靈感、新的開始、精神啟示",
        reversedMeaning: "情感封閉、情感不穩定、創意阻塞、忽視自己",
        uprightKeywords: ["情感", "新開始", "愛", "靈感"],
        reversedKeywords: ["封閉", "不穩定", "阻塞", "忽略"]
    },
    {
        id: "cups_2",
        number: "2",
        name: "聖杯二",
        image: "https://www.trustedtarot.com/img/cards/two-of-cups.png",
        majorArcana: false,
        uprightMeaning: "結合、戀情、友誼、夥伴關係、相互吸引",
        reversedMeaning: "分離、不和諧、失衡關係、衝突",
        uprightKeywords: ["結合", "和諧", "夥伴", "吸引"],
        reversedKeywords: ["分離", "不和", "衝突", "失衡"]
    },
    {
        id: "cups_3",
        number: "3",
        name: "聖杯三",
        image: "https://www.trustedtarot.com/img/cards/three-of-cups.png",
        majorArcana: false,
        uprightMeaning: "慶祝、友誼、創造力、合作、社區",
        reversedMeaning: "過度放縱、派對結束、失去聯系、排外",
        uprightKeywords: ["慶祝", "友誼", "合作", "社區"],
        reversedKeywords: ["過度", "結束", "失聯", "排外"]
    },
    {
        id: "swords_ace",
        number: "A",
        name: "寶劍王牌",
        image: "https://www.trustedtarot.com/img/cards/ace-of-swords.png",
        majorArcana: false,
        uprightMeaning: "清晰、新思路、真相、突破、力量、勝利",
        reversedMeaning: "混亂、暴力、懲罰、決心不足、謊言",
        uprightKeywords: ["清晰", "真相", "突破", "力量"],
        reversedKeywords: ["混亂", "暴力", "不足", "謊言"]
    },
    {
        id: "swords_2",
        number: "2",
        name: "寶劍二",
        image: "https://www.trustedtarot.com/img/cards/two-of-swords.png",
        majorArcana: false,
        uprightMeaning: "猶豫、選擇、僵局、否認、平衡",
        reversedMeaning: "自欺欺人、混亂、情緒多變、壓力過大",
        uprightKeywords: ["猶豫", "選擇", "僵局", "平衡"],
        reversedKeywords: ["自欺", "混亂", "多變", "壓力"]
    },
    {
        id: "swords_3",
        number: "3",
        name: "寶劍三",
        image: "https://www.trustedtarot.com/img/cards/three-of-swords.png",
        majorArcana: false,
        uprightMeaning: "心碎、悲傷、失落、痛苦、哀傷、傷害",
        reversedMeaning: "走出傷痛、愈合、釋放、積極前行",
        uprightKeywords: ["心碎", "悲傷", "痛苦", "失落"],
        reversedKeywords: ["愈合", "釋放", "前行", "接受"]
    },
    {
        id: "pentacles_ace",
        number: "A",
        name: "星幣王牌",
        image: "https://www.trustedtarot.com/img/cards/ace-of-pentacles.png",
        majorArcana: false,
        uprightMeaning: "物質機會、繁榮、新的財富開始、健康",
        reversedMeaning: "錯失機會、不可靠、貪婪、短視",
        uprightKeywords: ["機會", "繁榮", "財富", "健康"],
        reversedKeywords: ["錯失", "不可靠", "貪婪", "短視"]
    },
    {
        id: "pentacles_2",
        number: "2",
        name: "星幣二",
        image: "https://www.trustedtarot.com/img/cards/two-of-pentacles.png",
        majorArcana: false,
        uprightMeaning: "平衡、靈活性、時間管理、適應變化",
        reversedMeaning: "失衡、過度擴張、優先次序混亂、無法滿足承諾",
        uprightKeywords: ["平衡", "靈活", "管理", "適應"],
        reversedKeywords: ["失衡", "混亂", "無法", "過度"]
    },
    {
        id: "pentacles_3",
        number: "3",
        name: "星幣三",
        image: "https://www.trustedtarot.com/img/cards/three-of-pentacles.png",
        majorArcana: false,
        uprightMeaning: "團隊合作、學習、精通、技能應用、欣賞",
        reversedMeaning: "缺乏團隊精神、技能不足、低質量工作、自負",
        uprightKeywords: ["合作", "學習", "精通", "欣賞"],
        reversedKeywords: ["缺乏", "不足", "低質", "自負"]
    }
];
