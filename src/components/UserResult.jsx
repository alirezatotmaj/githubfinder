import React from 'react'
import { Link } from 'react-router-dom'
import { useContext,useState } from 'react'
import GithubContext from '../context/github/GithubContext'

function UserResult() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { UserList, dispatch } = useContext(GithubContext)
 
  function handlesortAtoz() {
    UserList.sort(function (a, b) { //A to Z
      a.login = a.login.toLowerCase();
      b.login = b.login.toLowerCase();
      setDropdownOpen(false)
      
      return a.login < b.login ? -1 : a.login > b.login ? 1 : 0
    })
    dispatch({
      type: 'GET_USERS', //it is action.type
      payload: UserList,  //it is action.payload and data retreive from API
    })
  }
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  function handlesortZtoA() {
    UserList.sort(function (a, b) { //Z to A
      a.login = a.login.toLowerCase();
      b.login = b.login.toLowerCase();
      setDropdownOpen(false)
      return a.login > b.login ? -1 : a.login < b.login ? 1 : 0
    })
    dispatch({
      type: 'GET_USERS', //it is action.type
      payload: UserList,  //it is action.payload and data retreive from API
    })
  }

  return (
    <>
      {UserList.length == 0 ?
        <>
          <div className='text-center hero-content'>
            <div className='max-w-lg'>
              <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
              <p className='text-5xl mb-8'>You have no Match!</p>
            </div>
          </div>
        </>
        :
        <div>
          <div className="grid grid-cols-1 content-start">
            <div className="dropdown  ml-auto items-dropdown-left mr-8 mb-8">
              <label tabIndex={0} onClick={toggleDropdown} className="btn btn-ghost btn-sm rounded-b-none w-28 focus:bg-gray-600">Sort Users</label>
              <ul tabIndex={0} className="dropdown-content menu  shadow bg-base-100 rounded-b w-28"></ul>
              {dropdownOpen && (
                <ul className="dropdown-content menu  shadow bg-base-100 rounded-b w-28">
                  <li><button onClick={handlesortAtoz} className='h-2 rounded-t-none'>A to Z</button></li>
                  <li><button onClick={handlesortZtoA} className='h-2'>Z to A</button></li>
                </ul>
              )}

              
            </div>
          </div>

          <div className='grid grid-cols-1 gap-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3'>

            {UserList.map((x) =>
              <div >

                <div className="flex flex-col items-center pb-10">
                  <Link to={`/github/users/${x.login}`}><img
                    className="mb-3  mt-10 w-48 h-48 rounded-full shadow-lg"
                    src={x.avatar_url}
                    alt="User picure" /></Link>
                  <h5 className="mb-1 text-xl font-bold text-gray-400 dark:text-white">
                    <Link to={`/github/users/${x.login}`}>{x.login}</Link> </h5>
                </div>

              </div>
            )}

          </div>
        </div>}

    </>
  )
}

export default UserResult


