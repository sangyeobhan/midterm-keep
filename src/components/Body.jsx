import React, { useState } from "react";
import InputForm from "./cards/InputForm";
import Note from "./cards/Note";
import { notes } from "../notes";

export default function Body() {
    const [noteArray, setNotes] = useState(notes);

    const hanleDeleteButton = (key) => {
        const updatedNoteArray = noteArray.filter((note) => note.key !== key);
        setNotes(updatedNoteArray);
    };

    return (
        <div className="body">
            <InputForm />
            <div className="notesContainer">
                {noteArray.map((note) => {
                    return (
                        <Note
                            key={note.key}
                            note={note}
                            hanleDeleteButton={() =>
                                hanleDeleteButton(note.key)
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}
