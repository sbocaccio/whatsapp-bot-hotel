export class ActiveHoursChecker{
    
    isWithinActiveHours(startHour, endHour) {
        const OFFSET = 3 
        const currentDate = new Date();
        var currentHour = currentDate.getHours();
        currentHour = currentHour - OFFSET
      
        console.log("Current hour:", currentHour)
        // Check if the current hour is within the active range
        if (currentHour >= startHour && currentHour < endHour) {
          return true;
        }
        
        return false;
    }
  }