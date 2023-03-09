import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleUser from './SingleUser';
// import ReactPaginate from 'react-paginate';


const UserPanel = () => {
  const [users, setUsers] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [deleteFlag, setDeleteFlag] = useState(false);

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((res) => setUsers(res.data))
  }, [])

  return (
    <div>
      <div className={`flex border-b-2 py-2 border-slate-200 font-bold text-black`}>
        <div className='w-[10%] text-left px-2'>
          <input
            type="checkbox"
            checked={allChecked}
            onChange={() => setAllChecked(!allChecked)} />
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
      {users && users.map((user, idx) =>
          <SingleUser
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

export default UserPanel
