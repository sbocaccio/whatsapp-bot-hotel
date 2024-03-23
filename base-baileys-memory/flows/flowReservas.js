import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import {flowTarifasCanuelas} from "./flowTarifasCanuelas.js";
import {flowTarifasSanMiguel} from "./flowTarifasSanMiguel.js";
import {flowNoEntendi} from "./flowNoEntendi.js";
import {flowPrincipalSinBienvenida} from "../app.js";

export const flowReservas = addKeyword(['reservas', '4']).addAnswer([
    "1. Tarifas Cañuelas",
    "2. Tarifas San Miguel del Monte",
    "3. Volver al menu principal"
],{capture:true},async(ctx, {gotoFlow, state}) => {
    const numero = ctx.body
    if(numero == 1){
        await state.update({ atendido: true })
        return gotoFlow(flowTarifasCanuelas)
    }
    if(numero == 2){
        await state.update({ atendido: true })
        return gotoFlow(flowTarifasSanMiguel)
    }
    if(numero == 3){
        return gotoFlow(flowPrincipalSinBienvenida)
    }
    else{
        return gotoFlow(flowNoEntendi);
    }
})