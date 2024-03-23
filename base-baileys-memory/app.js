
import pkg from '@bot-whatsapp/bot';
const { createBot, createProvider, createFlow, addKeyword } = pkg;
import QRPortalWeb from '@bot-whatsapp/portal';
import BaileysProvider from '@bot-whatsapp/provider/baileys';
import MockAdapter from '@bot-whatsapp/database/mock';
import { flowNoEntendiInicial } from './flows/flowNoEntendiInicial.js';
import { flowNoEntendi } from './flows/flowNoEntendi.js';
import {flowTarifasSanMiguel} from "./flows/flowTarifasSanMiguel.js";
import {flowTarifasCanuelas} from "./flows/flowTarifasCanuelas.js";
import {flowComplejos} from "./flows/flowComplejos.js";
import {flowHabitaciones} from "./flows/flowHabitaciones.js";

export const flowInstalaciones = addKeyword(['instalaciones', '3'])
    .addAnswer(
        [
        '1. Complejo Cañuelas: ',
        'Aquí tienes un detalle de las instalaciones del complejo de Cañuelas: Este complejo cuenta con un desayunador amplio, conectado con una cafetería y un kiosco 24hs. ',
        'Las áreas de descanso que posee son las siguientes: ',
        '- Pileta climatizada (Techada)',
        '- Sauna seco',
        '- Sala de masajes',
        '- Parque',
        '- Plaza blanda para niños'
        ]
    )
    .addAnswer(
    [
        '2. Complejo San Miguel del Monte:',
        'Aquí tienes un detalle de las instalaciones del complejo de San Miguel del Monte: Este complejo cuenta con un restorán, área de descanso y estacionamiento. ',
        'Las áreas de descanso que posee son las siguientes: ',
        '- Pileta climatizada (Techada)',
        '- Parque amplio con reposeras y gazebos para descansar',
        '- Plaza externa para niños',
        '- Fogones para recrear en familia',
    ]
    )
    .addAction(async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipalSinBienvenida)
    })

const flowReservas = addKeyword(['reservas', '4']).addAnswer([
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

const actionYaFueAtendido = async (ctx, { state, endFlow }) => {
    const myState = state.getMyState()
    if (myState && myState.atendido) {
       return endFlow();
    }
}

const flowPrincipal = addKeyword('hola', 'buenas', 'tardes', 'buenos', 'dias', 'noches', 'que tal', 'como estas')
    .addAction(actionYaFueAtendido)
    .addAnswer(['¡Hola, soy el asistente virtual de Atardeceres! Gracias por comunicarte! ☀️','Estoy encantados de brindarte la información necesaria para que conozcas nuestros complejos.'])
    .addAnswer(
        [
            '1. *Complejos* 🏨: Contamos con dos complejos Atardeceres Apart Hotel en San Miguel del Monte y Atardeceres Apartments en Cañuelas.',
            '2. *Habitaciones* 🛏 : Conocé nuestras habitaciones, sus comodidades y su capacidad',
            '3. *Instalaciones* 🏊🏻‍: Conocé nuestras instalaciones y sus comodidades',
            '4. *Reservas* 📅: ¿Estás listo para reservar? Acá podés encontrar tarifas y disponibilidad',
            '',
            'Por favor, elegí una de las opciones escribiendo el número o la palabra. Por ejemplo, si querés conocer nuestros complejos escribí "complejos" o "1"',
            '',
            'Nuestro horario de atención es de 09:00 hs a 20:00 de Lunes a Viernes, Sábados de 10:00 hs a 16:00 hs.'
        ],
        null,
        null,
        [flowComplejos, flowHabitaciones, flowInstalaciones,flowReservas, flowNoEntendi]
    )

export const flowPrincipalSinBienvenida = addKeyword('')
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
