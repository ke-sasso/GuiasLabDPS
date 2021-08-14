import React from 'react';
import './App.css';
import Form from './components/Forms';
function holaMundo(nombre, edad){
  var presentacion =<div>
    <h2>{nombre}</h2>
    <h2>Mi edad actual es {edad}</h2>
  </div>

  return presentacion; 
}

const App = () => {
  var nombre ="Kevin Sasso";
return (
<div className="App">
<div className="App-content">
<p>
Aquí haremos nuestro TO-DO list
{holaMundo('Kevin',23)}
</p>
<Form/>
</div>
</div>
);
}
export default App;
