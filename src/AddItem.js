import { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function AddItem() {
  const [text, setText] = useState("");

  const addItem = async () => {
    if (!text) return;

    await addDoc(collection(db, "items"), {
      text: text,
      createdAt: serverTimestamp()
    });

    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default AddItem;
