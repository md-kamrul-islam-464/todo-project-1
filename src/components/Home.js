import React, {useState} from 'react'

import {v4 as uuidv4} from 'uuid';
import Todos from './Todos';
import style from './home.module.css'
import NewTodo from './NewTodo';


// 1. এখানে ডামি টুডুস নেয়া হয়েছে । এই todos গুলোকে todo তে পাচ করতে হবে ।
// 9. এই todos গুলোই নিচে সেক করা হয়েছে অন্য সিস্টেমে দেখে নাও
// const dummyTodos = [
//     {
//         id: 1, 
//         title : "todo title 1",
//         desc : "todo1 description is here..."
//     },
//     {
//         id: 2, 
//         title : "todo title 2",
//         desc : "todo2 description is here..."
//     },
// ];

const Home = () => {

  // 9. এখানে todos গুলো রাখার জন্য আমরা নিচের লাইনটা লিখলাম 
  const [todos, setTodos] = useState([]);

  // 10. চাইল্ড থেকে প্যারেন্টে ডাটা পাস করার জন্য এই ফাংশনটা তৈরি করা 
  // 10. এখানে সর্বশেষ onAddTodo টা এসেছে
  const handleAddTodo = (todo) => {
    // ্11. 10 থেকে নতুন যে todo পেয়েছি তা todos এ add করতে হবে 
  setTodos((prevTodos) =>  {
    // 12. নিচের লাইনে একটা ইউনিক আইডি ইউজ করা হয়েছে ।   ইউনিক  আইডি install করার সিস্টেম  = npm install uuid 
    return [ ...prevTodos, {id: uuidv4(),todo} ]
  })
  };
  
  // 13. handleRemoveTodo কে একটা ফাংশনে রাখা হয়েছে 
  const handleRemoveTodo = (id) => {
    // 15. এখানে একাধিক যদি ডিলিট অপশন থাকে একটা একটা করে যাবে ডিলিট দেয়া যায় সেই ব্যবস্থা করা হয়েছে 
     setTodos((prevTodos) => {
      // !== একটি স্ট্রিক্ট নট ইকুয়ালিটি অপারেটর। এটি চেক করে দুইটি মানের মধ্যে সমানতার নেগেটিভ চেক করে। অর্থাৎ, যদি তুলনা করা দুইটি মান সমান না হয় তবে এই অপারেটরটি সত্য হিসাবে প্রকাশ করে।
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
     });
  };

  return (
    <div className={style.container}>
      <h1 style={{color: "white"}}> Todo App </h1>

      {/* 10. এখানে handleAddTodo ফাংশনটা পাঠানো হয়েছে  */}
      <NewTodo onAddTodo={handleAddTodo}/>
        {/* 2. উপরের ১ এর dummyTodos todos গুলো এখানে পাচ করবো । এখানে todos attribute এ dummyTodos কে পাচ করেছি */}
      {/* 13. এখানে onRemoved এ handleRemoveTodo রাখা হয়েছে  */}
       <Todos todos={todos}  onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
