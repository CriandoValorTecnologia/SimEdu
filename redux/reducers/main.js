import * as t from "../types";

const main = (state ,action) => {
  switch (action.type) {
      case t.SET_RPPS:
        return { 
          ...state,
          rpps: action.payload
        };

        case t.REGISTER:
          return {
            ...state,
            nome: action.payload.nome,
            idade: action.payload.idade,
            email: action.payload.email,
            certificacao: action.payload.certificacao,
            formacao: action.payload.formacao,
            rpps: action.payload.rpps
          }

    default:
      return { ...state };
  }
};

export default main;
