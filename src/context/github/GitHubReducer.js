const GitHubReducer = (state,action) => {  //action is a object that type >> action={type} 
    switch(action.type) {    //you can use if statement but if you have many it confusing
       case 'GET_USERS':
           return {
           ...state, 
           users:action.payload,
           Loading:true,
           }
        case 'false':
            return {
                ...state, 
                Loading:false,
                }
        case 'true':
            return {
                ...state, 
                Loading:true,
                }
        case 'userdefault':
            return { 
                ...state,
                defaultuserslist:action.payload,
            }
       default:
           return state               
    } 
   } 
export default GitHubReducer