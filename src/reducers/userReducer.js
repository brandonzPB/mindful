const userReducer = (state, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        email: action.user.email,
        password: action.user.password,
        _id: action.user._id,
        createToken: action.user.createToken
      };
    case 'LOG_IN':
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        entries: action.user.entries,
        tempText: [],
        tempCount: 0,
        id: action.user.id,
        _id: action.user._id,
        accessToken: action.user.accessToken,
      };
    case 'COMPLETE_ENTRY':
      return {
        ...state,
        entries: action.user.entries,
        tempCount: action.user.tempCount,
        tempText: [
          ...state.tempText,
          action.user.tempText,
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
        tempCount: 0,
      };
    default:
      return state;
  }
}

export default userReducer;
