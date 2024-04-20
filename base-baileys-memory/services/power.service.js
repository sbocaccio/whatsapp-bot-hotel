

export class PowerService{
  constructor(postgreService){
    this.postgreService = postgreService;
  }
  turnOn() {
    this.postgreService.setBotStatus('TRUE');
    global.botIsOn = true;
  }

  turnOff(){
    this.postgreService.setBotStatus('FALSE');
    global.botIsOn = false;
  }

  async isOn(){
    let status;
    try{
      status = await this.postgreService.getBotStatus();
      return status;
    }
    catch{
      return false;
    }
  }
}