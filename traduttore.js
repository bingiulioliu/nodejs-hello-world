import {cowsay} from 'cowsayjs';
import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage, SystemMessage } from 'langchain';

const inputCmd = process.argv.slice(2).join(' ');

// Recupero i valori che seguono --stile= e --tema=
const getArgs = (flag) =>{
    const found = inputCmd.find(arg=>arg.startsWith(`${flag}=`));
    return found ? found.split('=')[1] : null;
};

// Se manca, Claudio è una mucca comica che parla di mucche
const stile = getArgs('--stile') || 'mucca comica';
const tema = getArgs('--tema') || 'mucche';

const CLAUDIO_VESPA_CHIAVE = process.env.CLAUDE_API_KEY;

const model = new ChatAnthropic ({
    model:'claude-haiku-4-5',
    apiKey: CLAUDIO_VESPA_CHIAVE
});

model.invoke([
    new SystemMessage (`Sei un ${inputResult} che parla nella propria lingua usando il gergo tipico`),
    new HumanMessage (`Raccontami una barzelletta nella tua lingua`)
]).then(mooResponse=>{
    console.log(cowsay(mooResponse.content));
    
})