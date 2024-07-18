import { useState } from "react"

export default function AddFriend({onAddFriend}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if(!name || !image) return;

        // generate a random id
        const id = crypto.randomUUID();

        const newFriend = {
            id,
            name,
            image: `${image}?u=${id}`,
            balance: 0
        }

        onAddFriend(newFriend); 
        setName("");
        setImage("");
    };

    return (
        <>
            <form action="" className="form-add-friend" onSubmit={handleSubmit}>
                <label htmlFor="">🪪 Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="">📷 Photo</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

                <button className="button">Add</button>
            </form>
        </>
    )
};