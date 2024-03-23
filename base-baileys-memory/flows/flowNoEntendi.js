import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flowNoEntendi = addKeyword(['']).addAnswer('No pude entender tu respuesta. Por favor volvé a elegír.', null, (ctx, { fallBack }) => {
        return fallBack();
    }
)
