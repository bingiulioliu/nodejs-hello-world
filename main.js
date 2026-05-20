import {cowsay} from 'cowsayjs';

// console.log('Hello Boolean');

const frase = process.argv.slice(2).join(' ');

console.log(cowsay(frase));
