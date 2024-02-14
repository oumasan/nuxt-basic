<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

// レイアウト指定
definePageMeta({
  layout: 'login'
})

const { setAuth } = useAuth();

const state = reactive({
  userName: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.userName) errors.push({ path: 'userName', message: 'Required' })
  if (!state.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}

const onSubmit = async (event: FormSubmitEvent<any>) => {
  setAuth(event.data)
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="USER NAME" name="userName">
      <UInput v-model="state.userName" />
    </UFormGroup>

    <UFormGroup label="PASSWORD" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>

