import {cowsay} from 'cowsayjs';
import { ChatAnthropic } from '@langchain/anthropic';
import { HumanMessage, SystemMessage } from 'langchain';

const inputCmd = process.argv.slice(2).join(' ');

// Se input vuoto, restituisce Moooo
const inputResult = inputCmd || "Moo dammi un comando";

console.log(inputResult);
