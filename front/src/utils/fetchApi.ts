import axios             from 'axios'
import React, {useState} from 'react';

export const fetchAPI = (url)=> async (req, res)=>{
  // const [api, setApi] = useState()
  return await axios
    .get(process.env.API + url)
    .then(x=> x.data)
    .then(x=>res.status(200).json(x))

    // return api
} 