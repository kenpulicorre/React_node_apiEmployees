const axios = require("axios");

export const GET_DATA = "getData";

//let url = "https://kennethpcapp2.herokuapp.com";
let url = "http://localhost:3002";

export function getData() {
  console.log("--Action getDataOk!--");
  return async function (dispatch) {
    try {
      let json = await axios.get(`${url}/employees`, {});

      console.log("--Action getDataOk!--dato[0]: ", json.data[0]);

      return dispatch({
        type: GET_DATA,
        payload: json.data,
      });
    } catch (error) {
      alert("Falla en obtencion de Pias desde Servidor ");
      console.log(error);
    }
  };
}
