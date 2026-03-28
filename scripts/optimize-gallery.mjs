/**
 * Optimiza imágenes de galería para web.
 * Redimensiona a max 1400px de ancho (suficiente para 2× retina a 700px display)
 * y recodifica a webp quality 82 — reducción típica de 9MB → ~200-400KB.
 *
 * Uso: node scripts/optimize-gallery.mjs
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, '..', 'public', 'image', '2_PRODUCTO');
const MAX_WIDTH = 1400;
const QUALITY = 82;

function getAllWebp(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllWebp(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.webp')) {
      // Only gallery images (inside INTERIOR/ or EXTERIOR/ subfolders)
      const rel = path.relative(PUBLIC, full);
      if (rel.includes('INTERIOR') || rel.includes('EXTERIOR')) {
        results.push(full);
      }
    }
  }
  return results;
}

const files = getAllWebp(PUBLIC);
console.log(`Encontradas ${files.length} imágenes de galería\n`);

let optimized = 0;
let skipped = 0;
let totalSaved = 0;

for (const file of files) {
  const meta = await sharp(file).metadata();
  const originalSize = fs.statSync(file).size;

  if (!meta.width || meta.width <= MAX_WIDTH) {
    skipped++;
    console.log(`  SKIP  ${path.relative(PUBLIC, file)} (${meta.width}px)`);
    continue;
  }

  const tmp = file + '.tmp';
  await sharp(file)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(tmp);

  const newSize = fs.statSync(tmp).size;
  fs.renameSync(tmp, file);

  const saved = originalSize - newSize;
  totalSaved += saved;
  optimized++;

  console.log(
    `  OK    ${path.relative(PUBLIC, file).padEnd(40)} ` +
    `${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(newSize / 1024).toFixed(0)}KB ` +
    `(-${Math.round((saved / originalSize) * 100)}%)`
  );
}

console.log(`\n✓ Optimizadas: ${optimized} | Omitidas (ya ok): ${skipped}`);
console.log(`✓ Espacio liberado: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
