const initialState = {
    users: [
        { id:1, name: 'amisha' },
        { id:2, name: 'yashvi' },
        { id:3, name: 'dhruvi' }
    ]
}

const reducer = (state = initialState, action) => {
    if(action.type === 'del'){
        return { ...state, users: state.users.filter((u) => u.id !== action.playload)}
    }
    if(action.type === 'add'){
        return { ...state, users: state.users.concat(action.playload)}
    }
    if(action.type === 'edit'){
        console.log('Edit...')
    }
    return state
}

export default reducer