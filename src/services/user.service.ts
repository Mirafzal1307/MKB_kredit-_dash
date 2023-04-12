import axios from '@/plugins/axios'

export const login = async (userCredentials: unknown) => {
  const { data } = await axios.post('/admin/login', userCredentials)

  return data
}

