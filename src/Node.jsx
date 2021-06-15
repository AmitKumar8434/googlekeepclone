import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const Node = (props) => {
    
    const deleteNode = () => {
        props.deleteItem(props.id);
    }
    return (
      <>
            <div className='note'>
                <h1>{props.title}</h1>
                <br />
                <p>{ props.content}</p>
                <button className='deletebtn' onClick={deleteNode}>
                <DeleteOutlineIcon className='deleteicon' />
                </button>
        </div>
      </>
    );
}
export default Node;