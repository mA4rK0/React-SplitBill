import { useState } from "react"

export default function SplitBill({selectedFriend, onSplit}) {
    const [amount, setAmount] = useState("");
    const [myBill, setBill] = useState("");
    const friendBill = amount ? amount - myBill : "";
    const [isPaying, setPaying] = useState("user");

    function handleSubmit(e) {
        e.preventDefault();
        if (!amount || !myBill) return;
        onSplit(isPaying === "user" ? friendBill : -myBill);
    };

    return (
        <>
            <form action="" className="form-split-bill" onSubmit={handleSubmit}>
                <h2>Patungan bareng si {selectedFriend.name}</h2>

                <label htmlFor="">💵 Total Tagihan</label>
                <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />

                <label htmlFor="">Tagihan Kamu</label>
                <input type="text" value={myBill} onChange={(e) => setBill(e.target.value)} />

                <label htmlFor="">Tagihan {selectedFriend.name}</label>
                <input type="text" value={friendBill} disabled/>

                <label htmlFor="">🤑 Ditalangin Oleh</label>
                <select value={isPaying} onChange={(e) => setPaying(e.target.value)}>
                    <option value="user">Kamu</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>

                <button className="button">Add</button>
            </form>
        </>
    )
};