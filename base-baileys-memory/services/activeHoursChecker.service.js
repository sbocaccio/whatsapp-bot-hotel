export class ActiveHoursChecker{
    
    isWithinActiveHours(startHour, endHour) {
        const argentinaTime = new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" });
        const argentinaDate = new Date(argentinaTime);
        var currentHour = argentinaDate.getHours()
      
        console.log("Current hour:", currentHour)
        // This only works if startHour > endHour (startHour = 21hs, endHour = 9hs)
        if (currentHour >= startHour || currentHour < endHour) {
          return true;
        }
        
        return false;
    }
  }
