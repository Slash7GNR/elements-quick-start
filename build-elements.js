const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/elements/runtime.js',
        './dist/elements/polyfills.js',
        './dist/elements/main.js'
    ];
    
    await fs.ensureDir('elements');
    await concat(files, 'elements/elements-sample.js')
})()