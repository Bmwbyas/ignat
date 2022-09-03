type ActionType={type:'LOADING'}

const initState = {
isLoading:false
}
export type initStateType=typeof initState

export const loadingReducer = (state = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {isLoading:!state.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (): ActionType => {return {type:'LOADING'} }
 // fix any