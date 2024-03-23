import pkg from '@bot-whatsapp/bot';
const { addKeyword, addAnswer, addAction } = pkg;

const actionYaFueAtendido = async (_, { state, endFlow }) => {
    const myState = state.getMyState()
    if (myState && myState.atendido) {
        return endFlow();
    }
}
export const flowNoEntendiInicial = addKeyword([''])
    .addAction(actionYaFueAtendido)
    .addAnswer('Buenas! Para iniciar una conversación escribí "Hola"', null,async (_, { endFlow }) => {
        return endFlow();
    })


