const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const uuid = require('uuid').v4;
const convert = require('heic-convert');

class Resize {
    constructor(folder) {
         this.folder = folder;
    }

    async save(buffer) {
        const filename = Resize.filename();
        const filepath = this.filepath(filename);
    
        const outputBuffer = await convert({
            buffer: buffer, // the HEIC file buffer
            format: 'PNG'        // output format
        })

        await sharp(outputBuffer)
          .resize(3024, 3024, {
            fit: sharp.fit.inside,
            withoutEnlargement: true
          })
          .toFile(filepath);
        
        return filename;
      }
      
      static filename() {
        return `${uuid()}.png`;
      }
      filepath(filename) {
        return path.resolve(`${this.folder}/${filename}`)
      }


}

module.exports = Resize;
