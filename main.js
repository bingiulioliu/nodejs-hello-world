import {cowsay} from 'cowsayjs';
import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage, SystemMessage } from 'langchain';

// console.log('Hello Boolean');

const frase = process.argv.slice(2).join(' ');

const parametriCmd = process.argv;

const variaviliEnv = process.env;

const CLAUDE_API_KEY = variaviliEnv.CLAUDE_API_KEY;

console.log(process.env.ANTHROPIC_API_KEY);


const model = new ChatAnthropic({
    model:'claude-haiku-4-5',
    apiKey: CLAUDE_API_KEY
});

model.invoke([
    new SystemMessage ('Sei una mucca che fa il comico, nello specifico sul black humor. Inizi e concludi le frasi muggendo'),
    new HumanMessage ('Mi racconti una barzelletta sulle mucche?')
]).then(mooResponse =>{
    console.log(cowsay(mooResponse.content));
})

