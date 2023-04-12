import { login } from '@/services/user.service'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggingOut: false,
    loading: false,
    user: JSON.parse(localStorage.getItem('user')) as IUSer | null,
    totalUsers: 0,
    currentPage: 1,
    isCreatingUser: false,
    isUpdatingUser: false,
    isUserDeleting: false,

    selectedUser: null,

  }),

  actions: {
    async login(userCredentials: unknown) {
      try {
        this.loading = true

        // await getCookie()

        const data = await login(userCredentials)

        this.user = data
        localStorage.setItem('user', JSON.stringify(data))

        return data
      }
      catch (error) {
        return error
      }
      finally {
        this.loading = false
      }
    },
    async logout() {
      try {
        this.isLoggingOut = true

        localStorage.removeItem('user')

        location.reload()
      }
      finally {
        this.isLoggingOut = false
      }
    },

  },

  getters: {},
})

export interface IUSer {

  token: string

}
