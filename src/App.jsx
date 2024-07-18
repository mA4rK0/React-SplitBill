import { useState } from 'react'
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import SplitBill from './components/SplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Lol",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Tesi",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelected] = useState(null);

  function handleShowAdd() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
    setSelected(null);
  };

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  };

  function handleSelected(friend) {
    setSelected((selected) => selected?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  };

  function handleSplit(value) {
    setFriends(
      friends.map((friend) => {
        if(friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value
          };
        };

        return friend;
      })
    )

    setSelected(null);
  };

  return (
    <>
      <section className="app">
        <section className="sidebar">
          <FriendList friends={friends} onSelected={handleSelected} selectedFriend={selectedFriend}/>
          {showAddFriend && (
            <AddFriend onAddFriend={handleAddFriend} />
          )}
          <button className="button" onClick={handleShowAdd}>{showAddFriend ? "Close" : "Add Friend"}</button>
        </section>
        {selectedFriend && (
          <SplitBill selectedFriend={selectedFriend} onSplit={handleSplit}/>
        )}
      </section>
    </>
  )
};

export default App;
