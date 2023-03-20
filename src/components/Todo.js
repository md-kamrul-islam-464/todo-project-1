// rafce = react array function export component

import React from 'react'

import style from './todo.module.css'

// 5. todos ৫ এ ম্যাপিং করা ১টি ১টি ডেটা আমরা এখানে থেকে রিসিভ করবো 
const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;

  const handleClick = (id) => {
    props.onRemoveTodo(id);
  }

  return (
    <article className={style.todo}>
      <div>
         <h3>{title}</h3>
         <p> {desc} </p>
      </div>
      {/* 12. এখানে button কে ক্লিক করে ডিলেট দেয়ার জন্য onClick ব্যবহার করে হ্যান্ডেলক্লিকের সাথে েএকটা id ও অ্যাড করা হয়েছে  */}
      <button className={style.btn} onClick={()=>
      {handleClick(id)}}>    
          {/* এখানে ফন্ট অসমের জন্য আইকন অ্যাড করলাম  */}
         <i className='fa fa-trash fa-2x'> </i>
      </button>
    </article>
  );
};

export default Todo;
