const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const JavaScriptObfuscator = require('javascript-obfuscator');

function processHtml() {
  const inputPath = path.join(__dirname, 'index.html');
  const outputDir = path.join(__dirname, 'dist');
  const outputPath = path.join(outputDir, 'index.html');

  if (!fs.existsSync(inputPath)) {
    console.error('Error: index.html not found');
    process.exit(1);
  }

  const html = fs.readFileSync(inputPath, 'utf8');
  const $ = cheerio.load(html, { decodeEntities: false });

  // <script> タグの中からインラインJS（src属性のないもの）だけを抽出して難読化
  $('script').each((_, el) => {
    const src = $(el).attr('src');
    if (!src) {
      const code = $(el).html();
      if (code && code.trim().length > 0) {
        try {
          const obfuscated = JavaScriptObfuscator.obfuscate(code, {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.8,
            renameGlobals: false
          }).getObfuscatedCode();

          $(el).html(obfuscated);
        } catch (err) {
          console.error('Obfuscation failed for script block:', err);
        }
      }
    }
  });

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, $.html(), 'utf8');
  console.log('Successfully obfuscated index.html -> dist/index.html');
}

processHtml();
