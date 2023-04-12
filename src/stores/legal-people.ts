import { defineStore } from 'pinia'
import { getAllLegalPeople } from '@/services/legal-people.service'

export const useLegalPeopleStore = defineStore('legal-people', {
  state: () => ({
    loading: false,
    legalPeopleList: {} as IHistory,
    serverItemsLength: 0,
    currentRequestment: null,
    isEditingRequestment: false,
    filterTypes: {},
    errors: [],
  }),

  actions: {
    async getAllLegalPeople(page = 1) {
      try {
        this.legalPeopleList = {}
        this.loading = true

        const data = await getAllLegalPeople(page)

        this.legalPeopleList = data

        this.serverItemsLength = this.legalPeopleList.total
      }
      finally {
        this.loading = false
      }
    },

  },
})

interface IHistory {
  total: number
  history: ILegalPeople []
  message: string
}

interface ILegalPeople {
  _id: number
  claimSum: string
  purpose: string
  creditType: string
  companyName: string
  inn: string
  region: string
  district: string
  street: string
  companyActivityType: string
  startDate: string
  monthlyTurnover: string
  monthlyPayment: null
  companyMonthlyCreditPayment: null
  companyMonthlyCreditRemainder: null
  creditHistory: string
  currentCredit: string
  currentDebt: string
  result: string
  __v: number
  createdAt: string
}
