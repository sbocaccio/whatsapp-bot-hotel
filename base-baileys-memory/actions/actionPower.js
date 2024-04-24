import {masterPhones} from '../constants/masterPhones.js';


export const actionPower = async (ctx, { endFlow }) => {

  if (masterPhones.includes(ctx.from) && (ctx.body === 'PRENDER' || ctx.body === 'APAGAR')) {
    ctx.body === 'PRENDER' ? global.powerService.turnOn() : global.powerService.turnOff();
    const message = ctx.body === 'PRENDER' ? 'Bot encendido' : 'Bot apagado';
    return endFlow(message);
  }

  if(!global.botIsOn) return endFlow();
};