import {flowEmpty} from "../flows/flowEmpty.js";

export const actionYaFueAtendido = async (ctx, { state, gotoFlow }) => {
    console.log("New Message From:", ctx.from); // TODO: Create an "inform message" action that logs the user
    const flowCompletado = global.flowCompletionTrackerService.getPhoneCompletedFlows(ctx.from, state)
    if(flowCompletado) return gotoFlow(flowEmpty)
}