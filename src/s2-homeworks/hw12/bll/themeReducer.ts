const initState:{themeId:number} = {
    themeId: 1,
}

export type ThemeState = {
    themeId: number
}

export const themeReducer = (state:ThemeState = initState, action:  { type: string; id?: number }): ThemeState => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state, themeId: action.id || state.themeId}
        }

        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
