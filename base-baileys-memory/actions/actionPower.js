import {masterPhones} from '../constants/masterPhones.js';


export const actionPower = async (ctx, { endFlow }) => {
  console.log("New Message From:", ctx.from); // TODO: Create an "inform message" action that logs the user

  if (masterPhones.includes(ctx.from) && (ctx.body === 'PRENDER' || ctx.body === 'APAGAR')) {
    ctx.body === 'PRENDER' ? global.powerService.turnOn() : global.powerService.turnOff();

    const message = ctx.body === 'PRENDER' ? 'Bot encendido' : 'Bot apagado';
    console.log(message)
    return endFlow(message);
  }

  if(!global.botIsOn) return endFlow();
};
