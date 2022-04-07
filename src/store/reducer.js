const initialStore = {
  authData: {
    isUserLoggedIn: false,
    email: "",
    role: "",
    userFirstName: "",
    imageUrl: "",
    fName: "",
    lName: "",
    userId: "",
  },
  requiredData: {
    presentData: [],
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
          userFirstName: action.payLoad?.userfirstname,
          email: action.payLoad.useremail,
          role: action.payLoad.userrole,
          imageUrl: action.payLoad.imageUrl,
          fName: action.payLoad.userfirstname,
          lName: action.payLoad.userlastname,
          userId: action.payLoad.userid,
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
