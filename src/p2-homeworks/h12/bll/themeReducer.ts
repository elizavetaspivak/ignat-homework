type initStateType = typeof initState

type changeThemeAT = {
    type: 'CHANGE_THEME'
    color: string
}

const initState = {
    color: 'red'
};

export const themeReducer = (state:initStateType = initState, action: changeThemeAT): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                color: action.color
            };
        }
        default: return state;
    }
};

export const changeThemeAC = (color: string): changeThemeAT => ({type: 'CHANGE_THEME', color}); // fix any
