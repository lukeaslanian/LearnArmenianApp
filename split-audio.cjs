const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Armenian alphabet letters with approximate timings (needs to be adjusted based on actual audio)
const letters = [
  { name: 'A', armenian: 'Ա', start: '0', duration: '15' },
  { name: 'B', armenian: 'Բ', start: '15', duration: '15' },
  { name: 'G', armenian: 'Գ', start: '30', duration: '15' },
  { name: 'D', armenian: 'Դ', start: '45', duration: '15' },
  { name: 'E', armenian: 'Ե', start: '60', duration: '15' },
  { name: 'Z', armenian: 'Զ', start: '75', duration: '15' },
  { name: 'E2', armenian: 'Է', start: '90', duration: '15' },
  { name: 'Y', armenian: 'Ը', start: '105', duration: '15' },
  { name: 'T', armenian: 'Թ', start: '120', duration: '15' },
  { name: 'ZH', armenian: 'Ժ', start: '135', duration: '15' },
  { name: 'I', armenian: 'Ի', start: '150', duration: '15' },
  { name: 'L', armenian: 'Լ', start: '165', duration: '15' },
  { name: 'KH', armenian: 'Խ', start: '180', duration: '15' },
  { name: 'TS', armenian: 'Ծ', start: '195', duration: '15' },
  { name: 'K', armenian: 'Կ', start: '210', duration: '15' },
  { name: 'H', armenian: 'Հ', start: '225', duration: '15' },
  { name: 'DZ', armenian: 'Ձ', start: '240', duration: '15' },
  { name: 'GH', armenian: 'Ղ', start: '255', duration: '15' },
  { name: 'CH', armenian: 'Ճ', start: '270', duration: '15' },
  { name: 'M', armenian: 'Մ', start: '285', duration: '15' },
  { name: 'Y2', armenian: 'Յ', start: '300', duration: '15' },
  { name: 'N', armenian: 'Ն', start: '315', duration: '15' },
  { name: 'SH', armenian: 'Շ', start: '330', duration: '15' },
  { name: 'O', armenian: 'Ո', start: '345', duration: '15' },
  { name: 'CH2', armenian: 'Չ', start: '360', duration: '15' },
  { name: 'P', armenian: 'Պ', start: '375', duration: '15' },
  { name: 'J', armenian: 'Ջ', start: '390', duration: '15' },
  { name: 'R', armenian: 'Ռ', start: '405', duration: '15' },
  { name: 'S', armenian: 'Ս', start: '420', duration: '15' },
  { name: 'V', armenian: 'Վ', start: '435', duration: '15' },
  { name: 'T2', armenian: 'Տ', start: '450', duration: '15' },
  { name: 'R2', armenian: 'Ր', start: '465', duration: '15' },
  { name: 'TS2', armenian: 'Ց', start: '480', duration: '15' },
  { name: 'U', armenian: 'Ու', start: '495', duration: '15' },
  { name: 'P2', armenian: 'Փ', start: '510', duration: '15' },
  { name: 'K2', armenian: 'Ք', start: '525', duration: '15' },
  { name: 'O2', armenian: 'Օ', start: '540', duration: '15' },
  { name: 'F', armenian: 'Ֆ', start: '555', duration: '15' },
];

async function splitAudio() {
  const inputFile = './public/audio/The Armenian Alphabet.mp3';
  const outputDir = './public/audio/letters/';
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('Starting audio split...');
  
  for (const letter of letters) {
    const outputFile = path.join(outputDir, `${letter.name}.mp3`);
    
    const ffmpegArgs = [
      '-i', inputFile,
      '-ss', letter.start,
      '-t', letter.duration,
      '-acodec', 'copy',
      '-y', // Overwrite output files
      outputFile
    ];
    
    try {
      await new Promise((resolve, reject) => {
        const process = spawn('ffmpeg', ffmpegArgs);
        
        process.on('close', (code) => {
          if (code === 0) {
            console.log(`✓ Created ${letter.armenian} (${letter.name})`);
            resolve();
          } else {
            reject(new Error(`FFmpeg failed with code ${code}`));
          }
        });
        
        process.on('error', reject);
      });
    } catch (error) {
      console.error(`✗ Failed to create ${letter.armenian} (${letter.name}):`, error.message);
    }
  }
  
  console.log('Audio splitting complete!');
}

splitAudio().catch(console.error);