import React from "react";
import { useState, useEffect } from "react";
import SingleUser from "./SingleUser";

const UserPanel = ({ currentItems, setCurrentItems, users, pageCount, handleUsers, itemOffset, endOffset, selectedUsers }) => {
  const [allChecked, setAllChecked] = useState(false);
  const [selectedUsersAllChecked, setSelectedUsersAllChecked] = useState([]);
  const [pageAllChecked, setPageAllChecked] = useState(0);

  const handleAllChecked = (event) => {
    console.log("id", event.target.id);
    setPageAllChecked(Number(event.target.id));
  }

  useEffect(() => {
    console.log(setPageAllChecked)
      setAllChecked(!allChecked);
  }, [setPageAllChecked]);

  // useEffect(() => {
  //   if (allChecked) {
  //     const idArr = currentItems.map((curr) => curr.id);
  //     setSelectedUsersAllChecked([...idArr]);
  //   } else if (!allChecked) {
  //     setSelectedUsersAllChecked([]);
  //   }
  // }, [allChecked])

  useEffect(() => {
    console.log("selectedUsersAllChecked:", selectedUsersAllChecked);
  }, [selectedUsersAllChecked]);

  // useEffect(() => {
  //   if (allChecked) setAllChecked(!allChecked)
  // }, [itemOffset])

  // {allChecked && console.log("Yeah I'm true af")}
  // {!allChecked && console.log("feeling falsy")}

  return (
    <div>
      <div className={`flex border-b-2 py-2 border-slate-200 font-bold text-black`}>
        <div className='w-[10%] text-left px-2'>
          {itemOffset === 0 && <input
            id={itemOffset}
            type="checkbox"
            checked={allChecked}
            onChange={(event) => handleAllChecked(event)} />}
          {itemOffset === 10 && <input
            id={`page${itemOffset/10}`}
            type="checkbox"
            checked={allChecked}
            onChange={(event) => handleAllChecked(event)} />}
          {itemOffset === 20 && <input
            id={`page${itemOffset/10}`}
            type="checkbox"
            checked={allChecked}
            onChange={(event) => handleAllChecked(event)} />}
          {itemOffset === 30 && <input
            id={`page${itemOffset/10}`}
            type="checkbox"
            checked={allChecked}
            onChange={(event) => handleAllChecked(event)} />}
          {itemOffset === 40 && <input
            id={`page${itemOffset/10}`}
            type="checkbox"
            checked={allChecked}
            onChange={(event) => handleAllChecked(event)} />}
        </div>

        <div className='w-[25%] text-left px-2'>
          Name
        </div>

        <div className='w-[35%] text-left px-2'>
          Email
        </div>

        <div className='w-[20%] text-left px-2'>
          Role
        </div>

        <div className='flex w-[10%] px-2 text-left'>
          <div>Actions</div>
        </div>

      </div>
      {currentItems && currentItems.map((user, idx) =>
        <SingleUser
          users={users}
          handleUsers={handleUsers}

          currentItems={currentItems}
          setCurrentItems={setCurrentItems}
          itemOffset={itemOffset}
          endOffset={endOffset}

          selectedUsers={selectedUsers}
          selectedUsersAllChecked={selectedUsersAllChecked}
          key={user.id}
          allChecked={allChecked}

          id={user.id}
          name={user.name}
          email={user.email}
          role={user.role} />
      )}
    </div>
  )
}

export default UserPanel;

