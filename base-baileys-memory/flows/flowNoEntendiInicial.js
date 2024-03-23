import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { actionYaFueAtendido } from '../actions/actionYaFueAtendido.js';

export const flowNoEntendiInicial = addKeyword([''])
    .addAction(actionYaFueAtendido)
    .addAnswer('Buenas! Para iniciar una conversación escribí "Hola"', null,async (_, { endFlow }) => {
        return endFlow();
    })


