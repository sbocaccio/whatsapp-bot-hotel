export class ActiveHoursChecker{
    
    isWithinActiveHours(startHour, endHour) {
        const OFFSET = 3 
        const currentDate = new Date();
        var currentHour = currentDate.getHours();
        currentHour = currentHour - OFFSET
      
        console.log("Current hour:", currentHour)
        // This only works if startHour > endHour (startHour = 21hs, endHour = 9hs)
        if (currentHour >= startHour || currentHour < (endHour-OFFSET)) {
          return true;
        }
        
        return false;
    }
  }