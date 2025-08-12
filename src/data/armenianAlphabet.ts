export interface ArmenianLetter {
  armenian: string;
  english: string;
  pronunciation: string;
  phonetic: string;
  examples: { armenian: string; english: string }[];
}

export const armenianAlphabet: ArmenianLetter[] = [
  {
    armenian: "Ա",
    english: "A",
    pronunciation: "ah",
    phonetic: "/ɑ/",
    examples: [
      { armenian: "Ա", english: "A" },
      { armenian: "Աpple", english: "Apple" },
      { armenian: "cաmerա", english: "Camera" },
      { armenian: "pizzա", english: "Pizza" },
      { armenian: "sofա", english: "Sofa" }
    ]
  },
  {
    armenian: "Բ",
    english: "B", 
    pronunciation: "beh",
    phonetic: "/b/",
    examples: [
      { armenian: "Բ", english: "B" },
      { armenian: "Բanana", english: "Banana" },
      { armenian: "caբ", english: "Cab" },
      { armenian: "աbout", english: "About" },
      { armenian: "baբy", english: "Baby" }
    ]
  },
  {
    armenian: "Գ",
    english: "G",
    pronunciation: "geh", 
    phonetic: "/ɡ/",
    examples: [
      { armenian: "Գ", english: "G" },
      { armenian: "Գarden", english: "Garden" },
      { armenian: "բaգ", english: "Bag" },
      { armenian: "biգ", english: "Big" },
      { armenian: "բuգ", english: "Bug" }
    ]
  },
  {
    armenian: "Դ",
    english: "D",
    pronunciation: "deh",
    phonetic: "/d/",
    examples: [
      { armenian: "Դ", english: "D" },
      { armenian: "Դoor", english: "Door" },
      { armenian: "baդ", english: "Bad" },
      { armenian: "ադդ", english: "Add" },
      { armenian: "բeդ", english: "Bed" }
    ]
  },
  {
    armenian: "Ե",
    english: "E",
    pronunciation: "yeh",
    phonetic: "/ɛ/",
    examples: [
      { armenian: "Ե", english: "E" },
      { armenian: "Եlephant", english: "Elephant" },
      { armenian: "բեd", english: "Bed" },
      { armenian: "ագե", english: "Age" },
      { armenian: "բaդգե", english: "Badge" }
    ]
  },
  {
    armenian: "Զ",
    english: "Z",
    pronunciation: "zeh",
    phonetic: "/z/",
    examples: [
      { armenian: "Զ", english: "Z" },
      { armenian: "Զebra", english: "Zebra" },
      { armenian: "siզe", english: "Size" },
      { armenian: "maզe", english: "Maze" },
      { armenian: "բuզզ", english: "Buzz" }
    ]
  },
  {
    armenian: "Է",
    english: "E",
    pronunciation: "eh",
    phonetic: "/e/",
    examples: [
      { armenian: "Է", english: "E" },
      { armenian: "Էducation", english: "Education" },
      { armenian: "bէd", english: "Bed" },
      { armenian: "aգէ", english: "Age" },
      { armenian: "բaդգէ", english: "Badge" }
    ]
  },
  {
    armenian: "Ը",
    english: "Y",
    pronunciation: "ut",
    phonetic: "/ə/",
    examples: [
      { armenian: "Ը", english: "Y" },
      { armenian: "Ունique", english: "Unique" },
      { armenian: "abovը", english: "Above" },
      { armenian: "alreaդը", english: "Already" },
      { armenian: "baդգը", english: "Badge" }
    ]
  },
  {
    armenian: "Թ",
    english: "T'",
    pronunciation: "t'eh",
    phonetic: "/tʰ/",
    examples: [
      { armenian: "Թ", english: "T'" },
      { armenian: "Թeacher", english: "Teacher" },
      { armenian: "caթ", english: "Cat" },
      { armenian: "baթ", english: "Bat" },
      { armenian: "beթ", english: "Bet" }
    ]
  },
  {
    armenian: "Ժ",
    english: "ZH",
    pronunciation: "zheh",
    phonetic: "/ʒ/",
    examples: [
      { armenian: "Ժ", english: "ZH" },
      { armenian: "Ժournal", english: "Journal" },
      { armenian: "pleaժure", english: "Pleasure" },
      { armenian: "treaժure", english: "Treasure" },
      { armenian: "garaժe", english: "Garage" }
    ]
  },
  {
    armenian: "Ի",
    english: "I",
    pronunciation: "ee",
    phonetic: "/i/",
    examples: [
      { armenian: "Ի", english: "I" },
      { armenian: "Իce", english: "Ice" },
      { armenian: "bիg", english: "Big" },
      { armenian: "thիs", english: "This" },
      { armenian: "bիt", english: "Bit" }
    ]
  },
  {
    armenian: "Լ",
    english: "L",
    pronunciation: "leh",
    phonetic: "/l/",
    examples: [
      { armenian: "Լ", english: "L" },
      { armenian: "Լemon", english: "Lemon" },
      { armenian: "caԼԼ", english: "Call" },
      { armenian: "aԼԼ", english: "All" },
      { armenian: "teԼԼ", english: "Tell" }
    ]
  },
  {
    armenian: "Խ",
    english: "KH",
    pronunciation: "kheh",
    phonetic: "/x/",
    examples: [
      { armenian: "Խ", english: "KH" },
      { armenian: "Կitchen", english: "Kitchen" },
      { armenian: "thinԿ", english: "Think" },
      { armenian: "thanԿ", english: "Thank" },
      { armenian: "booԿ", english: "Book" }
    ]
  },
  {
    armenian: "Ծ",
    english: "TS",
    pronunciation: "dzeh",
    phonetic: "/ts/",
    examples: [
      { armenian: "Ծ", english: "TS" },
      { armenian: "Ծar", english: "Car" },
      { armenian: "caԾs", english: "Cats" },
      { armenian: "cuԾs", english: "Cuts" },
      { armenian: "baԾs", english: "Bats" }
    ]
  },
  {
    armenian: "Կ",
    english: "K",
    pronunciation: "keh",
    phonetic: "/k/",
    examples: [
      { armenian: "Կ", english: "K" },
      { armenian: "Կite", english: "Kite" },
      { armenian: "booԿ", english: "Book" },
      { armenian: "looԿ", english: "Look" },
      { armenian: "walԿ", english: "Walk" }
    ]
  },
  {
    armenian: "Հ",
    english: "H",
    pronunciation: "heh",
    phonetic: "/h/",
    examples: [
      { armenian: "Հ", english: "H" },
      { armenian: "Հouse", english: "House" },
      { armenian: "rigՀt", english: "Right" },
      { armenian: "ligՀt", english: "Light" },
      { armenian: "nigՀt", english: "Night" }
    ]
  },
  {
    armenian: "Ձ",
    english: "DZ",
    pronunciation: "jeh",
    phonetic: "/dz/",
    examples: [
      { armenian: "Ձ", english: "DZ" },
      { armenian: "Ճog", english: "Dog" },
      { armenian: "hanԴs", english: "Hands" },
      { armenian: "ԿinԴs", english: "Kinds" },
      { armenian: "ԼanԴs", english: "Lands" }
    ]
  },
  {
    armenian: "Ղ",
    english: "GH",
    pronunciation: "gheh",
    phonetic: "/ɣ/",
    examples: [
      { armenian: "Ղ", english: "GH" },
      { armenian: "Գirl", english: "Girl" },
      { armenian: "riՂՀt", english: "Right" },
      { armenian: "liՂՀt", english: "Light" },
      { armenian: "niՂՀt", english: "Night" }
    ]
  },
  {
    armenian: "Ճ",
    english: "CH",
    pronunciation: "cheh",
    phonetic: "/tʃ/",
    examples: [
      { armenian: "Ճ", english: "CH" },
      { armenian: "Ճhair", english: "Chair" },
      { armenian: "teaՃher", english: "Teacher" },
      { armenian: "watՃh", english: "Watch" },
      { armenian: "lunՃh", english: "Lunch" }
    ]
  },
  {
    armenian: "Մ",
    english: "M",
    pronunciation: "meh",
    phonetic: "/m/",
    examples: [
      { armenian: "Մ", english: "M" },
      { armenian: "Մoon", english: "Moon" },
      { armenian: "hoՄe", english: "Home" },
      { armenian: "tiՄe", english: "Time" },
      { armenian: "naՄe", english: "Name" }
    ]
  },
  {
    armenian: "Յ",
    english: "Y",
    pronunciation: "hee",
    phonetic: "/j/",
    examples: [
      { armenian: "Յ", english: "Y" },
      { armenian: "Յellow", english: "Yellow" },
      { armenian: "happՅ", english: "Happy" },
      { armenian: "ՄaՅ", english: "May" },
      { armenian: "daՅ", english: "Day" }
    ]
  },
  {
    armenian: "Ն",
    english: "N",
    pronunciation: "neh",
    phonetic: "/n/",
    examples: [
      { armenian: "Ն", english: "N" },
      { armenian: "Նight", english: "Night" },
      { armenian: "ruՆ", english: "Run" },
      { armenian: "suՆ", english: "Sun" },
      { armenian: "fuՆ", english: "Fun" }
    ]
  },
  {
    armenian: "Շ",
    english: "SH",
    pronunciation: "sheh",
    phonetic: "/ʃ/",
    examples: [
      { armenian: "Շ", english: "SH" },
      { armenian: "Շip", english: "Ship" },
      { armenian: "waՇh", english: "Wash" },
      { armenian: "fiՇh", english: "Fish" },
      { armenian: "wiՇh", english: "Wish" }
    ]
  },
  {
    armenian: "Ո",
    english: "O",
    pronunciation: "voh",
    phonetic: "/vo/",
    examples: [
      { armenian: "Ո", english: "O" },
      { armenian: "Ոcean", english: "Ocean" },
      { armenian: "cՈlՈr", english: "Color" },
      { armenian: "dՈctՈr", english: "Doctor" },
      { armenian: "ՄՈtՈr", english: "Motor" }
    ]
  },
  {
    armenian: "Չ",
    english: "CH'",
    pronunciation: "ch'eh",
    phonetic: "/tʃʰ/",
    examples: [
      { armenian: "Չ", english: "CH'" },
      { armenian: "Չhocolate", english: "Chocolate" },
      { armenian: "lunՉh", english: "Lunch" },
      { armenian: "watՉh", english: "Watch" },
      { armenian: "touՉh", english: "Touch" }
    ]
  },
  {
    armenian: "Պ",
    english: "P",
    pronunciation: "peh",
    phonetic: "/p/",
    examples: [
      { armenian: "Պ", english: "P" },
      { armenian: "Պaper", english: "Paper" },
      { armenian: "stoՊ", english: "Stop" },
      { armenian: "keeՊ", english: "Keep" },
      { armenian: "uՊ", english: "Up" }
    ]
  },
  {
    armenian: "Ջ",
    english: "J",
    pronunciation: "jeh",
    phonetic: "/dʒ/",
    examples: [
      { armenian: "Ջ", english: "J" },
      { armenian: "Ջam", english: "Jam" },
      { armenian: "enՋoՅ", english: "Enjoy" },
      { armenian: "ՄaՋiՉ", english: "Magic" },
      { armenian: "ՉhanՋe", english: "Change" }
    ]
  },
  {
    armenian: "Ռ",
    english: "R",
    pronunciation: "reh",
    phonetic: "/r/",
    examples: [
      { armenian: "Ռ", english: "R" },
      { armenian: "Ռed", english: "Red" },
      { armenian: "caՌ", english: "Car" },
      { armenian: "staՌ", english: "Star" },
      { armenian: "youՌ", english: "Your" }
    ]
  },
  {
    armenian: "Ս",
    english: "S",
    pronunciation: "seh",
    phonetic: "/s/",
    examples: [
      { armenian: "Ս", english: "S" },
      { armenian: "Սun", english: "Sun" },
      { armenian: "thiՍ", english: "This" },
      { armenian: "yeՍ", english: "Yes" },
      { armenian: "uՍe", english: "Use" }
    ]
  },
  {
    armenian: "Վ",
    english: "V",
    pronunciation: "veh",
    phonetic: "/v/",
    examples: [
      { armenian: "Վ", english: "V" },
      { armenian: "Վiolet", english: "Violet" },
      { armenian: "loՎe", english: "Love" },
      { armenian: "giՎe", english: "Give" },
      { armenian: "ՄoՎe", english: "Move" }
    ]
  },
  {
    armenian: "Տ",
    english: "T",
    pronunciation: "teh",
    phonetic: "/t/",
    examples: [
      { armenian: "Տ", english: "T" },
      { armenian: "Տable", english: "Table" },
      { armenian: "waՏeՌ", english: "Water" },
      { armenian: "beՏՏeՌ", english: "Better" },
      { armenian: "leՏՏeՌ", english: "Letter" }
    ]
  },
  {
    armenian: "Ր",
    english: "R",
    pronunciation: "reh",
    phonetic: "/ɾ/",
    examples: [
      { armenian: "Ր", english: "R" },
      { armenian: "Րose", english: "Rose" },
      { armenian: "youՐ", english: "Your" },
      { armenian: "fouՐ", english: "Four" },
      { armenian: "dooՐ", english: "Door" }
    ]
  },
  {
    armenian: "Ց",
    english: "TS'",
    pronunciation: "ts'eh",
    phonetic: "/tsʰ/",
    examples: [
      { armenian: "Ց", english: "TS'" },
      { armenian: "Ցar", english: "Car" },
      { armenian: "faՑՏՍ", english: "Facts" },
      { armenian: "aՑՏՍ", english: "Acts" },
      { armenian: "cuՑՍ", english: "Cuts" }
    ]
  },
  {
    armenian: "Ու",
    english: "U",
    pronunciation: "oo",
    phonetic: "/u/",
    examples: [
      { armenian: "Ու", english: "U" },
      { armenian: "ՈմbՌella", english: "Umbrella" },
      { armenian: "blուe", english: "Blue" },
      { armenian: "ՏՌուe", english: "True" },
      { armenian: "ՌուԼe", english: "Rule" }
    ]
  },
  {
    armenian: "Փ",
    english: "P'",
    pronunciation: "p'eh",
    phonetic: "/pʰ/",
    examples: [
      { armenian: "Փ", english: "P'" },
      { armenian: "Փhone", english: "Phone" },
      { armenian: "ԳՌaՓh", english: "Graph" },
      { armenian: "ՓhՈՏՈ", english: "Photo" },
      { armenian: "ՓaՌaԳՌaՓh", english: "Paragraph" }
    ]
  },
  {
    armenian: "Ք",
    english: "K'",
    pronunciation: "k'eh",
    phonetic: "/kʰ/",
    examples: [
      { armenian: "Ք", english: "K'" },
      { armenian: "Քուeen", english: "Queen" },
      { armenian: "ՔուiՉԿ", english: "Quick" },
      { armenian: "ՔուaliՏՅ", english: "Quality" },
      { armenian: "ՈniՔուe", english: "Unique" }
    ]
  },
  {
    armenian: "Օ",
    english: "O",
    pronunciation: "oh",
    phonetic: "/o/",
    examples: [
      { armenian: "Օ", english: "O" },
      { armenian: "Օrange", english: "Orange" },
      { armenian: "ԳՕ", english: "Go" },
      { armenian: "ՆՕ", english: "No" },
      { armenian: "ՍՕ", english: "So" }
    ]
  },
  {
    armenian: "Ֆ",
    english: "F",
    pronunciation: "feh",
    phonetic: "/f/",
    examples: [
      { armenian: "Ֆ", english: "F" },
      { armenian: "Ֆire", english: "Fire" },
      { armenian: "liՖe", english: "Life" },
      { armenian: "ՍaՖe", english: "Safe" },
      { armenian: "caՖe", english: "Cafe" }
    ]
  }
];