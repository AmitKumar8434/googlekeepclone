import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Node from './Node';



const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prev) => {
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
