import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import {actionPower} from "../actions/actionPower.js";
import {actionActiveHours} from "../actions/actionActiveHours.js";


export const flowEmpty = addKeyword([])
    .addAction(actionPower)
    .addAction(actionActiveHours)
    .addAction( async (_, { gotoFlow }) => {
        return gotoFlow('flowEmpty')
    }
    )

