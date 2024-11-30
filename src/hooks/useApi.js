import axios from 'axios';
import { useState } from "react";


const useApi = () => {

    const meuaxios = axios;

    const [passe, setPasse] = useState('');
  
    let api =  process.env.REACT_APP_API;
  
  
      const iniciar = (value) => {
        setPasse(value);
      }

      const get = (url) => {
        return  meuaxios({
          method: 'get',
          url: api+url,
          headers: { 'Authorization': 'Bearer '+ passe }
        });
      }
  
      const post = (url, data) => {
        return  meuaxios({
          method: 'post',
          url: api+url,
          data: data,
          headers: { 'Authorization': 'Bearer '+ passe }
        });
      }
      
    

    return {
      iniciar,
      get,
      post
    }
  }
  
  export default useApi