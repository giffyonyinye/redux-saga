const initialState = {
    contact: []
}
const contactReducer = (state=initialState, action) => {
    switch(action.type) {
        case "SET_CONTACT":

            return {
                ...state,
                contact:[...state.contact, action.payload]
            }
                
        default: 
        return state
    }
}

export default contactReducer;