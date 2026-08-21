import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');

const groups = [
  {
    quality: 71,
    fitInside: true,
    items: [
      ['images/accueil/accueil-evenementiel.jpg', 'images/optimized/accueil/accueil-evenementiel', [768, 1536]],
      ['images/evenementiel/acdet.jpg', 'images/optimized/evenementiel/acdet', [640, 1280]],
      ['images/evenementiel/forum-emploi.jpg', 'images/optimized/evenementiel/forum-emploi', [640, 1280]],
      ['images/evenementiel/forum-immobilier.jpg', 'images/optimized/evenementiel/forum-immobilier', [640, 1280]],
      ['images/evenementiel/job-dating.jpg', 'images/optimized/evenementiel/job-dating', [640, 1280]],
      ['images/evenementiel/reseaux-eau.jpg', 'images/optimized/evenementiel/reseaux-eau', [640, 1280]],
      ['images/evenementiel/salon-electricite.jpg', 'images/optimized/evenementiel/salon-electricite', [640, 1280]],
      ['images/evenementiel/trophees-entreprises.jpg', 'images/optimized/evenementiel/trophees-entreprises', [640, 1280]],
      ['images/evenementiel/trophees-initiatives-publiques.png', 'images/optimized/evenementiel/trophees-initiatives-publiques', [640, 1280]],
      ['images/web/mockups/nounou-ecran-bureau-telephone.png', 'images/optimized/mockups/nounou-ecran-bureau-telephone', [724, 1448]],
      ['images/web/mockups/salonemploi-portable-telephone.png', 'images/optimized/mockups/salonemploi-portable-telephone', [724, 1448]],
    ],
  },
  {
    quality: 65,
    fitInside: true,
    items: [
      ['images/web/optimized/nounou-home.png', 'images/optimized/web/nounou-home', [480, 960]],
      ['images/web/optimized/nounou-devoirs.png', 'images/optimized/web/nounou-devoirs', [480, 960]],
      ['images/web/optimized/nounou-pet.png', 'images/optimized/web/nounou-pet', [480, 960]],
      ['images/web/optimized/nounou-gardiennage.png', 'images/optimized/web/nounou-gardiennage', [480, 960]],
      ['images/web/optimized/nounou-services.png', 'images/optimized/web/nounou-services', [480, 960]],
      ['images/web/optimized/salonemploi-desktop.png', 'images/optimized/web/salonemploi-desktop', [600, 1200]],
    ],
  },
];

for (const group of groups) {
  for (const [sourceRel, outputBaseRel, sizes] of group.items) {
    const source = path.join(publicDir, sourceRel);
    const outputDir = path.dirname(path.join(publicDir, outputBaseRel));
    await fs.mkdir(outputDir, { recursive: true });

    for (const size of sizes) {
      const output = path.join(publicDir, `${outputBaseRel}-${size}.webp`);
      await sharp(source)
        .rotate()
        .resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: group.quality })
        .toFile(output);
    }
  }
}

console.log('Images responsives WebP générées.');
