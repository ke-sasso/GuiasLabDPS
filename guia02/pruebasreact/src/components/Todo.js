import React from 'react'
const Todo = ({ num,todo, index, deleteTodo }) => {
    return (
        <> 
           <div className="list">
                 <h3>{num}</h3> - <h3>{todo}</h3> <button className="btn-delete" onClick={()=>deleteTodo(index)}>x</button>
           </div>
        </>
    )
}
export default Todo