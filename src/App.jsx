
import React, { useState,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Node from './Node';



const App = () => {
  let initialitems = JSON.parse(localStorage.getItem('addItem')) || [];
  
  useEffect(() => {
    localStorage.setItem('addItem',JSON.stringify([...addItem]));
  })
  const [addItem, setAddItem] = useState(initialitems);
  const addNote = (note) => {
    setAddItem((prev) => {
      localStorage.setItem('addItem',JSON.stringify([...prev,note]));
      return [...prev, note];
    });
  };
  const onDelete = (id) => {
    setAddItem((old) =>
      old.filter((curr, indx) => {
        return indx !== id;
      })
    )
  }

  return (
    <>
      <div className='main_div'>
      <Header />
        <CreateNote passNote={addNote} />
        <div className='container'>
          {addItem.map((val, index) => {

            return <Node
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}/>
          })}

          </div>
        <Footer />
        </div>
    </>
  );
}

export default App;
