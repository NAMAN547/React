import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JSXLearn from './components/JSXLearn';
import TodoList from './components/TodoList';
import Person from './components/Person';
import BasicNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <div>
      {/* <JSXLearn /> */}

      {/* <TodoList />  */}

      <BasicNavbar />

      <ShoppingList />

      {/* <Person name = "mayank" age = "24" address= "new delhi"> */}

        {/* <h1> this is a heading</h1>
        <p> lorem ipsum
        </p> */}


      {/* </Person> */}

    {/* <App />
    <App /> */}
    
    </div>

);

