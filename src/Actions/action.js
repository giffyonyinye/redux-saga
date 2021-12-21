
export const createContact = (payload) => {
    return {
        type: "CREATE_CONTACT",
        payload
    }
};

export const setContact = (payload) => {
    return {
        type: "SET_CONTACT",
        payload
    }
}