<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VIcon
        size="40"
        icon="mdi-account"
      />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <!--
            <VListItem>
            <template #prepend>
            <VListItemAction start>
            <VBadge
            dot
            location="bottom right"
            offset-x="3"
            offset-y="3"
            color="success"
            >
            <VAvatar
            color="primary"
            variant="tonal"
            >
            <VImg :src="avatar1" />
            </VAvatar>
            </VBadge>
            </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
            John Doe
            </VListItemTitle>
            <VListItemSubtitle>Admin</VListItemSubtitle>
            </VListItem>

            <VDivider class="my-2" />
          -->

          <!-- 👉 Profile -->

          <!--
            <VListItem
            link
            :to="{ name: 'users-profile' }"
            >
            <template #prepend>
            <VIcon
            class="me-2"
            icon="tabler-user"
            size="22"
            />
            </template>

            <VListItemTitle>Менинг маълумотларим</VListItemTitle>
            </VListItem>
          -->

          <!-- 👉 Settings -->
          <!--
            <VListItem link>
            <template #prepend>
            <VIcon
            class="me-2"
            icon="tabler-settings"
            size="22"
            />
            </template>

            <VListItemTitle>Settings</VListItemTitle>
            </VListItem>
          -->

          <!-- 👉 Pricing -->
          <!--
            <VListItem link>
            <template #prepend>
            <VIcon
            class="me-2"
            icon="tabler-currency-dollar"
            size="22"
            />
            </template>

            <VListItemTitle>Pricing</VListItemTitle>
            </VListItem>
          -->

          <!-- 👉 FAQ -->
          <!--
            <VListItem link>
            <template #prepend>
            <VIcon
            class="me-2"
            icon="tabler-help"
            size="22"
            />
            </template>
          -->

          <!--
            <VListItemTitle>FAQ</VListItemTitle>
            </VListItem>
          -->

          <!-- Divider -->
          <!-- <VDivider class="my-2" /> -->

          <!-- 👉 Logout -->
          <VListItem @click="userStore.logout">
            <template #prepend>
              <VIcon
                class="me-2"
                icon="tabler-logout"
                size="22"
              />
            </template>

            <VListItemTitle>Чиқиш</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
