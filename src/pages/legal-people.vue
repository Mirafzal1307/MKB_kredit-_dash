<script lang="ts" setup>
import { formatTimeLast } from '@/@core/utils/formatters';
import { useLegalPeopleStore } from '@/stores/legal-people';
import { useRouter } from 'vue-router';

// import LegalPeopleFilter from '@/views/apps/legal-people/LegalPeopleFilter.vue'

const router = useRouter()

const headers = [
  { text: 'Компания номи' },
  { text: 'Талаб қилинган сумма' },
  { text: 'Кредит мақсади' },
  { text: 'Кредит тури' },
  { text: 'ИНН' },
  { text: 'Вилоят номи' },
  { text: 'Туман номи' },
  { text: 'Кўча номи' },
  { text: 'Компаниянинг фаолият тури' },
  { text: 'Ойлик тўлов' },
  { text: 'Компаниянинг ойлик кредит тўлови' },
  { text: 'Компаниянинг ойлик кредит қолдиғи' },
  { text: 'Кредит тарихи' },
  { text: 'Мавжуд кредитлар' },
  { text: 'Жорий қарз' },
  { text: 'Натижа' },
  { text: 'Корхона ташкил этилган сана' },
  { text: 'Ойлик айланма' },
  { text: 'Сўров тушган сана' },
]

const rowPerPage = ref(15)
const currentPage = ref(1)

const legalPeopleStore = useLegalPeopleStore()
const { serverItemsLength, legalPeopleList, loading } = storeToRefs(legalPeopleStore)

const { getAllLegalPeople } = legalPeopleStore

const updatePage = async () => {
  await getAllLegalPeople(currentPage.value)
}

onMounted(() => {
  getAllLegalPeople()
})

const totalPages = computed(() => Math.ceil(serverItemsLength.value / rowPerPage.value))
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard>
          <VRow>
            <h1 class="py-4 my-4 px-4 mx-4">
              Юридик шахсларнинг кредитлари рўйхати
            </h1>
          </VRow>
          <VTable

            class="text-no-wrap"
            height="60vh"
            fixed-header
          >
            <thead>
              <tr>
                <th
                  v-for="tableHead in headers"
                  :key="tableHead.text"
                  scope="col"
                >
                  {{ tableHead.text }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="loading">
                <td :colspan="headers.length">
                  <VProgressLinear indeterminate />
                </td>
              </tr>
              <tr
                v-for="legalPeople in legalPeopleList.history"
                :key="legalPeople._id"
                style="height: 3.75rem;  cursor: pointer;"
              >
                <td>
                  {{ legalPeople.companyName }}
                </td>
                <td>
                  {{ legalPeople.claimSum === "false" ? '0' : Number(legalPeople.claimSum).toLocaleString('en-US') }} сўм
                </td>
                <td>
                  {{ legalPeople.creditType === "1" ? "Айланма (12 ой)" : '' }}
                </td>
                <td>
                  {{ legalPeople.purpose === "1" ? "Айланма маблағ учун" : '' }}
                </td>
                <td>
                  {{ legalPeople.inn }}
                </td>
                <td>
                  {{ legalPeople.region }}
                </td>
                <td>
                  {{ legalPeople.district }}
                </td>
                <td>
                  {{ legalPeople.street }}
                </td>
                <td>
                  {{ legalPeople.companyActivityType }}
                </td>
                <td>
                  {{ legalPeople.claimSum === "false" ? '0' : Number(legalPeople.monthlyPayment).toLocaleString('en-US') }} сўм
                </td>
                <td>
                  {{ legalPeople.companyMonthlyCreditPayment === null ? '0' : legalPeople.companyMonthlyCreditPayment }} сўм
                </td>
                <td>
                  {{ legalPeople.companyMonthlyCreditRemainder === null ? '0' : Number(legalPeople.monthlyPayment).toLocaleString('en-US') }} сўм
                </td>
                <td>
                  {{ legalPeople.creditHistory === "false" ? "Йўқ" : "Бор" }}
                </td>
                <td>
                  {{ legalPeople.currentCredit === "false" ? "Йўқ" : "Бор" }}
                </td>
                <td>
                  {{ legalPeople.currentDebt === "false" ? "Йўқ" : "Бор" }}
                </td>
                <td>
                  {{ legalPeople.result === "false" ? "Йўқ" : "Ҳа" }}
                </td>

                <td>
                  {{ formatTimeLast(legalPeople.startDate, false) || '' }}
                </td>
                <td>
                  {{ Number(legalPeople.monthlyTurnover).toLocaleString('en-US') }}  сўм
                </td>
                <td>
                  {{ formatTimeLast(legalPeople.createdAt, false) || '' }}
                </td>
              </tr>
            </tbody>
          </VTable>
          <VDivider />
          <VCardText class="d-flex align-center flex-wrap justify-end gap-4 py-3 px-5">
            <VPagination
              v-model="currentPage"
              size="small"
              :total-visible="5"
              :length="totalPages"
              @click="updatePage"
            />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </section>
</template>
