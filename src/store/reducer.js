const initialStore = {
    authData:{
        isUserLoggedIn: true,
        email:'',
        role:'ADMIN',
        userFirstName: 'Raghu'
    }
};
const reducer = (state=initialStore,action) => {
    switch(action.type)
    {
        case 'LOG_IN':
            state = {
                ...state,
                authData:{
                    isUserLoggedIn:true,
                    userName: action.payLoad.userName,
                    email: action.payLoad.email
                }
            }
    }
    return state;
}
export default reducer;