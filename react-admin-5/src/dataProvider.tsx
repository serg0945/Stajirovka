import axios from 'axios'
axios.defaults.baseURL = 'https://api.antcar.dev2.webant.ru'

interface GetListParams {
  pagination: { page: number; perPage: number }
  // sort: { field: string; order: 'ASC' | 'DESC' }
}

export const dataProvider = {
  // get a list of records based on sort, filter, and pagination
  getList: async (resource: string, params: GetListParams) => {
    const { page, perPage } = params?.pagination || { page: 1, perPage: 20 }
    try {
      const { data } = await axios.get(`/autos?page=${page}&itemsPerPage=${perPage}`)
      // https://api.antcar.dev2.webant.ru/autos?page=4&itemsPerPage=30
      console.log(await axios.get('/' + resource))
      return { data: data.items, total: data.totalItems, page: data.itemsPerPage }
    } catch (err) {
      throw err
    }
  },
  // get a single record by id
  getOne: async (resource: string, params: any) => {
    try {
      const { data } = await axios.get(`${'/' + resource}/${params.id}`)
      return { data: data }
    } catch (err) {
      throw err
    }
  },
  // get a list of records based on an array of ids
  getMany: async (resource: string, params: any) => {
    try {
      const { data } = await axios.get('/' + resource)
      return data
    } catch (err) {
      throw err
    }
  },
  // get the records referenced to another record, e.g. comments for a post
  getManyReference: async (resource: string, params: any) => {
    try {
      const { data } = await axios.get('/' + resource)
      return data
    } catch (err) {
      throw err
    }
  },
  // create a record
  create: async (resource: string, params: any) => {
    try {
      const { data } = await axios.post(`${'/' + resource}/create`, params)
      console.log(params, 'params created')
      console.log(data, 'data created')
      return data
    } catch (err) {
      throw err
    }
  },
  // update a record based on a patch
  update: async (resource: string, params: any) => {
    try {
      const { data } = await axios.put(`${'/' + resource}/${params.id}`)
      return data
    } catch (err) {
      throw err
    }
  },
  // update a list of records based on an array of ids and a common patch
  updateMany: async (resource: string, params: any) => {
    try {
      const { data } = await axios.get('/' + resource)
      return data
    } catch (err) {
      throw err
    }
  },
  // delete a record by id
  delete: async (resource: string, params: any) => {
    try {
      const { data } = await axios.delete(`${'/' + resource}/${params.id}`)
      console.log(data, 'deleted data')
      return data
    } catch (err) {
      throw err
    }
  },
  // delete a list of records based on an array of ids
  deleteMany: async (resource: string, params: any) => {
    try {
      const { data } = await axios.get('/' + resource)
      return data
    } catch (err) {
      throw err
    }
  },
}
