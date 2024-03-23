import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;
import { flowPrincipalSinBienvenida } from '../app.js';


export const flowComplejos = addKeyword(['complejos','1']).
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