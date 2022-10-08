import { Outlet } from 'react-router-dom';
import React from 'react'
import Search from './Search';



function Home({meals, time}) {

  function weekDay(time) {
    switch(time.day_of_week) {
      case 1:
        return "Monday"
      case 2:
        return "Tuesday"
      case 3:
        return "Wednesday"
      case 4:
        return "Thursday"
      case 5:
        return "Friday"
      case 6:
        return "Saturday"
      case 7:
        return "Sunday"
      default:
        return "Today"
    }
  }

  let welcome;  
    let date = new Date();  
    let hour = date.getHours();  
    let minute = date.getMinutes();  

    
    if (minute < 10) {  
      minute = "0" + minute;  
    }  
    if (hour < 12) {  
      welcome = "good morning";  
    } else if (hour < 17) {  
      welcome = "good afternoon";  
    } else {  
      welcome = "good evening";  
    }
  return (
    <div className='home'>
        <div className='info'>
              <h4>{welcome.toLocaleUpperCase()}</h4>
              <p><span>Timezone</span> {time.timezone}</p>
              <p><span>Day of the week</span> {weekDay(time)}</p>
              <p> <span>Abbreviation</span> {time.abbreviation}</p>
      </div>
   
      <Search meals={meals}/>
      <Outlet/>
    </div>
  )
}

export default Home