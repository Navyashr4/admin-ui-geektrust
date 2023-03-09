import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserPanel from './components/UserPanel';
import PaginatedItems from './components/PaginatedItems'

function App() {
  const [users, setUsers] = useState([]);
  
  const handleUsers = (users) => {
    setUsers(users);
  }

  useEffect(() => {
    axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
      .then((res) => setUsers(res.data))
  }, [])

  console.log('users from app', users);

  return (
    <div className="text-black text-center text-white min-w-[600px] max-w-[1056px] my-5 mx-auto px-5 h-screen flex flex-col">
      <div className='bg-red-400'>Search</div>
      <PaginatedItems itemsPerPage = {10} users={users} setUsers={setUsers}/>
      <div className='text-black'>Pagination and Delete Selected</div>
    </div>
  );
}

export default App;
