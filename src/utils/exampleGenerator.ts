export interface WordExample {
  armenian: string;
  english: string;
}

// Base words for each letter with proper Armenian placement
const letterWordTemplates: Record<string, Array<{template: string, english: string, positions: number[]}>> = {
  'Ա': [
    { template: 'LETTER', english: 'A', positions: [0] },
    { template: 'LETTERpple', english: 'Apple', positions: [0] },
    { template: 'cLETTERmerLETTER', english: 'Camera', positions: [1, 6] },
    { template: 'pizzLETTER', english: 'Pizza', positions: [4] },
    { template: 'sofLETTER', english: 'Sofa', positions: [3] }
  ],
  'Բ': [
    { template: 'LETTER', english: 'B', positions: [0] },
    { template: 'LETTERanana', english: 'Banana', positions: [0] },
    { template: 'caLETTER', english: 'Cab', positions: [2] },
    { template: 'aLETTERout', english: 'About', positions: [1] },
    { template: 'baLETTERy', english: 'Baby', positions: [2] }
  ],
  'Գ': [
    { template: 'LETTER', english: 'G', positions: [0] },
    { template: 'LETTERarden', english: 'Garden', positions: [0] },
    { template: 'baLETTER', english: 'Bag', positions: [2] },
    { template: 'biLETTER', english: 'Big', positions: [2] },
    { template: 'buLETTER', english: 'Bug', positions: [2] }
  ],
  'Դ': [
    { template: 'LETTER', english: 'D', positions: [0] },
    { template: 'LETTERoor', english: 'Door', positions: [0] },
    { template: 'baLETTER', english: 'Bad', positions: [2] },
    { template: 'aLETTERLETTER', english: 'Add', positions: [1, 2] },
    { template: 'beLETTER', english: 'Bed', positions: [2] }
  ],
  'Ե': [
    { template: 'LETTER', english: 'E', positions: [0] },
    { template: 'LETTERlephant', english: 'Elephant', positions: [0] },
    { template: 'beLETTERd', english: 'Bed', positions: [2] },
    { template: 'agLETTER', english: 'Age', positions: [2] },
    { template: 'badgLETTER', english: 'Badge', positions: [4] }
  ]
  // ... Continue for all letters
};

// Function to generate examples dynamically based on learned letters
export function generateExamples(
  currentLetter: string, 
  learnedLetters: string[], 
  letterIndex: number
): WordExample[] {
  const examples: WordExample[] = [];
  
  // Always include the single letter example
  examples.push({
    armenian: currentLetter,
    english: currentLetter.toUpperCase()
  });

  // Get templates for current letter
  const templates = letterWordTemplates[currentLetter] || [];
  
  // Generate examples using only learned letters
  for (const template of templates.slice(1)) { // Skip the single letter template
    let armenianWord = template.template;
    let isValid = true;
    
    // Replace LETTER with appropriate case
    for (let i = 0; i < template.positions.length; i++) {
      const position = template.positions[i];
      const isFirstLetter = position === 0;
      const letterToUse = isFirstLetter ? currentLetter : currentLetter.toLowerCase();
      
      // Check if we need any other Armenian letters for this word
      // For now, only use letters we've learned so far
      const otherArmenianNeeded = template.template.split('LETTER').length - 1;
      if (otherArmenianNeeded > 1) {
        // This word needs multiple Armenian letters - check if we have them
        const availableArmenianLetters = learnedLetters.slice(0, letterIndex + 1);
        if (availableArmenianLetters.length < otherArmenianNeeded) {
          isValid = false;
          break;
        }
      }
      
      armenianWord = armenianWord.replace('LETTER', letterToUse);
    }
    
    if (isValid) {
      examples.push({
        armenian: armenianWord,
        english: template.english
      });
    }
  }

  // If we don't have enough examples, create simple ones
  while (examples.length < 5) {
    const simpleExamples = [
      { armenian: currentLetter + 'a', english: currentLetter + 'a' },
      { armenian: currentLetter + 'e', english: currentLetter + 'e' },
      { armenian: currentLetter + 'i', english: currentLetter + 'i' },
      { armenian: 'a' + currentLetter.toLowerCase(), english: 'a' + currentLetter.toLowerCase() }
    ];
    
    const randomExample = simpleExamples[examples.length - 1];
    if (randomExample && !examples.find(ex => ex.armenian === randomExample.armenian)) {
      examples.push(randomExample);
    } else {
      break;
    }
  }

  return examples.slice(0, 5); // Return max 5 examples
}

