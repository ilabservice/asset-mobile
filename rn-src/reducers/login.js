/**
 *@author: meekoMa
 *@date: 18/11/17 16:00:32
 *@desc: reducer
 *
 */

'use strict';
type State = {
    token:string;
};

const initialState: State = {
    token:'',
};

function login(state: State = initialState, action: Action): State {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.data,
            };
        default:
            return state;
    }
}
module.exports = login;
