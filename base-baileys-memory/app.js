const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowNoEntendi = addKeyword(['']).addAnswer('No pude entender tu respuesta. Por favor volvé a elegír.', null, (ctx, { fallBack }) => {
        return fallBack();
    }
)

const flowComplejos = addKeyword(['complejos','1'], ).
    addAnswer(
    [

            "1. San Miguel del Monte",
            " El entorno de Atardeceres Apart Hotel, en San Miguel del Monte, presenta un escenario que combina la tranquilidad " +
            "de un pueblo con la belleza de su entorno natural. Alrededor de esta ubicación, encontrarás calles arboladas y pintorescas, " +
            "con casas de estilo tradicional que reflejan la historia y la identidad del lugar. Nuestro complejo se encuentra cerca de lagunas " +
            "y áreas de recreación, lo que brinda la oportunidad de disfrutar de actividades al aire libre como pesca, navegación o simplemente relajarse " +
            "junto al agua.",
            '',
            "Te invitamos a ver nuestra página:",
            "https://www.atardeceresaparts.com.ar/atardeceres-san-miguel-del-monte",
            '',
            "📍Dirección: Av. De Las Victorias 236, San Miguel del Monte"
    ]
    ).addAnswer(
    [
        "2. Cañuelas ",
        "El entorno de Atardeceres Apartments, ofrece un paisaje " +
        "que combina la tranquilidad del campo con la cercanía de la ciudad. Cañuelas, la " +
        "ciudad más próxima, ofrece una variedad de atracciones y servicios adicionales, " +
        "como restaurantes que sirven platos típicos de la gastronomía argentina, tiendas " +
        "locales donde encontrar productos regionales y espacios recreativos para " +
        "disfrutar al aire libre.",
        '',
        "Te invitamos a ver nuestra página:",
        "https://www.atardeceresaparts.com.ar/atardeceres-canuelas",
        '',
        "📍Dirección: Castelli 520, Cañuelas"
    ]
    , null, async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipalSinBienvenida);
    })


const flowHabitaciones = addKeyword(['habitaciones', 'abitaciones', '2'])
    .addAnswer(
        [
            '1. Complejo Cañuelas: ',
            '',
            'En este complejo podes encontrar tres tipos de habitaciones:',
            '*a.* Monoambiente hasta 3 personas (1 camas doble – 1 cama individual)',
            '*b.* Loft hasta 4 personas (1 cama doble – 1 cama individual – 1 catre)',
            '*c.* Dos ambientes hasta 5 personas (1 cama doble – 1 cama individual – 2 sillon cama)',
            'Las unidades cuentan con:',
            '- Vajilla',
            '- Parrilla propia (solo loft)',
            '- Heladera',
            '- Microondas',
            '- Pava eléctrica',
            '- Aire acondicionado Frio-Calor',
            '- TV',
            '',
            'Podes ver fotos en el siguiente enlace:',
            'https://www.atardeceresaparts.com.ar/atardeceres-canuelas'
        ]
    )
    .addAnswer(
        [
            '2. Complejo San Miguel del Monte:',
            '',
            'En este complejo podes encontrar dos tipos de habitaciones:',
            '*a.* Monoambiente hasta 4 personas (1 cama doble -1 cama individual - 1 catre)',
            '*b.* Dúplex hasta 6 personas (1 Cama doble – 2 camas individuales – 2 Catres)',
            'Las unidades cuentan con:',
            '- Vajilla',
            '- Parrilla propia (solo loft)',
            '- Heladera',
            '- Microondas',
            '- Pava eléctrica',
            '- Aire acondicionado Frio-Calor',
            '- TV',
            '',
            'Podes ver fotos en el siguiente enlace:',
            'https://www.atardeceresaparts.com.ar/atardeceres-san-miguel-del-monte'
        ]
    )
    .addAction(null, async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipalSinBienvenida)
    })

const flowInstalaciones = addKeyword(['instalaciones', '3'])
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
    .addAction(null, async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipalSinBienvenida)
    })


const flowReservas = addKeyword(['reservas', '4']).addAnswer(
    'Esta funcionalidad todavia no esta implementada. Por favor, intentá luego.',
    null,
    async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipalSinBienvenida)
    }
)

const flowPrincipalSinBienvenida = addKeyword('')
    .addAnswer(
        [
            '1. *Complejos* 🏨: Contamos con dos complejos Atardeceres Apart Hotel en San Miguel del Monte y Atardeceres Apartments en Cañuelas.',
            '2. *Habitaciones* 🛏 : Conoce nuestras habitaciones, sus comodidades y su capacidad',
            '3. *Instalaciones* 🏊🏻‍: Conoce nuestras instalaciones y sus comodidades',
            '4. *Reservas* 📅: ¿Tenes la información necesaria para reservar? Descubri nuestras tarifas.',
            '',
            'Por favor, elegí una de las opciones escribiendo el número o la palabra. Por ejemplo, si queres conocer nuestros Complejos escribi "complejos" o "1"',
            '',
            'Nuestro horario de atencion es de 09:00 hs a 20:00 de Lunes a Viernes, Sábados de 10:00 hs a 16:00 hs.'
        ],
        null,
        null,
        [flowComplejos, flowHabitaciones, flowInstalaciones,flowReservas, flowReservas, flowNoEntendi]
)

const flowPrincipal = addKeyword('')
    .addAnswer(['¡Hola, gracias por comunicarte con Atardeceres! ☀️','Estamos encantados de brindarte la información necesaria para que conozcas nuestros complejos.'])
    .addAnswer(
        [
            '1. *Complejos* 🏨: Contamos con dos complejos Atardeceres Apart Hotel en San Miguel del Monte y Atardeceres Apartments en Cañuelas.',
            '2. *Habitaciones* 🛏 : Conoce nuestras habitaciones, sus comodidades y su capacidad',
            '3. *Instalaciones* 🏊🏻‍: Conoce nuestras instalaciones y sus comodidades',
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
    .addAnswer('Buenas! Para iniciar una conversación escriba "Hola"', null,async (_, { endFlow }) => {
        return endFlow();
    })

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowNoEntendiInicial])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
