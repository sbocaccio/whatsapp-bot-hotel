import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { flowPrincipalSinBienvenida } from '../app.js';


export const flowHabitaciones = addKeyword(['habitaciones', 'abitaciones', '2'])
    .addAnswer(
        [
            '1. Complejo Cañuelas: ',
            '',
            'En este complejo podés encontrar tres tipos de habitaciones:',
            '*a.* Monoambiente hasta 3 personas (1 cama doble – 1 cama individual)',
            '*b.* Loft hasta 4 personas (1 cama doble – 1 cama individual – 1 catre)',
            '*c.* Dos ambientes hasta 5 personas (1 cama doble – 1 cama individual – 2 sillón cama)',
            '',
            'Las unidades cuentan con:',
            '- Vajilla',
            '- Parrilla propia (solo loft)',
            '- Heladera',
            '- Microondas',
            '- Pava eléctrica',
            '- Aire acondicionado Frio-Calor',
            '- TV',
            '',
            'Podés ver fotos en el siguiente enlace:',
            'https://www.atardeceresaparts.com.ar/atardeceres-canuelas'
        ]
    )
    .addAnswer(
        [
            '2. Complejo San Miguel del Monte:',
            '',
            'En este complejo podés encontrar dos tipos de habitaciones:',
            '*a.* Monoambiente hasta 4 personas (1 cama doble - 1 cama individual - 1 catre)',
            '*b.* Dúplex hasta 6 personas (1 cama doble – 2 camas individuales – 2 catres)',
            '',
            'Las unidades cuentan con:',
            '- Vajilla',
            '- Parrilla propia (solo loft)',
            '- Heladera',
            '- Microondas',
            '- Pava eléctrica',
            '- Aire acondicionado Frio-Calor',
            '- TV',
            '',
            'Podés ver fotos en el siguiente enlace:',
            'https://www.atardeceresaparts.com.ar/atardeceres-san-miguel-del-monte'
        ]
    )
    .addAction( async (_, { gotoFlow }) => {
        return gotoFlow(flowPrincipalSinBienvenida)
    })