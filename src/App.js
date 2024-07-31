import React,{useEffect,useReducer} from "react"
import GitHubReducer from './context/github/GitHubReducer'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import GithubContext from "./context/github/GithubContext"
import Home from "./components/Home" 
import About from "./components/About" 
import NotFound from "./components/NotFound" 
import UserPage from "./components/UserPage"

function App() {

    useEffect( () => {fetchUsers()}, [])

    // const [UserList, SetuserList] = useState([]) //FOR SHOWING USERLIST IN USERRESULT(DEFAULT + WHEN TYPING)
    // const [Loading, SetLoading] = useState(false)
    // const [defaultuserslist,setDefaultuser] = useState([])
    const initialState= { users: [],Loading: false,defaultuserslist:[] } //define as a new object
    const[state, dispatch] = useReducer (GitHubReducer,initialState)  //initialState turn object to state
    
    

     
    const part1 = 'ghp_dPHPaOkNoYC' //last
    const part2 = 'qwdBF9YYRTCroZk'
    const part3 = 'NMnq3UZChP'
    const GITHUB_URL = 'https://api.github.com/'
    const GITHUB_TOKEN = part1+part2+part3
    const GITHUB_searchurl= 'https://api.github.com/search/users?q='


    const fetchUsers=async()=> {
        const response= await fetch(`${GITHUB_URL}users`,{
              headers: {
                Authorization : `token ${GITHUB_TOKEN}`, }, })
        const data=await response.json()
        // SetuserList(data)
        // SetLoading(true)
        dispatch({
            type:'GET_USERS', //it is action.type
            payload:data ,  //it is action.payload and data retreive from API
                })

        // setDefaultuser(data)
        dispatch({
            type:'userdefault', //it is action.type
            payload:data ,  //it is action.payload and data retreive from API
                })
        }

       

    
    
    return (
    <GithubContext.Provider value={{dispatch,defaultuserslist:state.defaultuserslist,UserList:state.users,Loading:state.Loading,GITHUB_URL,GITHUB_TOKEN,GITHUB_searchurl}}> 
            <Router>
                <Routes>
                    <Route path="/github/" element={<Home/>}/>
                    <Route path="/github/about" element={<About />}/>
                    <Route path="/github/*" element={<NotFound />}/>
                    <Route path="/github/users/:username" element={<UserPage/>}/>
                </Routes>
            </Router>
    </GithubContext.Provider>
    )
   
}
export default App


