export class ActiveHoursChecker{
    
    isWithinActiveHours(startHour, endHour) {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();
      
        // Check if the current hour is within the active range
        if (currentHour >= startHour && currentHour < endHour) {
          return true;
        }
        
        return false;
    }
  }