import axios             from 'axios'
import nextConfig        from 'next.config';
import React, {useState} from 'react';

export const produceApi = (url:string)=> async (req, res):Promise<any>=>{

  return await axios
    .get(process.env.API + url)
    .then(x=> x.data)
    .then(x=>res.status(200).json(x))

} 
export const fetchApi = async (url:string, locale:string='') : Promise<any>=>{

  const loc = locale 
  return await axios
    .get(process.env.API + url + loc??'')
    .then(x=> x.data)

} 