import React,{useEffect,useContext,useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {useParams} from 'react-router-dom'
import GithubContext from '../context/github/GithubContext'
import { Link } from 'react-router-dom'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa'

function UserPage() {

  useEffect( () => {fetchUsers()}, [])

  const {GITHUB_URL,GITHUB_TOKEN} = useContext(GithubContext)
  const {username} = useParams()
  const [UserProfile, SetUserProfile] = useState([])

  const fetchUsers=async()=> {
    const response= await fetch(`${GITHUB_URL}users/${username}`,{
          headers: {
            Authorization : `token ${GITHUB_TOKEN}`, }, })
    const data=await response.json()
    SetUserProfile(data)
    }
  
  
  return (<div className="flex flex-col justify-between h-screen">
    <Navbar />

        <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image bg-base-600 mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card'>
              
                <img style={{ opacity: '0.8', borderRadius: '25px' }}  src={UserProfile.avatar_url} alt='' />
            
              <div className='card-body justify-end'>
                <p className='flex-grow-0'>{UserProfile.login}</p>
              </div>
            </div> 
          </div>

          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {UserProfile.name}
                <div className='ml-2 mr-1 badge badge-success'>{UserProfile.type}</div>
                {UserProfile.hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{UserProfile.bio}</p>
              <div className='mt-4 card-actions'>
                <a
                  href={UserProfile.html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div>
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {UserProfile.location && (
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'>{UserProfile.location}</div>
                </div>
              )}
              {UserProfile.blog && (
                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='text-lg stat-value'>
                    <a href={UserProfile.blog} target='_blank' rel='noreferrer'>
                      {UserProfile.blog}
                    </a>
                  </div>
                </div>
              )}
              {UserProfile.twitter_username && (
                <div className='stat'>
                  <div className='stat-title text-md'>Twitter</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${UserProfile.twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {UserProfile.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUsers className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Followers</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {UserProfile.followers}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Following</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {UserProfile.following}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Repos</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {UserProfile.public_repos}
              </div>
            </div>

            <div className='stat'>
              <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl' />
              </div>
              <div className='stat-title pr-5'>Public Gists</div>
              <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {UserProfile.public_gists}
              </div>
            </div>
          </div>
        </div>

        {/* <RepoList repos={UserProfile.repos} /> */}
      </div>
    


      
     
    

   
   <Footer/>
   </div>
  )
}

export default UserPage