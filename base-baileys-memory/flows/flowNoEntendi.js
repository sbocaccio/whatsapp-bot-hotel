import pkg from '@bot-whatsapp/bot';
import {actionPower} from "../actions/actionPower.js";
import {actionActiveHours} from "../actions/actionActiveHours.js";

const { addKeyword } = pkg;

export const flowNoEntendi = addKeyword([''])
    .addAction(actionPower)
    .addAction(actionActiveHours)
    .addAnswer('No pude entender tu respuesta. Por favor volvé a elegír.', null, (ctx, { fallBack }) => {
             return fallBack();
    }
)
