const fs = require('fs');

const FILE = 'app.js';   // nombre del archivo origen
const PARTS = 5;         // en cuántas partes lo quieres

const content = fs.readFileSync(FILE, 'utf8');
const chunkSize = Math.ceil(content.length / PARTS);

for (let i = 0; i < PARTS; i++) {
  const start = i * chunkSize;
  const end = (i + 1) * chunkSize;
  const chunk = content.slice(start, end);

  const fileName = `app.part${i + 1}-de-${PARTS}.js`;
  fs.writeFileSync(fileName, `// ${fileName}\n` + chunk, 'utf8');
  console.log(`Generado: ${fileName}`);
}
