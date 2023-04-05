import React, { useState } from 'react'

/* eslint-disable prettier/prettier */
import axios from 'axios'

export const produceApi =
  (url: string) =>
    async (req, res): Promise<any> => {
      return axios
        .get(process.env.API + url)
        .then((x) => x.data)
        .then((x) => res.status(200).json(x))
    }

export const fetchApi = async (url: string, locale = ''): Promise<any> => {
  const loc = locale ? `&?locale=${locale}` : ''
  return axios.get(process.env.API + url + loc).then((x) => x.data)
}

export const postApi = async (url: string, data): Promise<any> => {
  return axios.post(process.env.API + url, data)
}

export const getEmployees = (locale) =>
  fetchApi('/employees?populate=*', locale).then((x) =>
    x.data.map((y) => ({
      ...y.attributes,
      portait: y.attributes.portait?.data?.attributes.url ?? null,
    }))
  )
