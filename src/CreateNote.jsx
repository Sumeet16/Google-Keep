import React from 'react';
import "./index.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from 'react';


const CreateNote = (props) => {
    const state = useState();
    const [note, setnote] = useState({
        title: "",
        content: "",
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;
        
        setnote((perValue) => {
            return{
                ...perValue,
                [name]:value, 
            }
        })
        
        console.log(note);
    } 

    const alertBox = () => {
        props.passNote(note);
        setnote({
            title: "",
            content: "",
        });
    }

    return(
        <>
            <div className="main-title-div">
                <form>
                    <input type="text" name="title" id="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off"/>
                    <textarea name="content" id="disc" cols="57" rows="5" value={note.content} onChange={inputEvent} placeholder="Write a note..."></textarea>
                    <Button id="Button" onClick={alertBox}>
                        <AddIcon className="plus_sign"/>
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreateNote;