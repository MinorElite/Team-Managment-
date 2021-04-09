
const fs = require('fs');

function writePage (html) {
    fs.writeFile('./dist/index.html', html, err =>{
        if(err){
            throw err
        }
        console.log('index.html was made')
        copyCSS()
    })
}


const copyCSS = () =>{
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err){
            throw err
        }
        console.log('style.css file cloned')
    });
}

module.exports = writePage, copyCSS