<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
  firstName: undefined,
  lastName: undefined,
  mail: undefined,
  companyName: undefined,
  department: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.firstName) errors.push({ path: 'firstName', message: 'Required' })
  if (!state.lastName) errors.push({ path: 'lastName', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>

  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
    <UDivider label="基本情報" />
    <div class="flex">
      <UFormGroup label="姓" name="firstName" :required="true" class="w-60 mr-5">
        <UInput v-model="state.firstName" />
      </UFormGroup>
  
      <UFormGroup label="名" name="lastName" :required="true" class="w-60">
        <UInput v-model="state.lastName" />
      </UFormGroup>
    </div>

    <UFormGroup label="メールアドレス" :required="true" class="w-60">
      <UInput v-model="state.mail" placeholder="you@example.com" icon="i-heroicons-envelope" />
    </UFormGroup>

    <UDivider label="会社情報" />
    <UFormGroup label="会社名" name="companyName" :required="true">
      <UInput v-model="state.companyName" />
    </UFormGroup>

    <UFormGroup label="部署名" name="department" :required="true">
      <UInput v-model="state.department" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>

