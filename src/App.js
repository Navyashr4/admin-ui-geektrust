import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserPanel from './components/UserPanel';
import PaginatedItems from './components/PaginatedItems'
import SearchBar from './components/SearchBar';

function App() {
  const [users, setUsers] = useState([]);
  
  const handleUsers = (users) => {
    console.log("users from app", users)
    setUsers(users);
  }

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((res) => setUsers(res.data))
  }, [])

  // console.log('users from app', users);

  return (
    <div className="text-black text-center text-white min-w-[600px] max-w-[1056px] my-5 mx-auto px-5 h-screen flex flex-col justify-center">
      <div className='text-[#5AB1BB] text-2xl font-semibold mb-8 '>Admin UI Panel</div>
      <SearchBar users={users} handleUsers={handleUsers}/>
      {users && <PaginatedItems users={users} handleUsers={handleUsers} itemsPerPage = {10}/>}
    </div>
  );
}

export default App;
