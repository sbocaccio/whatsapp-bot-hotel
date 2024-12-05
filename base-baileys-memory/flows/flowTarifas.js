import pkg from '@bot-whatsapp/bot';
import {
    CANUELAS_PATH_NEW_AVAILABILITY,
    CANUELAS_PATH_OLD_AVAILABILITY,
    SAN_MIGUEL_PATH_OLD_AVAILABILITY,
    SAN_MIGUEL_PATH_NEW_AVAILABILITY,
} from "../constants/images_path.js";
const { addKeyword} = pkg;

export const flowTarifas = addKeyword(['1'])
    .addAnswer('Estamos trayendo la información. Esto puede tardar unos segundos...', null, null)
    .addAnswer('Tarifas del 23/12 a febrero', { media: CANUELAS_PATH_NEW_AVAILABILITY})
    .addAnswer('Tarifa hasta 22 de diciembre', { media: CANUELAS_PATH_OLD_AVAILABILITY})
    .addAnswer('Tarifas del 23/12 a febrero', { media: SAN_MIGUEL_PATH_NEW_AVAILABILITY})
    .addAnswer('Tarifa hasta 22 de diciembre', { media: SAN_MIGUEL_PATH_OLD_AVAILABILITY})
    .addAnswer("Por favor, comunicarse en horario de atención de 09:00hs a 20:00hs si desea realizar una reserva")
