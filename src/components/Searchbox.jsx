import React,{useState,useEffect,useContext} from 'react'
import GithubContext from '../context/github/GithubContext'



function Searchbox() {
  
  const {GITHUB_searchurl,defaultuserslist,GITHUB_TOKEN,dispatch} = useContext(GithubContext)

  const [text,SetText] = useState("")

  useEffect(() => {
    if (text !="") {fetchuserlist(text)} 
    else{
      // SetLoading(false)
      // SetLoading(true)
      dispatch({
        type:'false',}) 
      dispatch({
        type:'true',}) 
      
      // SetuserList(defaultuserslist)
      dispatch({
        type:'GET_USERS', //it is action.type
        payload:defaultuserslist ,  //it is action.payload and data retreive from API
            })
    }
    
  }, [text]);

  const fetchuserlist = async (text) => {
    const response = await fetch(GITHUB_searchurl+text, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    })
    const data = await response.json()
    // SetuserList(data.items)
    // SetLoading(true)
    dispatch({
      type:'GET_USERS', //it is action.type
      payload:data.items ,  //it is action.payload and data retreive from API
          })
}

  function handleClear(){
    SetText("")
    dispatch({
      type:'GET_USERS', //it is action.type
      payload:defaultuserslist ,  //it is action.payload and data retreive from API
          })
  }

  function handleText(event){
    const {value}= event.target
    SetText(value)
    // SetLoading(false) 
    dispatch({
      type:'false',
          })     
  }
    

  return (
      <div className='items-center text-center'>
        <div className='relative'>
          <input
              value={text}
              onChange={handleText}
              type="text"
              placeholder="Search users..."
              className="input input-lg text-black pr-40 bg-gray-200 w-full max-w-md"/>
            {text.length>0&& <button onClick={handleClear} 
            className='btn absolute btn-ghost btn-lg rounded-'>Clear!</button>}
        </div>

      </div>
      
  )
}

export default Searchbox 