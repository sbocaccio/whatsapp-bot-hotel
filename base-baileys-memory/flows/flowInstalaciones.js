import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import {flowPrincipalSinBienvenida} from "../app.js";

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
        console.log("Dirigiendo a flowPrincipalSinBienvenida")
        return gotoFlow(flowPrincipalSinBienvenida)
    })
