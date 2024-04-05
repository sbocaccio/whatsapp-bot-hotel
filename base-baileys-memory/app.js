
import pkg from '@bot-whatsapp/bot';
const { createBot, createProvider, createFlow, addKeyword } = pkg;
import QRPortalWeb from '@bot-whatsapp/portal';
import BaileysProvider from '@bot-whatsapp/provider/baileys';
import MockAdapter from '@bot-whatsapp/database/mock';
import { flowNoEntendiInicial } from './flows/flowNoEntendiInicial.js';
import { flowNoEntendi } from './flows/flowNoEntendi.js';
import {flowComplejos} from "./flows/flowComplejos.js";
import {flowHabitaciones} from "./flows/flowHabitaciones.js";
import {flowReservas} from "./flows/flowReservas.js";
import {flowInstalaciones} from "./flows/flowInstalaciones.js";
import {actionYaFueAtendido} from "./actions/actionYaFueAtendido.js";
import {flowNosComunicaremos} from "./flows/flowNosComunicaremos.js";

export const flowPrincipalSinBienvenida = addKeyword(['1','informacion', "información"])
    .addAnswer(
        [
            '1. *Complejos* 🏨: Contamos con dos complejos Atardeceres Apart Hotel en San Miguel del Monte y Atardeceres Apartments en Cañuelas.',
            '2. *Habitaciones* 🛏 : Conocé nuestras habitaciones, sus comodidades y su capacidad',
            '3. *Instalaciones* 🏊🏻‍: Conocé nuestras instalaciones y sus comodidades',
            '4. *Reservas* 📅: ¿Estás listo para reservar? Acá podés encontrar tarifas y disponibilidads.',
            '',
            'Por favor, elegí una de las opciones escribiendo el número o la palabra. Por ejemplo, si querés conocer nuestros complejos escribí "complejos" o "1"',
            '',
            'Nuestro horario de atención es de 09:00 hs a 20:00 de Lunes a Viernes, Sábados de 10:00 hs a 16:00 hs.'
        ],
        null,
        null,
        [flowComplejos, flowHabitaciones, flowInstalaciones,flowReservas, flowNoEntendi]
    )

const flowPrincipal = addKeyword('hola', 'buenas', 'tardes', 'buenos', 'dias', 'noches', 'que tal', 'como estas')
    .addAction(actionYaFueAtendido)
    .addAnswer(['¡Hola, soy el asistente virtual de Atardeceres! Gracias por comunicarte! ☀️','Estoy encantado de brindarte la información necesaria para que conozcas nuestros complejos.'])
    .addAnswer(
        [
            '1. *Información* 🔎: acá podes encontrar información de nuestros complejos, departamentos, instalaciones y tarifas',
            '2. *Nosotros* 🖐🏻: Si ya nos conoces o deseas realizar otras consultas',
            '',
            'Por favor, elegí una de las opciones escribiendo el número o la palabra. Por ejemplo, si querés conocer nuestra información escribí "información" o "1"',
            '',
            'Nuestro horario de atención es de 09:00 hs a 20:00 de Lunes a Viernes, Sábados de 10:00 hs a 16:00 hs.'
        ],
        null,
        null,
        [flowPrincipalSinBienvenida, flowNosComunicaremos, flowNoEntendi]
    )


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowNoEntendiInicial ])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
