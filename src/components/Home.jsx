import React, {useContext} from 'react' 
import Navbar from './Navbar'
import Footer from './Footer'
import UserResult from './UserResult.jsx'
import Searchbox from './Searchbox'
import Spinner from './Spinner'
import GithubContext from '../context/github/GithubContext'



function Home() {
    const {Loading} = useContext(GithubContext)

    return (
        <div className="flex flex-col justify-between h-screen">
            
            <Navbar/>
            <Searchbox />
            {Loading ?  <UserResult/> : <Spinner/>}
            <Footer/>
        </div>
    )
}

export default Home