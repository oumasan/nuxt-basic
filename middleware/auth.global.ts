import { useAuth } from "~/composables/useAuth"

/**
 * 認証グローバルミドルウェア
 * 認証情報を持っていない場合、login画面へ
 */
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/login") {
    const { auth } = useAuth();
    if (auth.value.id === undefined) {
      return navigateTo('/login')
    } 
  }
})
