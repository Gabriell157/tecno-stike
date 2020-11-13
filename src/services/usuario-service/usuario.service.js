import { apiPrivado, apiPublica } from '../../api/api.site'

export async function perfil() {
  const response = await apiPrivado.get('/user/me')
  return response.data
}

export async function cadastro(request) {
  const response = await apiPublica.post('/user', request)
  return response.data
}