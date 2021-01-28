import * as t from "../types";

const main = (state = { cnpj: "", colabs: [], colab: "" },
action) => {
  switch (action.type) {
      case t.SET_NAME:
        return { 
          ...state,
          colabs: action.payload

        };

        case t.LOADING:
          return {
            ...state,
            loading: action.payload
          };

        case t.REGISTER:
          return {
            ...state,
            nome: action.payload.nome,
            cargo: action.payload.cargo,
            certificacao: action.payload.certificacao,
            formacao: action.payload.formacao,
            rpps: action.payload.rpps
          }

          case t.SAVE_CNPJ:
        return { 
          ...state, 
          cnpj: action.payload
        };

        case t.GET_CNPJ:
          return {
            ...state,
            cnpj: action.payload
          };

        case t.CREATE_COLAB:
          return {
            ...state,
            colabs: state.colabs.concat(action.payload)
          };

          case t.GET_COLABS:
        return { 
          ...state,
          colabs: action.payload
        };
        
        case t.DELETE_COLAB:
          return {
            ...state,
            colabs: action.payload
          };

          case t.UPDATE_COLAB:
            return {
              ...state,
              colabs: action.payload
            };

          case t.GET_COLAB:
            return {
              ...state,
              colab: action.payload
            }

    default:
      return { ...state };
  }
};

export default main;
