import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import "./index.css";

const App = () => {
    const state = useState();
    const [addItems, setaddItems] = useState([]);
    const addNote = (note) => {
        setaddItems((prevData) => {
            return [...prevData, note];
        });

    }

    const onDelete = (id) => {
        setaddItems((oldItems) => {
            oldItems.filter((currDate, indx) => {
                return indx !== id;
            })
        })
    }
    return (
        <>
            <Header />
            <CreateNote passNote={addNote} />

            <div className="notes_container">
                {addItems.map((val, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItems={onDelete}
                    />
                })}
            </div>
        </>
    )
}

export default App;