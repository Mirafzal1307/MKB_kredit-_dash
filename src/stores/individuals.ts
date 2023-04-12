import { defineStore } from 'pinia'
import { getAllIndividualPeople } from '@/services/individuals.service'

export const useIndividualsStore = defineStore('individuals', {
  state: () => ({
    loading: false,
    individualsList: {} as IHistory,
    serverItemsLength: 0,
    currentRequestment: null,
    isEditingRequestment: false,
    filterTypes: {},
    errors: [],
  }),

  actions: {
    async getAllIndividuals(page = 1) {
      try {
        this.individualsList = {}
        this.loading = true

        const data = await getAllIndividualPeople(page)

        this.individualsList = data

        this.serverItemsLength = this.individualsList.total
      }
      finally {
        this.loading = false
      }
    },

  },
})

interface IHistory {
  total: number
  history: IIndividuals []
  message: string
}

interface IIndividuals {
  _id: number
  salary: string
  monthlyCredit: null
  creditIdText: string
  loanOverdue: string
  creditSecurity: string
  districtName: string
  regionName: string
  credReq: string
  loanReason: string
  result: string
  firstNameInter: string
  lastNameInter: string
  middleNameInter: string
  pnfl: string
  residenceAddress: string
  nationalityName: string
  gender: string
  __v: number
  createdAt: string
}
