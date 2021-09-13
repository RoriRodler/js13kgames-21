'use strict';

const { minify } = require("terser");
const { copyFile, mkdir, writeFile, readFile, stat } = require('fs/promises');
const fs = require('fs');
const archiver = require('archiver');
const del = require('del');

const files = [
    'src/config.js',
    'src/globals.js',
    'src/menu.js',
    'src/ending.js',
    'src/lab.js',
    'src/infobox.js',
    'src/player.js',
    'src/game.js',
    'src/engine.js',
];

(async () => {
    try {
        const allContents = await Promise.all(files.map((file) => {
            return readFile(file);
        }));

        await del('docs/');
        await del('game.zip');
        await mkdir('docs/');

        await copyFile('src/style.css', 'docs/style.css');
        await copyFile('src/index.html', 'docs/index.html');

        const minified = await minify(allContents.map((buffer) => {
            return buffer.toString();
        }).join('\n'));

        await writeFile('docs/index.js', minified.code);

        await new Promise((resolve, reject) => {
            const output = fs.createWriteStream('game.zip');
            output.on('error', reject);
            output.on('close', resolve);

            const archive = archiver('zip', {
                zlib: { level: 9 }
            });
            archive.directory('docs/', false);
            archive.pipe(output);
            archive.finalize();
        })

        const stats = await stat('game.zip');
        const maxSize = 13 * 1024;

        console.log(`${stats.size} / ${maxSize} (${Math.round(stats.size * 100 / maxSize)}%)`);
    } catch (err) {
        console.error(err);
    }
})();