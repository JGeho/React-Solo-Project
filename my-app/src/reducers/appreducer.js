const initState = {
    checkedOutBooks:[]
}

const reducer = (state=initState,action) => {
    if(action.type === 'CHECK_OUT'){
        const selectedIsbns = action.isbns;
        console.log("Inside reducer "+selectedIsbns);
        return {
            checkedOutBooks : [...state.checkedOutBooks, selectedIsbns]
        }
    }
    return state;
}

export default reducer;