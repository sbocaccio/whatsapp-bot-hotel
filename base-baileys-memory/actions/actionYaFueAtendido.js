export const actionYaFueAtendido = async (ctx, { state, endFlow }) => {
    const flowCompletado = global.flowCompletionTrackerService.getPhoneCompletedFlows(ctx.from, state)
    if(flowCompletado) return endFlow()
}