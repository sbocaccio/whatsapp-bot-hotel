import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import {flowTarifas} from "./flowTarifas.js";
import {flowNoEntendi} from "./flowNoEntendi.js";
import {flowPrincipalSinBienvenida} from "../app.js";

export const flowReservas = addKeyword(['reservas', '4']).addAnswer([
    "1. Tarifas",
    "2. Volver al menu principal"
],{capture:true},async(ctx, {gotoFlow, state}) => {
    const numero = ctx.body
    if(numero == 1){
        await global.flowCompletionTrackerService.setCompletedFlow(ctx.from, state)
        return gotoFlow(flowTarifas)
    }
    if(numero == 2){
        return gotoFlow(flowPrincipalSinBienvenida)
    }
    else{
        return gotoFlow(flowNoEntendi);
    }
})