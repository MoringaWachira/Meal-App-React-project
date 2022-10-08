import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Recipe from './components/Contact';
import Search from './components/Search';
import { useState, useEffect} from 'react';
import recipes from "./recipes.json"
import Footer from './components/Footer';


function App() {
  

  const [meals,setMeals] = useState([])
  const [time, setTime] = useState({})

  useEffect(() =>{
  setMeals(recipes.meals)
  fetchTimeData()
  }, [])

//    let recipes = meals.map((item) => {
//     return <p>{item.title}</p>
//   })
    function fetchTimeData() {
        fetch("http://worldtimeapi.org/api/ip")
        .then((response) => response.json())
        .then((data) => setTime(data))

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
    <div className="App">
            <NavBar />

      {/* <h1 className='heading'>CHAKULA APP</h1> */}
      <div className='info'>
        <h4>{welcome.toLocaleUpperCase()}</h4>
        <p><span>Timezone</span> {time.timezone}</p>
        <p><span>Day of the week</span> {time.day_of_week}</p>
        <p> <span>Abbreviation</span> {time.abbreviation}</p>
      </div>
   
      <Search meals={meals}/>
      <Footer />
      
      <Outlet/>
    </div>
  );
}

export default App;