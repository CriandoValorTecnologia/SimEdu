import * as t from "../types";
import axios from "axios";
import { request } from "../../util/request";

export const setRpps = (rpps) => ({
  type: t.SET_RPPS,
  payload: rpps
})

export const restore = (data) => dispatch => dispatch({
  type: t.REGISTER,
  payload: data
});

export const saveColab = (colab) => ({

  type: t.REGISTER,
  payload: colab
})