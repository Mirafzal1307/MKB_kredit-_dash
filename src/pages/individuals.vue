<script lang="ts" setup>
import { formatTimeLast } from '@/@core/utils/formatters';
import { useIndividualsStore } from '@/stores/individuals';
import { useRouter } from 'vue-router';

// import LegalPeopleFilter from '@/views/apps/legal-people/LegalPeopleFilter.vue'

const router = useRouter()

const headers = [
  { text: 'Исм' },
  { text: 'Фамилия' },
  { text: 'Отасининг исми' },
  { text: 'Жинс' },
  { text: 'Миллати' },
  { text: 'Маош' },
  { text: 'ПНФЛ' },
  { text: 'Кредит сўрови' },
  { text: 'Ойлик кредит тўлови' },
  { text: 'Сабаб' },
  { text: 'Муддати Ўтган кредитлар даржаси' },
  { text: 'Натижа' },
  { text: 'Кредит хавфсизлиги' },
  { text: 'Олиш муддати' },
  { text: 'Вилоят номи' },
  { text: 'Tuman номи' },
  { text: 'Манзил' },
  { text: 'Яратилган' },

]

const rowPerPage = ref(15)
const currentPage = ref(1)

const individualsStore = useIndividualsStore()
const { serverItemsLength, individualsList, loading } = storeToRefs(individualsStore)

const { getAllIndividuals } = individualsStore

const updatePage = async () => {
  await getAllIndividuals(currentPage.value)
}

onMounted(() => {
  getAllIndividuals()
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
              Жисмоний шахсларнинг кредитлари рўйхати
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
                v-for="individuals in individualsList.history"
                :key="individuals._id"
                style="height: 3.75rem;  cursor: pointer;"
              >
                <td>
                  {{ individuals.firstNameInter }}
                </td>
                <td>
                  {{ individuals.lastNameInter }}
                </td>
                <td>
                  {{ individuals.middleNameInter }}
                </td>
                <td>
                  {{ individuals.gender === '1' ? "Эркак" : "Аёл" }}
                </td>
                <td>
                  {{ individuals.nationalityName }}
                </td>
                <td>
                  {{ Number(individuals.salary).toLocaleString('en-US') }} сўм
                </td>
                <td>
                  {{ individuals.pnfl }}
                </td>
                <td>
                  {{ Number(individuals.credReq).toLocaleString('en-US') }} сўм
                </td>

                <td>
                  {{ individuals.monthlyCredit === null ? '0' : Number(individuals.monthlyCredit).toLocaleString('en-US') }} сўм
                </td>
                <td>
                  {{ individuals.loanReason }}
                </td>
                <td>
                  {{ individuals.loanOverdue }}
                </td>
                <td>
                  {{ individuals.result === "false" ? '0' : Number(individuals.result).toLocaleString('en-US') }} сўм
                </td>
                <td>
                  {{ individuals.creditSecurity }}
                </td>
                <td>
                  {{ individuals.creditIdText }}
                </td>
                <td>
                  {{ individuals.regionName }}
                </td>
                <td>
                  {{ individuals.districtName }}
                </td>
                <td>
                  {{ individuals.residenceAddress }}
                </td>
                <td>
                  {{ formatTimeLast(individuals.createdAt, false) || '' }}
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
