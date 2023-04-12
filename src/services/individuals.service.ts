import axios from '@/plugins/axios'

export const getAllIndividualPeople = async (page: number) => {
  const { data } = await axios.get(`/history/fiz?page=${page}`)

  return data
}

