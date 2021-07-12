import {UserType} from './../HW8';


type ActionsType = {type: "sort", payload: "up" | "down"} | {type: "check", payload: 18}

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case "sort": {
            const copyState = [...state].sort((a, b) => {
                let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB)
                    return -1
                if (nameA > nameB)
                    return 1
                return 0
            })
            return action.payload === 'up' ? copyState : copyState.reverse()
        }
        case "check": {
            return state.filter(el => el.age >= action.payload)
        }
        default: return state
    }
};