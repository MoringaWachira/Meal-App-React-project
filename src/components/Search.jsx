import React,{useState} from 'react'


function Search(props) {
  const [choice, setChoice] = useState("")
  const [dish, setDish] = useState("")
  const [show, setShow] = useState(false)

  let mealData = props.meals
  let timeMeal 
  function handleChange(e) {
    setChoice(e.target.value)

  }

  let randomMeal

  function selectMeal(param,e) {
    e.preventDefault()
    
    let meal = mealData && mealData.filter(function(item){
      return item.title===param
    })
    timeMeal = meal[0].recommendations
    randomMeal = timeMeal[Math.floor(Math.random() * timeMeal.length)]
    setDish(randomMeal)
    setShow(true)

  }

  return (
      
    <div>
      <form className='form' >
        <select className='select' defaultValue={"value"} onChange={handleChange}>
              <option value='value' > --select-- </option>
              {props.meals.map((items, index)=>{
                  return <option key={index} value={items.title}>{items.title}</option>
                })}
        </select>
        <button className='btn' onClick={(e) => selectMeal(choice,e)}>submit</button>
      </form>
      {show ? <h3 className='form' >you should try {dish}</h3> : ""}

      
    </div>
            

  );
}

export default Search;

