import React from 'react'
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

function SearchBar({users, handleUsers}) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if(query){
      const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query?.toLowerCase?.()) ||
        user.email.toLowerCase().includes(query?.toLowerCase?.())
      );
      handleUsers(filteredUsers);
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleQuery = (e) => {
    if(e.target.value.length === 0){
      axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((res) => handleUsers(res.data))
      setQuery("");
    }else{
      setQuery(e.target.value)
    }
  }

  return (
    <div className='my-2 mb-8 text-black flex justify-center items-center'>
      <input
        type="text"
        placeholder="Search by name or email"
        className='border-solid border-2 w-[40%] border-[#5AB1BB]/50 rounded-md mr-4 p-1 pl-2'
        value={query}
        onChange={e => handleQuery(e)}
        onKeyDown={handleKeyDown}
      />
      <SearchIcon
        className=''
        onClick={handleSearch}>
      </SearchIcon>
    </div>
  )
}

export default SearchBar
