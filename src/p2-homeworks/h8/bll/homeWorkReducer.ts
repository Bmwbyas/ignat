import {UserType} from "../HW8";

type sortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type sortCheckAgeActionType = {
    type: 'check'
    payload: number
}

type ActionsType = sortActionType | sortCheckAgeActionType

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let newState = [...state]
            switch (action.payload) {
                case 'up':
                    return newState.sort((a, b) => a.name > b.name ? 1 : -1)
                case "down":
                    return newState.sort((a, b) => b.name > a.name ? 1 : -1)
            }
            break
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            throw new Error("I don't understand this action type")
    }
}