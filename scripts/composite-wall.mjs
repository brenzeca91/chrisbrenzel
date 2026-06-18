import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

// Paths
const roomPath  = path.join(root, 'public/images/prints-wall-mockup.png')
const heronPath = path.join(root, 'public/images/gallery/photo-5.jpg')
const outPath   = path.join(root, 'public/images/prints-wall-composite.png')

// Get room dimensions first
const roomMeta = await sharp(roomPath).metadata()
const rW = roomMeta.width   // e.g. 1024
const rH = roomMeta.height  // e.g. 1024

console.log(`Room: ${rW}x${rH}`)

// Inner print area — measured precisely to match the white/content area
// inside the black frame in the generated room image.
// The frame outer boundary: x=159, y=29, w=602, h=753 (from first run)
// Black border is ~13px. But the original AI image had a pale print filling
// exactly the inner area. We tighten slightly to ensure clean containment.
const printX = 175
const printY = 45
const printW = 570
const printH = 718

console.log(`Print inner: ${printX},${printY} ${printW}x${printH}`)

// Resize heron to fit the inner print area, preserving aspect ratio with cover
const heronResized = await sharp(heronPath)
  .resize(printW, printH, { fit: 'cover', position: 'centre' })
  .png()
  .toBuffer()

// Composite heron onto room, placed at the inner print coordinates
const composite = await sharp(roomPath)
  .composite([
    {
      input: heronResized,
      left: printX,
      top:  printY,
    }
  ])
  .png()
  .toFile(outPath)

console.log(`Composited image saved to: ${outPath}`)
console.log(`Output: ${composite.width}x${composite.height}`)
