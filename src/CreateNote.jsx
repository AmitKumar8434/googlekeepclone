import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content:"",
    });
    const InputEvent = (e) => {
        const { value, name } = e.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
        console.log(note);
    };
    const addEvent = () => {
        if (note.title === "" && note.content === "") {
            alert('Empty Field Not Allowed');
            return;
        }
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    const expandIt = () => {
        setExpand(true);
    }
    const normal = () => {
        setExpand(false);
    }
  return (
      <>
          <div className='main_note' onDoubleClick={normal}>
              <form>
                  {expand ?
                      <input type='text' name="title" value={note.title} onChange={InputEvent} placeholder="Title" autoComplete='off' />
                      : null}
                  <textarea rows="" name="content" columns="" value={note.content} onChange={ InputEvent} onClick={expandIt}  placeholder="Write a note..." ></textarea>
                  {expand ? <Button onClick={addEvent} className='main_btn'><AddIcon className='plus_sign' /></Button>
                  : null}
              </form>
         </div>
    </>
  );
}

export default CreateNote;