import React, { useState } from "react";

export default function InputForm({ addNote }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateContent = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote({ title, content });
        setTitle("");
        setContent("");
    };

    return (
        <form className="inputForm" onSubmit={handleSubmit}>
            <input
                className="inputTitle"
                name="title"
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={updateTitle}
            />
            <textarea
                className="inputContent"
                name="content"
                placeholder="Enter content..."
                value={content}
                onChange={updateContent}
            ></textarea>
            <div className="buttonContainer">
                <button className="button">Add</button>
            </div>
        </form>
    );
}
