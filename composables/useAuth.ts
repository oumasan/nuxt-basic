import { type Auth, type Login } from '~/types'
/**
 * 認証情報
 * API実行及び状態管理
 */
export const useAuth = () => {
  const auth: Ref<Auth> = useState('auth', () => <Auth> {});

  const setAuth = async (loginInfo: Login) => {
    const { data, pending, error } = await useFetch('http://localhost:3000/api/login')
    if (!error.value) {
      auth.value.id = data.value.id
      auth.value.userName = data.value.userName
      navigateTo("/")
    }
  }

  return {
    auth: readonly(auth), // stateはreadonlyとし、update関数を通してのみ更新できる
    setAuth: setAuth,
}
}