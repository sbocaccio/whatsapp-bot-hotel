import {LoggerService} from "./logger.service.js";

export class FlowCompletionTrackerService {
    constructor(postgreService, completedFlowPhones) {
        this.postgreService = postgreService;
        this.completedFlowPhones = completedFlowPhones;
        this.loggerService = new LoggerService();
    }

    async setCompletedFlow(phone, state) {
        this.completedFlowPhones.push(phone)
        await this.postgreService.addPhone(phone)
        await state.update({ atendido: true })
        this.loggerService.log('Flow Completed - Phone: ', phone)
    }

    getPhoneCompletedFlows(phone, state) {
        const phoneCurrentState = state.getMyState()
        if(phoneCurrentState && phoneCurrentState.atendido) return true
        return this.completedFlowPhones.includes(phone)
    }
}

