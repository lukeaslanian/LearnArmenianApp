# Learn Armenian App

A modern React web application for learning the Armenian alphabet and basic Armenian language skills.

## Features

### 📚 **Alphabet Learning**
- Interactive Armenian alphabet grid with all 38 letters
- Click any letter to learn pronunciation and phonetics
- Native Armenian audio files with text-to-speech fallback
- Progressive examples per letter with proper Armenian text formatting
- Typing validation - type the English equivalent to complete each example
- Progress tracking with visual indicators
- Confetti animations for completed letters

### 🎓 **Learning Modules**
After mastering the alphabet, unlock comprehensive learning modules:

- **Module 1**: First Words and Basic Sounds (մամա, պապա, նան)
- **Module 2**: Greetings and Polite Expressions (բարև, շնորհակալություն)  
- **Module 3**: Numbers and Basic Counting (մեկ, երկու, երեք)

Each module includes:
- Vocabulary section with audio pronunciation
- Interactive exercises with immediate feedback
- Progressive unlocking system

## Technology Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Canvas Confetti** for celebrations
- **Web Audio API** for pronunciation
- **Armenian audio files** extracted from Anki deck
- **ESLint** for code quality

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Features in Detail

### Progressive Learning
- Examples use only previously learned Armenian letters
- Dynamic example generation with proper capitalization
- Realistic Armenian text formatting (lowercase letters in word middle/end)

### Audio System
- Individual MP3 files for each Armenian letter
- Multiple audio source fallbacks
- Text-to-speech backup for missing audio files

### Learning Modules
- Structured lessons based on Armenian language pedagogy
- Interactive vocabulary flashcards  
- Progressive unlocking after alphabet completion
- Dynamic module availability based on progress
