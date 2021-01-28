import * as t from "../types";
import axios from "axios";
import { request } from "../../util/request";


export const restore = (data) => dispatch => dispatch({
  type: t.REGISTER,
  payload: data
});

export const saveColab = (nome, cargo, certificacao, formacao) => dispatch => {

  const colab = {rpps: "", nome: "", cargo: "", certificacao: "", formacao: ""}
  const cnpj=JSON.parse(localStorage.getItem("cnpj"))
  colab.rpps = cnpj ? cnpj : ""
  colab.nome = nome ? nome : ""
  localStorage.setItem("Colab", JSON.stringify(userData))

    dispatch({
      type: t.REGISTER,
      payload: colab
    })
}

export const setInfo = ( cnpj ) => dispatch => {

          localStorage.setItem("cnpj", JSON.stringify(cnpj))
          dispatch({
              type: t.SAVE_CNPJ,
              payload: cnpj
          })
      
}

export const getInfo = () => dispatch => {
  const userData = JSON.parse(localStorage.getItem("cnpj"))
  const data = userData ? userData : ""

  dispatch({
    type: t.GET_CNPJ,
    payload: data
  })
}


export const setName = (name) => async dispatch => {

      const userData = {cnpj: "", name: ""}
      const cnpj=JSON.parse(localStorage.getItem("cnpj"))
      userData.cnpj = cnpj ? cnpj : ""
      userData.name = name ? name : ""
      localStorage.setItem("Colab", JSON.stringify(userData))

      dispatch({
          type: t.SET_NAME,
          payload: userData
      })
      
}

export const getAll = () => dispatch => {

  const data = {cnpj: "", name: ""}
  const userData = JSON.parse(localStorage.getItem("Colab"))
  data.cnpj = userData ? userData.cnpj : ""
  data.name = userData ? userData.name : ""


  dispatch({
    type: t.SET_NAME,
    payload: data
  })
}

export const createColab = (colab) => async dispatch => {
  try {

      const cnpj=JSON.parse(localStorage.getItem("cnpj"))
      const rpps=cnpj ? cnpj : ""
      console.log(JSON.stringify(colab))
      const nome = colab.nome
      const cargo = colab.cargo
      const certificacao = colab.certificacao
      const formacao = colab.formacao
      const apiResponse = await request.post(
          process.env.API_ADDRESS+'/api/colab/new',
          { rpps, nome, cargo, certificacao, formacao }
      )
      window.location.reload();

      dispatch({
          type: t.CREATE_COLAB,
          payload: apiResponse.data.colab
      })
  }catch(error){
    console.log(error)
      dispatch({
          type: t.ERROR,
          payload: error.response.data.error
      })
  }
}

export const getColabs = () => async dispatch => {
  try {
      const cnpj=JSON.parse(localStorage.getItem("cnpj"))
      const rpps=cnpj ? cnpj : ""

      const apiResponse = await request.post(
          process.env.API_ADDRESS+'/api/colab/findrpps',
          { rpps }
      )

      dispatch({
          type: t.GET_COLABS,
          payload: apiResponse.data.colabs
      })
  }catch(error){
      dispatch({
          type: t.ERROR,
          payload: error.response.data.error
      })
  }
}

export const updateColab = (id, nome, cargo, certificacao, formacao, rpps) => async dispatch => {
  try {

      const apiResponse = await request.post(
          process.env.API_ADDRESS+'/api/colab/update',
          { id, nome, cargo, certificacao, formacao, rpps }
      )

      dispatch({
          type: t.UPDATE_COLAB,
          payload: apiResponse.data.colabs
      })
      
  }catch(error){
      
      dispatch({
          type: t.ERROR,
          payload: error.response.data.error
      })
  }
}

export const deleteColab = (id) => async dispatch => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true
    })

    const cnpj=JSON.parse(localStorage.getItem("cnpj"))
    const rpps=cnpj ? cnpj : ""

      const apiResponse = await request.post(
          process.env.API_ADDRESS+'/api/colab/delete',
          { id, rpps }
      )

      dispatch({
          type: t.DELETE_COLAB,
          payload: apiResponse.data.colabs
      })
      dispatch({
        type: t.LOADING,
        payload: false
      })
  }catch(error){
    dispatch({
      type: t.LOADING,
      payload: false
    })
      dispatch({
          type: t.ERROR,
          payload: error.response.data.error
      })
  }
}

export const getColab = () => async dispatch => {
  try {
      const colab=JSON.parse(localStorage.getItem("colab"))
      const id=colab._id

      const apiResponse = await request.post(
          process.env.API_ADDRESS+'/api/colab/findid',
          { id }
      )

      dispatch({
          type: t.GET_COLAB,
          payload: apiResponse.data.colab
      })
  }catch(error){
      dispatch({
          type: t.ERROR,
          payload: error.response.data.error
      })
  }
}