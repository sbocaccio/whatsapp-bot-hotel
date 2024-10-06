import {START_HOUR, FINISH_HOUR } from '../constants/activeHours.js';


export const actionActiveHours = async (ctx, { endFlow }) => {
    if(!global.activeHoursChecker.isWithinActiveHours(START_HOUR,FINISH_HOUR)) 
        {
            console.log("Message sent not in Working ours");
            return endFlow();
        }
};
