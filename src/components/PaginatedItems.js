import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginatedItems.css'
import axios from 'axios';
import SingleUser from './SingleUser';



const UserPanel = ({currentItems, users, setUsers}) => {
  const [allChecked, setAllChecked] = useState(false);

  console.log("user panel", users);

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
      {currentItems && currentItems.map((user, idx) =>
          <SingleUser
            users = {users}
            setUsers = {setUsers}
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



function PaginatedItems({ itemsPerPage, users, setUsers }) {
  const [itemOffset, setItemOffset] = useState(0);
  console.log("PaginatedItems users", users)
  console.log("Paginated users", users)
  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <UserPanel 
        currentItems={currentItems} 
        users={users}
        setUsers = {setUsers}/>
        
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}

        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num prev'
        nextLinkClassName='page-num next'
        activeClassName='paginationActive'
      />
    </>
  );
}

export default PaginatedItems;
