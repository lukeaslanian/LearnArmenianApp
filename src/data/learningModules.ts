export interface LearningModule {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisite?: string; // Previous module id
  vocabulary: VocabularyItem[];
  grammar?: string[];
  exercises: Exercise[];
}

export interface VocabularyItem {
  armenian: string;
  english: string;
  pronunciation: string;
  phonetic: string;
  type: 'noun' | 'verb' | 'adjective' | 'greeting' | 'number' | 'other';
}

export interface Exercise {
  id: string;
  type: 'vocabulary' | 'translation' | 'listening' | 'grammar';
  question: string;
  options?: string[];
  correct: string;
  explanation?: string;
}

export const learningModules: LearningModule[] = [
  {
    id: 'module1',
    title: 'First Words and Basic Sounds',
    description: 'Learn simple consonant-vowel combinations and your first Armenian words',
    difficulty: 'beginner',
    vocabulary: [
      {
        armenian: 'մամա',
        english: 'mama',
        pronunciation: 'mama',
        phonetic: '/mɑmɑ/',
        type: 'noun'
      },
      {
        armenian: 'պապա',
        english: 'papa',
        pronunciation: 'papa',
        phonetic: '/pɑpɑ/',
        type: 'noun'
      },
      {
        armenian: 'նան',
        english: 'bread',
        pronunciation: 'nan',
        phonetic: '/nɑn/',
        type: 'noun'
      },
      {
        armenian: 'մի',
        english: 'one',
        pronunciation: 'mi',
        phonetic: '/mi/',
        type: 'number'
      },
      {
        armenian: 'նա',
        english: 'he/she',
        pronunciation: 'na',
        phonetic: '/nɑ/',
        type: 'other'
      }
    ],
    grammar: [
      'Simple consonant-vowel combinations',
      'Basic word recognition',
      'Letter-to-sound correspondence'
    ],
    exercises: [
      {
        id: 'ex1_1',
        type: 'vocabulary',
        question: 'What does "մամա" mean in English?',
        options: ['papa', 'mama', 'bread', 'one'],
        correct: 'mama',
        explanation: 'մամա (mama) means mama/mother in Armenian'
      },
      {
        id: 'ex1_2',
        type: 'translation',
        question: 'How do you say "bread" in Armenian?',
        options: ['մամա', 'պապա', 'նան', 'նա'],
        correct: 'նան',
        explanation: 'նան (nan) means bread in Armenian'
      },
      {
        id: 'ex1_3',
        type: 'vocabulary',
        question: 'What does "պապա" mean?',
        options: ['mama', 'bread', 'papa', 'one'],
        correct: 'papa',
        explanation: 'պապա (papa) means papa/father in Armenian'
      }
    ]
  },
  {
    id: 'module2',
    title: 'Greetings and Polite Expressions',
    description: 'Learn essential social interactions and polite expressions',
    difficulty: 'beginner',
    prerequisite: 'module1',
    vocabulary: [
      {
        armenian: 'բարև',
        english: 'hello',
        pronunciation: 'barev',
        phonetic: '/bɑrev/',
        type: 'greeting'
      },
      {
        armenian: 'բարև ձեզ',
        english: 'hello (formal)',
        pronunciation: 'barev dzez',
        phonetic: '/bɑrev dzez/',
        type: 'greeting'
      },
      {
        armenian: 'շատ լավ',
        english: 'very good',
        pronunciation: 'shat lav',
        phonetic: '/ʃɑt lɑv/',
        type: 'other'
      },
      {
        armenian: 'շնորհակալություն',
        english: 'thank you',
        pronunciation: 'shnorhakalutyun',
        phonetic: '/ʃnorhɑkɑlutyun/',
        type: 'greeting'
      },
      {
        armenian: 'բարի լույս',
        english: 'good morning',
        pronunciation: 'bari luys',
        phonetic: '/bɑri luys/',
        type: 'greeting'
      }
    ],
    grammar: [
      'Basic greeting structure',
      'Formal vs informal address',
      'Politeness expressions'
    ],
    exercises: [
      {
        id: 'ex2_1',
        type: 'vocabulary',
        question: 'How do you say "hello" in Armenian?',
        options: ['բարև', 'շատ լավ', 'նան', 'մամա'],
        correct: 'բարև',
        explanation: 'բարև (barev) is the common way to say hello in Armenian'
      },
      {
        id: 'ex2_2',
        type: 'vocabulary',
        question: 'What is the formal way to say hello?',
        options: ['բարև', 'բարև ձեզ', 'շատ լավ', 'պապա'],
        correct: 'բարև ձեզ',
        explanation: 'բարև ձեզ (barev dzez) is the formal way to greet someone'
      },
      {
        id: 'ex2_3',
        type: 'translation',
        question: 'How do you say "thank you" in Armenian?',
        options: ['բարև', 'շատ լավ', 'շնորհակալություն', 'բարի լույս'],
        correct: 'շնորհակալություն',
        explanation: 'շնորհակալություն (shnorhakalutyun) means thank you'
      }
    ]
  },
  {
    id: 'module3',
    title: 'Numbers and Basic Counting',
    description: 'Learn numbers 1-10 and basic counting in Armenian',
    difficulty: 'beginner',
    prerequisite: 'module2',
    vocabulary: [
      {
        armenian: 'մեկ',
        english: 'one',
        pronunciation: 'mek',
        phonetic: '/mek/',
        type: 'number'
      },
      {
        armenian: 'երկու',
        english: 'two',
        pronunciation: 'yerku',
        phonetic: '/jerku/',
        type: 'number'
      },
      {
        armenian: 'երեք',
        english: 'three',
        pronunciation: 'yerek',
        phonetic: '/jerek/',
        type: 'number'
      },
      {
        armenian: 'չորս',
        english: 'four',
        pronunciation: 'chors',
        phonetic: '/tʃors/',
        type: 'number'
      },
      {
        armenian: 'հինգ',
        english: 'five',
        pronunciation: 'hing',
        phonetic: '/hiŋ/',
        type: 'number'
      }
    ],
    grammar: [
      'Cardinal numbers 1-10',
      'Using numbers with nouns',
      'Number pronunciation patterns'
    ],
    exercises: [
      {
        id: 'ex3_1',
        type: 'vocabulary',
        question: 'How do you say "three" in Armenian?',
        options: ['մեկ', 'երկու', 'երեք', 'չորս'],
        correct: 'երեք',
        explanation: 'երեք (yerek) means three in Armenian'
      },
      {
        id: 'ex3_2',
        type: 'vocabulary',
        question: 'What number is "երկու"?',
        options: ['one', 'two', 'three', 'four'],
        correct: 'two',
        explanation: 'երկու (yerku) means two in Armenian'
      },
      {
        id: 'ex3_3',
        type: 'translation',
        question: 'How do you say "five" in Armenian?',
        options: ['չորս', 'հինգ', 'երեք', 'մեկ'],
        correct: 'հինգ',
        explanation: 'հինգ (hing) means five in Armenian'
      }
    ]
  }
];