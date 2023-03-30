import React, { useState, useEffect } from "react";

export default function Index() {
  const toDoItem = {
    text: "wash clothes",
    completed: false,
    important: true,
  }
  return( <ToDoItem { ...toDoItem } /> );
}
function ToDoItem( { text, completed, important } ) {
  const [ textState, setTextState ] = useState(text);
  const [ completedState, setCompletedState] = useState(completed);

  useEffect(() => {
    setTextState
      (`${text} ${ new Date().toLocaleTimeString() }`);
    }, []);

  return (
    <div 
      className={ completedState ? "completed" : "" } 
      onClick={ () => {
        setCompletedState(!completedState);
        } }
      >
      { important ? "*" : "" } { textState }
    </div>
  );
}

//export default ToDoItem;