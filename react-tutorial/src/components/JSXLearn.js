import React from 'react';
import "./Person.css";

const JSXLearn = () => {

    let magicNumber = 7;

    let myRandomNumber = Math.floor(Math.random()*10 + 1);

  return (
    <div className='person'>

        <p> Name: John Doe</p>
           <p> Age : 25</p>
            <p>Address: Andheri</p>

            <p style={{ 
                color: "red",
                fontSize: "20px"
            }}> John's randomNumber: {Math.floor(Math.random()*10 +1)}</p>

            <div>

                <p> myRandomNumber : {myRandomNumber}</p>
                {
                    

                    ( magicNumber === myRandomNumber ) ? <img style={{width:"300px"
                    }} src="https://tse3.mm.bing.net/th?id=OIP.56kp_1vdUyTLswOtO7tWqAHaE8&pid=Api&P=0"></img> : <p> You didnt win</p>

                }
            </div>

    </div>
  )
}

export default JSXLearn;