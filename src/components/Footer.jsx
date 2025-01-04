import React, { useState } from 'react'

const Footer = () => {
    const[comments,setComments] = useState([])
    const[comment,setComment] = useState("")
    
    function handleChange(e) {
        setComment(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]:e.target.value
            }
        })
    }

    function saveComments(e) {
        e.preventDefault()
        if(comment){
          comments.push(comment)
        }
    }

    console.log(comments)
  return (
    <div className='footer'>
       <div>
        {comments && comments.map((item,index) => {
            return <p>{item}</p>
        })}
            <form className='form' >
                <input name='comment' onChange={handleChange} className='comment' type="text" placeholder='Leave a comment'/>
                <button onClick={(e) => saveComments(e)} className='btn' >submit</button>
            </form>
        
        </div> 
    </div>

  )
}

export default Footer