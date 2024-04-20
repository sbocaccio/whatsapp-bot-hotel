import pkg from '@bot-whatsapp/bot';
const { addKeyword } = pkg;

export const flowEmpty = addKeyword([])
    .addAction( async (_, { gotoFlow }) => {
        return gotoFlow('flowEmpty')
    }
    )

