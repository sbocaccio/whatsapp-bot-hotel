import pkg from '@bot-whatsapp/bot';
import {
    CANUELAS_PATH,
    SAN_MIGUEL_PATH,
} from "../constants/images_path.js";
const { addKeyword} = pkg;

export const flowTarifas = addKeyword(['1'])
    .addAnswer('Estamos trayendo la información. Esto puede tardar unos segundos...', null, null)
    .addAnswer(' ', { media: CANUELAS_PATH})
    .addAnswer(' ', { media: SAN_MIGUEL_PATH})
    .addAnswer("Por favor, comunicarse en horario de atención de 09:00hs a 20:00hs si desea realizar una reserva")
