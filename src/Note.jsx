import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import "./index.css";
import { Button } from '@material-ui/core';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItems(props.id); 
    };
    return(
        <>
            <div className="note">
                <h3 className="note-heading">{props.title}</h3>
                <p className="note-disc">{props.content}</p>
                <Button id="Button" onClick={deleteNote}>
                    <DeleteOutlineIcon className="delete-sign" />
                </Button>
            </div>
        </>
    );
}

export default Note;