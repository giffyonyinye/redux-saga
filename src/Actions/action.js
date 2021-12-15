
export const createContact = (payload) => {
    return {
        type: "CREATE_CONTACT",
        payload
    }
}

export const deleteContact = (payload) => {
    return {
        type: "DELETE",
        payload
    }
}