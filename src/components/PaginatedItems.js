import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './PaginatedItems.css'
import UserPanel from './UserPanel'
import axios from 'axios';

function PaginatedItems({ itemsPerPage }) {
  const [users, setUsers] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const selectedUsers = [];

  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handleUsers = (users) => {
    console.log("Calling Handle Users")
    setUsers(users);
    console.log("Users from paginated items", users);
  }

  const handleDeleteSelected = () => {
    if (selectedUsers) {
      selectedUsers.map((id) => {
        const user = users.find(user => user.id === id);
        const idx = users.indexOf(user);
        const splicedUser = users.splice(idx, 1);

        handleUsers(users);
        setCurrentItems(users.slice(itemOffset, endOffset));
      })
    }
  }

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((res) => setUsers(res.data));
    console.log(users);
  }, []);

  useEffect(() => {
    setCurrentItems(users.slice(itemOffset, endOffset));
  }, [users, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
    console.log(event.selected)
  };

  return (
    <>
      <UserPanel
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
        users={users}
        handleUsers={handleUsers}
        itemOffset={itemOffset}
        endOffset={endOffset}
        selectedUsers={selectedUsers}
        pageCount={pageCount}
      />
      <div className='flex justify-around items-center py-4'>
        <button
          className='bg-red-400 text-white p-2 rounded-md'
          onClick={() => handleDeleteSelected()}
        >Delete Selected
        </button>
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
      </div>
    </>
  );
}

export default PaginatedItems;
