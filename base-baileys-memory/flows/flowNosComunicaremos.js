import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flowNosComunicaremos = addKeyword(['2'])
    .addAnswer("Por favor, comunicarse en horario de atención de 09:00hs a 20:00hs si desea realizar una reserva", null, async (ctx, { endFlow, state }) => {
        await global.flowCompletionTrackerService.setCompletedFlow(ctx.from, state)
        return endFlow();
    })

