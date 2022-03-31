const initialStore = {
  authData: {
    isUserLoggedIn: false,
    email: "",
    role: "",
    userFirstName: "",
    imageUrl: "",
  },
  requiredData:{
    presentData:[]
  }
};
const reducer = (state = initialStore, action) => {
  const fullName =
    action.payLoad?.userfirstname + " " + action.payLoad?.userlastname;
  switch (action.type) {
    case "LOG_IN":
      state = {
        ...state,
        authData: {
          isUserLoggedIn: true,
          userFirstName: fullName,
          email: action.payLoad.useremail,
          role: action.payLoad.userrole,
          imageUrl: action.payLoad.imageUrl,
        },
      };
      break;
    case "LOG_OUT":
      state = {
        ...state,
        authData: {
          isUserLoggedIn: false,
          userFirstName: "",
          email: "",
          role: "",
        },
      };
      break;
    default:
      break;
  }
  return state;
};
export default reducer;
