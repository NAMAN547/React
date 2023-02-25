import React from 'react'

const Person = (props) => {

console.log(props)



console.log(props)

  return (
    <div>
        
        <p> Name: {props.name}</p>
           <p> Age : {props.age}</p>
            <p>Address:  {props.address}</p>

            {props.children}



    </div>
  )
}

export default Person