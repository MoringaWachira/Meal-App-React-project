import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import recipes from "./recipes.json"




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

    

  return (


    <div className="App">
            <NavBar />

     <Routes>
          {/* <Route path='/' exact element={<App/>}> */}
          <Route exact path="/" element={<Home meals={meals} time={time} />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>

          {/* </Route> */}
    
   </Routes>

      
      <Footer />
      
      
    </div>
  );
}

export default App;