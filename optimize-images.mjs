import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDirs = [
  path.join(__dirname, 'src/assets/img/perfil'),
  path.join(__dirname, 'src/assets/img/projetos')
];

async function optimizeImages() {
  try {
    for (const baseDir of imageDirs) {
      if (!fs.existsSync(baseDir)) {
        console.log(`Diretório não encontrado: ${baseDir}`);
        continue;
      }

      const walkDir = (dir) => {
        let files = [];
        const items = fs.readdirSync(dir);

        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            files = files.concat(walkDir(fullPath));
          } else if (item.endsWith('.png') || item.endsWith('.jpg') || item.endsWith('.jpeg')) {
            files.push(fullPath);
          }
        }
        return files;
      };

      const files = walkDir(baseDir);

      for (const filePath of files) {
        const fileName = path.basename(filePath);
        console.log(`Otimizando: ${fileName}...`);

        try {
          if (fileName.endsWith('.png')) {
            await sharp(filePath)
              .png({ quality: 92, progressive: true, compressionLevel: 9 })
              .toFile(filePath + '.tmp');
            
            fs.renameSync(filePath + '.tmp', filePath);
          } else if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg')) {
            await sharp(filePath)
              .jpeg({ quality: 90, progressive: true })
              .toFile(filePath + '.tmp');
            
            fs.renameSync(filePath + '.tmp', filePath);
          }

          const fileSize = fs.statSync(filePath).size;
          console.log(`✓ ${fileName} otimizado - Tamanho: ${(fileSize / 1024).toFixed(2)} KB`);
        } catch (err) {
          console.error(`✗ Erro ao otimizar ${fileName}:`, err.message);
        }
      }
    }

    console.log('\n✓ Todas as imagens foram otimizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao otimizar imagens:', error);
    process.exit(1);
  }
}

optimizeImages();
