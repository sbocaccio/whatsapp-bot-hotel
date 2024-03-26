import pkg from '@bot-whatsapp/bot';
import {
    CANUELAS_PATH_AVAILABILITY,
    SAN_MIGUEL_PATH_AVAILABILITY,
} from "../constants/images_path.js";
const { addKeyword} = pkg;

export const flowTarifas = addKeyword(['1'])
    .addAnswer('Estamos trayendo la información. Esto puede tardar unos segundos.', null, null)
    .addAnswer(' ', { media: CANUELAS_PATH_AVAILABILITY})
    .addAnswer(' ', { media: SAN_MIGUEL_PATH_AVAILABILITY})
    .addAnswer("Nos estaremos comunicando personalmente en la brevedad para que puedas confirmar una reserva")
