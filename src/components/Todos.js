// rafce = react array function export component 

import React from 'react'

import Todo from './Todo';
import style from './todos.module.css'

// 3. এখানে ২ এর পাচ করা dummyTodos কে রিসিভ করে নিবে 
const Todos = (props) => {
  return (
  <section className={style.todos}>
    {/* 4. ম্যাপিংয়ের মাধ্যমে ১টি ১টি করে todo তৈরি করা যাবে  */}
     {props.todos.map((todo) => (
     <Todo 
     todo={todo.todo} 
     key={todo.id} 
     id={todo.id} 
     onRemoveTodo={props.onRemoveTodo}/>
     ))}
  </section>
  );
};

export default Todos;
