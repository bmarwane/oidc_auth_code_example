import axios from 'axios';
import qs from 'qs';

export const getToken = async (code: string) => {
  const data = qs.stringify({
    code,
   'client_id': import.meta.env.VITE_CLIENT_ID,
   'client_secret': import.meta.env.VITE_CLIENT_SECRET,
   'grant_type': 'authorization_code' 
   });
   const config = {
     method: 'post',
     url: 'http://localhost:8080/realms/myrealm/protocol/openid-connect/token',
     headers: { 
       'Content-Type': 'application/x-www-form-urlencoded'
     },
     data : data
   };

   try{
    const response = await axios(config);
    return response.data;
   } catch(error) {
      console.log(error);
   }
};

export const callSecuredAPI = async (accessToken: string) => {
  try{
   const response = await axios.get('http://localhost:9090/api/test', {
    headers: { 
      'Authorization': `Bearer ${accessToken}`
    }
   });
   return response.data;
  } catch(error) {
     console.log(error);
  }
}
