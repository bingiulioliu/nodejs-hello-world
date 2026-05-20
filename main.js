import {cowsay} from 'cowsayjs';
import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage, SystemMessage } from 'langchain';

// console.log('Hello Boolean');

const frase = process.argv.slice(2).join(' ');

const parametriCmd = process.argv;

const variaviliEnv = process.env;

const CLAUDE_API_KEY = variaviliEnv.CLAUDE_API_KEY;

const model = new ChatAnthropic({
    model:'claude-haiku-4-5',
    apiKey: CLAUDE_API_KEY
})

console.log(cowsay(frase));
