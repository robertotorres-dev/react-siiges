const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payLoad,
            }
        case 'TYPE_USER':
            return {
                ...state,
                user:
                    state.user.find((item) => item.id === Number(action.payLoad))
            };
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payLoad,
            }
        default:
            return state;
    }
}

export default reducer;