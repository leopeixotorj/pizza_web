import axios from 'axios';

//###############################
// A função request é uma "closure"
// O objetivo dessa closure é guardar o token de acesso 
// em uma variável que não pode ser acessada fora dessa função
// e dessa forma proteger o token contra ataques de XSS
//###############################

function request(){

    const meuaxios = axios;
  
    let token = {
      access_token: null,
      
    };
  
    let api =  process.env.REACT_APP_API;
  
    return {
      iniciar: function(value){
        token = value;
      },

      get: function(url){
        return  meuaxios({
          method: 'get',
          url: api+url,
          headers: { 'Authorization': 'Bearer '+ token.access_token }
        });
      },
  
      post: function(url, data){
        return  meuaxios({
          method: 'post',
          url: api+url,
          data: data,
          headers: { 'Authorization': 'Bearer '+ token.access_token }
        });
      },
      
    }
  }
  
  const Request = request();
  
  export default Request