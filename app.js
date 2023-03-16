const fs = require('fs');
const {glob,globStream,globSync} = require('glob')
const  tf =require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');

//var data = []
var XS =[]
var YS = []
const data = globSync('Data_files/**/*.png')
//console.log(data)
setTimeout(()=>{
        data.forEach((file) => {
            const imageData = fs.readFileSync(file)
            const answer = encodeDir(file)
            const imageTensor = tf.node.imageDecode(imageData,1)
        
            //Store in memory
            YS.push(answer)
            XS.push(imageTensor)
        });
},3000)
console.log(XS)

function encodeDir(filePath){
    if (filePath.includes('bird')) return 0
    if (filePath.includes('lion')) return 1
    if (filePath.includes('owl')) return 2
    if (filePath.includes('parrot')) return 3
    if (filePath.includes('raccoon')) return 4
    if (filePath.includes('skull')) return 5
    if (filePath.includes('snail')) return 6
    if (filePath.includes('snake')) return 7
    if (filePath.includes('squirrel')) return 8
    if (filePath.includes('tiger')) return 9

    console.error('Unrecognized folder')
    process.exit(1)
}

// tf.util.shuffleCombo(XS,YS)

// //Stack values
// console.log('Stacking')
// const X = tf.stack(XS)
// const Y = tf.oneHot(YS,10)

// console.log("Images have been converted to tensors")
// console.log('X',X.shape)
// console.log('Y',Y.shape)

// const XNORM = X.div(225)
// //cleanup
// tf.dispose([XS,X])
