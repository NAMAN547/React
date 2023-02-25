import React from 'react'

const TodoList = () => {

    let Todos = [
        {
            name: "breaking bad",
            date: 2015,
            isWatched: true
        },
        {
            name: "farzi",
            date: 2023,
            isWatched: false
        },
        {
            name: "TVF Pitchers",
            date: 2013,
            isWatched: true
        },

        {
            name: "Game of Thrones",
            date: 2013,
            isWatched: false
        }
    ]

   return (
    <div>TodoList

        <ul>
            {

            Todos.map((todo)=>{

            return <li>

                {todo.name}

                <input type="checkbox" defaultChecked={todo.isWatched} ></input>
            
                 </li>

            })

        }
        </ul>
    </div>
  )
}

export default TodoList