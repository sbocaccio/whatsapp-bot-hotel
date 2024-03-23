import pkg from '@bot-whatsapp/bot';
const { addKeyword} = pkg;

export const flowTarifasCanuelas = addKeyword(['cañuelas', '1'])
    .addAnswer('Estamos trayendo la información. Esto puede tardar unos segundos.', null, null)
    .addAnswer(' ', { media: 'https://github.com/sbocaccio/whatsapp-bot-hotel/blob/daniel-bot/base-baileys-memory/images/tarifas_canuelas.jpeg?raw=true'})
    .addAnswer("Nos estaremos comunicando personalmente en la brevedad para que puedas confirmar una reserva")