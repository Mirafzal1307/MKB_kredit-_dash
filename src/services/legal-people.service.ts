import axios from '@/plugins/axios'

export const getAllLegalPeople = async (page: number) => {
  const { data } = await axios.get(`/history/yur?page=${page}`)

  return data
}