// Comprehensive word templates for better examples
export const improvedWordTemplates: Record<string, Array<{armenian: string, english: string}>> = {
  'Ա': [
    { armenian: 'Ա', english: 'A' },
    { armenian: 'Աpple', english: 'Apple' },
    { armenian: 'cամերա', english: 'Camera' },
    { armenian: 'pizzա', english: 'Pizza' },
    { armenian: 'sofա', english: 'Sofa' }
  ],
  'Բ': [
    { armenian: 'Բ', english: 'B' },
    { armenian: 'Բanana', english: 'Banana' },
    { armenian: 'caբ', english: 'Cab' },
    { armenian: 'աbout', english: 'About' },
    { armenian: 'baբy', english: 'Baby' }
  ],
  'Գ': [
    { armenian: 'Գ', english: 'G' },
    { armenian: 'Գarden', english: 'Garden' },
    { armenian: 'baգ', english: 'Bag' },
    { armenian: 'biգ', english: 'Big' },
    { armenian: 'buգ', english: 'Bug' }
  ],
  'Դ': [
    { armenian: 'Դ', english: 'D' },
    { armenian: 'Դoor', english: 'Door' },
    { armenian: 'baդ', english: 'Bad' },
    { armenian: 'ադդ', english: 'Add' },
    { armenian: 'beդ', english: 'Bed' }
  ],
  'Ե': [
    { armenian: 'Ե', english: 'E' },
    { armenian: 'Եlephant', english: 'Elephant' },
    { armenian: 'բեd', english: 'Bed' },
    { armenian: 'ագե', english: 'Age' },
    { armenian: 'բադգե', english: 'Badge' }
  ],
  'Զ': [
    { armenian: 'Զ', english: 'Z' },
    { armenian: 'Զebra', english: 'Zebra' },
    { armenian: 'siզe', english: 'Size' },
    { armenian: 'maզe', english: 'Maze' },
    { armenian: 'buզզ', english: 'Buzz' }
  ],
  'Է': [
    { armenian: 'Է', english: 'E' },
    { armenian: 'Էducation', english: 'Education' },
    { armenian: 'bէd', english: 'Bed' },
    { armenian: 'agէ', english: 'Age' },
    { armenian: 'badgէ', english: 'Badge' }
  ],
  'Ը': [
    { armenian: 'Ը', english: 'Y' },
    { armenian: 'Ունique', english: 'Unique' },
    { armenian: 'abovը', english: 'Above' },
    { armenian: 'alreadը', english: 'Already' },
    { armenian: 'badgը', english: 'Badge' }
  ],
  'Թ': [
    { armenian: 'Թ', english: 'T\'' },
    { armenian: 'Թeacher', english: 'Teacher' },
    { armenian: 'caթ', english: 'Cat' },
    { armenian: 'baթ', english: 'Bat' },
    { armenian: 'beթ', english: 'Bet' }
  ],
  'Ժ': [
    { armenian: 'Ժ', english: 'ZH' },
    { armenian: 'Ժournal', english: 'Journal' },
    { armenian: 'pleaժure', english: 'Pleasure' },
    { armenian: 'treaժure', english: 'Treasure' },
    { armenian: 'garaժe', english: 'Garage' }
  ]
  // The system will fall back to the original examples for letters not defined here
};