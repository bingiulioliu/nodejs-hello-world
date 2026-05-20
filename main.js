import {cowsay} from 'cowsayjs';
import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage, SystemMessage } from 'langchain';

// console.log('Hello Boolean');

const frase = process.argv.slice(2).join(' ');

console.log(cowsay(frase));
