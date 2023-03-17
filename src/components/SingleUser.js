import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

const SingleUser = ({ users, handleUsers, currentItems, setCurrentItems, itemOffset, endOffset, selectedUsers, selectedUsersAllChecked, allChecked, id, name, email, role }) => {
  const [checked, setChecked] = useState(false);
  const [display, setDisplay] = useState(true);
  const [edit, setEdit] = useState(false);

  // console.log("All checked from single user", allChecked)

  const deleteUser = () => {
    const user = users.find(user => user.id === id);
    const idx = users.indexOf(user);
    const splicedUser = users.splice(idx, 1);
    handleUsers(users);
    console.log('single user', users);
    setCurrentItems(users.slice(itemOffset, endOffset));
  }

  const handleChecked = () => {
    if (!checked) {
      selectedUsers.push(id);
    } else {
      const idx = selectedUsers.indexOf(id);
      selectedUsers.splice(idx, 1);
    }

    setChecked(!checked);
    console.group("Selected users", selectedUsers)
  }

  const handleDelete = () => {
    deleteUser();
  }

  // console.log("single user receiving allSelectedusers", selectedUsersAllChecked)

  return (
    display && <div className={`${checked ? 'bg-slate-200' : `bg-white`} flex
    border-b-[1px] border-slate-200 py-1 text-black`}>
      <div className='w-[10%] text-left px-2'>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => handleChecked()} />
      </div>

      <div
        contentEditable={edit ? "true" : "false"}
        className={`w-[25%] text-left px-2`}>
        <div
          className={`${edit ? 'border-opacity-100' : 'border-opacity-0'} border-slate-400 border-2 rounded-md w-fit px-2`}>{name}</div>
      </div>

      <div
        contentEditable={edit ? "true" : "false"}
        className={`w-[35%] text-left px-2`}>
        <div
          className={`${edit ? 'border-opacity-100' : 'border-opacity-0'} border-slate-400 border-2 rounded-md w-fit px-2`}>{email}</div>
      </div>

      <div
        contentEditable={edit ? "true" : "false"}
        className={`w-[20%] text-left px-2`}>
        <div
          className={`${edit ? 'border-opacity-100' : 'border-opacity-0'} border-slate-400 border-2 rounded-md w-fit px-2`}>{role}</div>
      </div>

      <div className='flex w-[10%] justify-left gap-6 px-2 items-center'>
        <EditIcon
          sx={{ cursor: 'pointer', color: 'blue' }}
          onClick={() => setEdit(!edit)}
          fontSize='14px' />
        <DeleteOutlineIcon
          sx={{ cursor: 'pointer', color: 'red' }}
          onClick={() => handleDelete()}
          fontSize='14px' />
      </div>

    </div>
  )
}

export default SingleUser


//    // console.log(selectedUsersAllChecked)
    // console.log("check", selectedUsersAllChecked.find((selectedId) => selectedId === id))
    // if (allChecked && selectedUsersAllChecked.find((selectedId) => selectedId === id)){
    //   console.log("calling condition 1");
    //   setChecked(true);
    // }else if(!allChecked){
    //   setChecked(false);
    // }
    // else {
    //   console.log("calling condition 2");
    //   console.log(allChecked);
    //   console.log(selectedUsersAllChecked);
    //   setChecked(false);
    // }