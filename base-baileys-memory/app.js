const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowNoEntendi = addKeyword(['']).addAnswer('No pude entender tu respuesta. Por favor volver a elegír.', null, (ctx, { fallBack }) => {
        return fallBack();
    }
)

const flowComplejos = addKeyword(['complejos']).addAnswer(
    [

            "👉 *Capacidades*:",
            "1. Seguimiento de Flujos de Conversación: Nuestro sistema tiene la capacidad de seguir el contexto de las conversaciones para ofrecer respuestas coherentes y personalizadas.",
            "2. Reintentos Automáticos: Cuando el usuario no es claro o la solicitud no es comprendida, el sistema ofrece sugerencias o hace preguntas adicionales para mejorar la interacción.",
            "3. Conexión con Datos en Tiempo Real: Accede a información actualizada al instante, permitiendo una experiencia dinámica y relevante para el usuario.",
            "",
            "📄 ¿Quieres obtener más detalles sobre cómo estas capacidades pueden mejorar la experiencia de usuario? Escribime al 1165210649"
    ],
    null,
    async (_, { endFlow }) => {
        return endFlow();
    }
)


const flowHabitaciones = addKeyword(['habitaciones', 'abitaciones'])
    .addAnswer(['No tenemos habitaciones disponibles en este momento.'], null, (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipal);
    })


const flowVolverAlMenu = addKeyword([''])
    .addAnswer('Volviendo al menu principal...', null, async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipal)
    }
    )

const flowInstalaciones = addKeyword(['instalaciones']).addAnswer('Las instalaciones que posee cada complejo son:')
    .addAnswer(
        [
        '*Complejo A (Direccion):*',
        '- Piscina Climatizada: Disfruta de un baño relajante en nuestra piscina climatizada.',
        '- Jacuzzi: Relájate en nuestro jacuzzi, disponible para tu disfrute.',
        '- Gimnasio: Mantente activo en nuestro gimnasio completamente equipado.',
        '- Spa: Disfruta de tratamientos de spa exclusivos en nuestras instalaciones.'
        ]
    )
    .addAnswer(
        [
            '*Complejo B (Direccion):*',
            '- Piscina Climatizada: Disfruta de un baño relajante en nuestra piscina climatizada.',
            '- Jacuzzi: Relájate en nuestro jacuzzi, disponible para tu disfrute.',
            '- Gimnasio: Mantente activo en nuestro gimnasio completamente equipado.',
            '- Spa: Disfruta de tratamientos de spa exclusivos en nuestras instalaciones.'
            ]
    )
    .addAction(null, async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipal)
    })


const flowReservas = addKeyword(['reservas']).addAnswer(
    'Esta funcionalidad todavia no esta implementada. Por favor, intente luego.',
    null,
    async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipal)
    }
)

const flowHola = addKeyword(['hola', 'ole', 'alo', 'buenas', 'buenos', 'tardes', 'noches'])
    .addAnswer(['¡Hola, Garcias por comunicarte con Atardeceres! ☀️','Estamos encantados de brindarte la informacion necesaria para que conozcas nuestros complejos.'],   null,
        async (_, { gotoFlow }) => {
            return gotoFlow(flowPrincipal)
        }
    )

const flowHola2 = addKeyword(['hola', 'ole', 'alo', 'buenas', 'buenos', 'tardes', 'noches'])
    .addAnswer(['¡Hola, Garcias por comunicarte con Atardeceres! ☀️','Estamos encantados de brindarte la informacion necesaria para que conozcas nuestros complejos.'],   null,
        async (_, { gotoFlow }) => {
            return gotoFlow(flowPrincipal)
        }
    )

const flowPrincipal = addKeyword('')
    .addAnswer(
        [
            '1. *Complejos* 🏨 : Descubri informacion necesaria de cada uno de nuestros complejos, como localidad, ubicacion y fotos.',
            '2. *Habitaciones* 🛏 : Conoce nuestras habitaciones y sus comodidades',
            '3. *Instalaciones* 🏊🏻‍: Disfruta de las instalaciones cada uno de nuestros complejos',
            '4. *Reservas* 📅: ¿Tenes la información necesaria para reservar? Descubri nuestras tarifas.',
            '',
            'Por favor, elegí una de las opciones escribiendo el número o la palabra.',
            'Por ejemplo, si queres conocer nuestros Complejos escribi "complejos" o "1"',
            '',
            'Nuestro horario de atencion es de 09:00 hs a 20:00 de Lunes a Viernes, Sábados de 10:00 hs a 16:00 hs.'
        ],
        null,
        null,
        [flowComplejos, flowHabitaciones, flowInstalaciones,flowReservas, flowReservas, flowNoEntendi]
    )

const flowNoEntendiInicial = addKeyword([''])
    .addAnswer('Para iniciar una conversación escribime "Hola"', null,async (_, { endFlow }) => {
        return endFlow();
    })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowHola,flowNoEntendiInicial])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
