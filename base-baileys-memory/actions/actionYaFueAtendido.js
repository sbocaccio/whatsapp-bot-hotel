export const actionYaFueAtendido = async (_, { state, endFlow }) => {
    const myState = state.getMyState()
    if (myState && myState.atendido) {
        return endFlow();
    }
}