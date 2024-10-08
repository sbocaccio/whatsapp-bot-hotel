import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { actionYaFueAtendido } from '../actions/actionYaFueAtendido.js';
import {actionPower} from "../actions/actionPower.js";
import {actionActiveHours} from "../actions/actionActiveHours.js";


export const flowNoEntendiInicial = addKeyword([''])
    .addAction(actionPower)
    .addAction(actionActiveHours)
    .addAction(actionYaFueAtendido)
    .addAnswer('Buenas! Para iniciar una conversación escribí "Hola"', null,async (_, { endFlow }) => {
        return endFlow();
    })


