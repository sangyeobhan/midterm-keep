import React from "react";

export default function InputForm() {
    return (
        <form className="inputForm">
            <input
                className="inputTitle"
                type="text"
                placeholder="Enter title"
            />
            <textarea
                className="inputContent"
                placeholder="Enter content..."
            ></textarea>
            <div className="buttonContainer">
                <button className="button">Add</button>
            </div>
        </form>
    );
}
