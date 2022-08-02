

export const GET_MENU = "GET_MENU";
export const SET_MENU = "SET_MENU";






export const getMenu = () => ({
    
    type: GET_MENU
}
)


export const setMenu = (menuItem:Object) => 
({
    type: SET_MENU,
    menuItem: menuItem
}
)






