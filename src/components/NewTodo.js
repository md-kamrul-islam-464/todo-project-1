// rafce 

import React, {useState} from 'react'

import style from './newtodo.module.css'

const NewTodo = (props) => {

  const [todo, setTodo] = useState({title: "", desc: ""});

  // এখানে destracting করেছি 
  const {title, desc} = todo;

const handleChange = (event) => {
  //  8. name এর উপর ভিত্তি করেই স্টেট আপডেটের সবচেয়ে গুরুত্বপূর্ন কাজ করা যায় 
    const name = event.target.name;
    setTodo((oldTodo) => {
      // এখানে পুরানো ভ্যালুগুলো আপডেট করলাম 
      return {...oldTodo, [name]: event.target.value}
    })
}

const handleSubmit = (event) => {
    event.preventDefault();
    // 10. Home.js থেকে onAddTodo টা এখানে পাঠানো হয়েছে এখান থেকে আবার হোমে যাবে দেখে নিও
    props.onAddTodo(todo);
    // এখানে সাবমিট করার পরে ভ্যালুগুলো যাতে এন্ট্রি থাকে সে ব্যবস্থা করলাম 
    setTodo({title: "", desc: ""})
};

  // 6. এখানে একটা ফর্ম অ্যাড করেছি 
  return (
  <form className={style.form} onSubmit={handleSubmit}>
    {/* 7. এখানে  একটা বিষয় খেয়াল করি form-field টা ২ টা ওয়ার্ড এজন্য [] এর মধ্যে  ব্যবহার করা হয়েছে  */}
    <div className={style["form-field"]}>
       <label htmlFor='title'> Title: </label>
       {/* এখানে onChange ইভেন্ট ব্যবহার করা হয়েছে কারন স্টেটের মধ্যে ভ্যালুধরে রাখতে onChange ইভেন্ট ব্যবহার করেছি */}
       <input
        type="text" 
        id='title'
        // 8. name এর উপর ভিত্তি করেই স্টেট আপডেটের সবচেয়ে গুরুত্বপূর্ন কাজ করা যায় 
        name='title' 
        value={title} 
        onChange={handleChange}/>
    </div>

    <div className={style["form-field"]}>
       <label htmlFor='desc'> Desc: </label>
       <textarea 
       type="text" 
       id='desc' 
       name='desc' 
       value={desc} 
       onChange={handleChange}/>
    </div>

    <button type='submit'> Add todo </button>

  </form>
  )
};

export default NewTodo
