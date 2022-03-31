const initialStore = {
  authData: {
    isUserLoggedIn: true,
    email: "",
    role: "COORDINATOR",
    userFirstName: "Raghu",
  },
  requiredData:{
    presentData:[]
  }
};
const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "LOG_IN":
      state = {
        ...state,
        authData: {
          isUserLoggedIn: true,
          userName: action.payLoad.userfirstame,
          email: action.payLoad.email,
          role
        },
      };
    case "SET_PRESENT_DATA":
      state = {
        ...state,
        requiredData:{
          ...state.requiredData,
          presentData:action.payLoad
        }
      }
  }
  return state;
};
export default reducer;
