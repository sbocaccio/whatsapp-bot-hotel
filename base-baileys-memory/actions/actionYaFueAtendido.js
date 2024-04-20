import {flowEmpty} from "../flows/flowEmpty.js";

export const actionYaFueAtendido = async (ctx, { state, gotoFlow }) => {
    const flowCompletado = global.flowCompletionTrackerService.getPhoneCompletedFlows(ctx.from, state)
    if(flowCompletado) return gotoFlow(flowEmpty)
}