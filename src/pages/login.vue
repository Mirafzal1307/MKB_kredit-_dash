<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { emailValidator, requiredValidator } from '@validators'

const router = useRouter()
const userStore = useUserStore()
const isPasswordVisible = ref(false)
const loading = ref(false)

const userCredentials = reactive({
  email: '',
  password: '',
})

const login = async () => {
  userCredentials.email = userCredentials.email.trim()
  userCredentials.password = userCredentials.password.trim()

  try {
    loading.value = true
    await userStore.login(userCredentials)
    await router.push('/individuals')
  }
  catch (error) {
    return error
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      cols="12"
      lg="12"
      class="d-flex align-center justify-center"
    >
      <VCard

        :max-width="500"
        class="mt-12 mt-sm-0 pa-4"
      >
        <VCardText>
          <VNodeRenderer
            :nodes="themeConfig.app.logo"
            class="mb-6"
          />

          <h5 class="text-h5 font-weight-semibold mb-1 text-center">
            {{ themeConfig.app.title }}
          </h5>

          <h5 class="text-h5 font-weight-semibold mb-1">
            тизимига хуш келибсиз! 👋🏻
          </h5>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="login">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="userCredentials.email"
                  label="Email"
                  type="email"
                  :rules="[requiredValidator, emailValidator]"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="userCredentials.password"
                  label="Password"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <VBtn
                  block
                  type="submit"
                  :loading="loading"
                  class="mt-5"
                >
                  Кириш
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
