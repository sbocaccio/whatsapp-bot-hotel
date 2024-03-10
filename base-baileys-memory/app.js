const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowNoEntendi = addKeyword(['']).addAnswer('No pude entender tu respuesta. Por favor volver a elegír.', null, (ctx, { fallBack }) => {
        return fallBack()
    }
)

const flowDocs = addKeyword(['capacidades']).addAnswer(
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


const flowGracias = addKeyword(['gracias', 'grac'])
    .addAnswer('Gracias por probar este bot 🚀! Hasta luego.',null,async (_, { endFlow }) => {
        return endFlow();
    })

const flowDiscord = addKeyword(['autor']).addAnswer(
    'Este bot fue creado por Sebastian Bocaccio',
    null,
    async (_, { endFlow }) => {
        return endFlow();
    }
)

const flowPrincipal = addKeyword(['hola', 'ole', 'alo', 'buenas', 'buenos', 'tardes', 'noches'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')
    .addAnswer(
        [
            'te comparto las siguientes opciones de interes:',
            '👉 *capacidades* para ver la documentación',
            '👉 *gracias*  para ver un mensaje de agradecimiento',
            '👉 *autor* datos sobre el autor de este bot',
            '',
            'Por favor, elegí una de las opciones escribiendo la palabra clave.'
        ],
        null,
        null,
        [flowDocs, flowGracias, flowDiscord, flowNoEntendi]
    )

const flowNoEntendiInicial = addKeyword([''])
    .addAnswer('Para iniciar una conversación escribime "Hola"', null,async (_, { endFlow }) => {
        return endFlow();
    })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal,flowNoEntendiInicial])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
