import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flowNosComunicaremos = addKeyword(['2'])
    .addAnswer("Nos estaremos comunicando personalmente en la brevedad para que puedas confirmar una reserva", null, async (ctx, { endFlow, state }) => {
        await global.flowCompletionTrackerService.setCompletedFlow(ctx.from, state)
        return endFlow();
    })

