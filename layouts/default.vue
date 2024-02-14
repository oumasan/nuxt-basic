<template>
  <UCard>
    <DefaultHeader />

    <div class="w-2/5 mt-5 m-auto">
      <slot />
    </div>

    <template #footer>
      <Placeholder class="h-8" />
    </template>
  </UCard>
</template>
