const initialStore = {
  authData: {
    isUserLoggedIn: false,
    email: "",
    role: "",
    userFirstName: "",
    userImg: "",
  },
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
          userImg: action.payLoad.imageUrl,
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
      console.log("Default State");
  }
  return state;
};
export default reducer;
