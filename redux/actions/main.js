import * as t from "../types";
import axios from 'axios';
import { request } from '../../util/request';

export const addColab = (nome, email, idade, formacao, certificacao) => async dispatch => {
    try {
        dispatch({
            type: t.LOADING,
            payload: true
        })

        const apiResponse = await axios.post(
            process.env.API_ADDRESS+'/api/colab/new',
            { nome, email, idade, formacao, certificacao }
        )

        if(apiResponse.data.success){
            localStorage.setItem("user_info", JSON.stringify(apiResponse.data.colab))
            dispatch({
                type: t.ADD_COLAB,
                payload: apiResponse.data.colab
            })
        }

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

export const getColabs = (_id) => async dispatch => {
    try {
        dispatch({
            type: t.LOADING,
            payload: true
        })


        const apiResponse = post(
            process.env.API_ADDRESS+'/api/colab/my',
            { _id }
        )

        dispatch({
            type: t.GET_COLABS,
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