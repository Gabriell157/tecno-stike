import { apiPublica } from '../../api/api.site'

export async function login(request) {
  const response = await apiPublica.post('/login', request)
  localStorage.setItem('token', response.data.token)
}

export async function logout() {
  localStorage.removeItem('token')
}