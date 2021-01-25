const userReducer = (state, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        tempEmail: action.user.email
      };
    case 'LOG_IN':
      return {
        ...state,
        name: action.user.name,
        email: action.user.email,
        entries: action.user.entries,
        id: action.user.id,
        _id: action.user._id,
        accessToken: action.user.accessToken,
      };
    case 'COMPLETE_ENTRY':
      return {
        ...state,
        entries: action.user.entries
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
        tempEmail: '',
      };
    default:
      return state;
  }
}

export default userReducer;
