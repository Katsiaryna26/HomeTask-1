import {UserType} from '../HW8'


type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
           return ([...state].sort((a, b) => {
                return action.payload === 'up'
                    ? a.name.localeCompare(b.name) // сортировка по возрастанию
                    : b.name.localeCompare(a.name); // сортировка по убыванию
            }));
            // need to fix
        }
        case 'check': {

            return ([...state].filter((user)=>user.age>18)) // need to fix
        }
        default:
            return state
    }
}
