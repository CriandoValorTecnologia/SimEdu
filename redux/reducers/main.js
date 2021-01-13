import * as t from "../types";

const main = (state = {
        name: "guest",
        loading: false,
        error: null,
        colabs: []
}, action) => {
    switch (action.type) {
        
            case t.LOADING:
            return { 
                ...state,
                loading: action.payload
            };

            
            case t.ERROR:
            return { 
                ...state,
                error: action.payload
            };

            case t.ADD_COLAB:
            return { 
                ...state,
                colabs: state.colabs.concat(action.payload)
            };

            case t.GET_COLABS:
            return { 
                ...state,
                colabs: action.payload
            };

        default:
            return {...state};
    }
};

export default main;