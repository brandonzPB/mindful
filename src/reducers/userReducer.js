const userReducer = (state, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        email: action.user.email,
        createToken: action.user.createToken
      };
    case 'LOG_IN':
      return {
        ...state,
        name: action.user.name,
        firstName: action.user.firstName,
        email: action.user.email,
        entries: action.user.entries,
        tempText: [],
        id: action.user.id,
        _id: action.user._id,
        accessToken: action.user.accessToken,
      };
    case 'COMPLETE_ENTRY':
      return {
        ...state,
        entries: action.user.entries,
        tempText: [
          ...state.tempText,
          action.user.text,
        ],
      };
    case 'LOG_OUT':
      return {
        ...state,
        name: '',
        email: '',
        entries: 0,
        id: '',
        _id: '',
        accessToken: '',
        createToken: '',
        tempText: '',
      };
    default:
      return state;
  }
}

export default userReducer;
