
const contactReducer = (state, action) => {
    switch(action.type) {
        case "CREATE_CONTACT":

            return {
                ...state,
                contactForm:[...state.contactForm, action.payload]
            }
        default: 
        return state
    }
}

export default contactReducer;