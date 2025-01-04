import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import recipes from "./recipes.json";

function App() {
  const [meals, setMeals] = useState([]);
  const [time, setTime] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMeals(recipes.meals);
    fetchTimeData();
  }, []);

  async function fetchTimeData() {
    try {
      const response = await fetch("http://worldtimeapi.org/api/ip");
      const data = await response.json();
      setTime(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching time data:", error);
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={loading ? <div>Loading...</div> : <Home meals={meals} time={time} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



// import NavBar from './components/NavBar';
// import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect} from 'react';
// import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';
// import Home from './components/Home';
// import recipes from "./recipes.json"


// function App() {
  
//   const [meals,setMeals] = useState([])
//   const [time, setTime] = useState({})

//   useEffect(() =>{
//   setMeals(recipes.meals)
//   fetchTimeData()
//   }, [])

//     function fetchTimeData() {
//         fetch("http://worldtimeapi.org/api/ip")
//         .then((response) => response.json())
//         .then((data) => setTime(data))
//     } 

//   return (

//     <div className="App">
//       <NavBar />

//       <Routes>
//             <Route exact path="/" element={<Home meals={meals} time={time} />}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/contact" element={<Contact/>}/>
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

// export default App;