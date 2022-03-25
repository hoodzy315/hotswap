import { useState } from "react";

/**
 * Author: Joe Woods
 * Form for submitting a new item
 */

export default function ImageUpload() {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState(null);
    const [itemName, setItemName] = useState(null);
    const [price, setPrice] = useState(null);
    const [condition, setCondition] = useState(null);

    const submitForm = (event) => {
        event.preventDefault();

        const dataArray = new FormData();
        dataArray.append("itemName", itemName);
        dataArray.append("file", file);
        dataArray.append("description", description);
        dataArray.append("price", price);
        dataArray.append("condition", condition);

        const testItem = JSON.stringify({
            name: itemName,
            file: file,
            description: description,
            price: price,
            condition: condition
        });

        console.log(testItem);
    };
    return (
        <div className="upload">
            <form className="uploadForm" onSubmit={submitForm}>
                <input
                    type="text"
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder={"Item Name"}
                />
                <br/>
                <input className="uploadfrmt" type="file" onChange={(e) => setFile(e.target.files)} />
                <br/>
                <textarea onChange={(e) => setDescription(e.target.value)}>Description</textarea>
                <br/>
                <input
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder={"price"}
                />
                <br/>
                <label className="uploadfrmt" htmlFor="condition">Condition</label>
                <select onSubmit={(e) => setCondition(e.target.value)}>
                    <option>
                        New (still in packaging)
                    </option>
                    <option>
                        Like New
                    </option>
                    <option>
                        Used
                    </option>
                    <option>
                        Poor
                    </option>
                </select>
                <br/>
                <input className="uploadfrmt" type="submit" />
            </form>
        </div>
    );
}
