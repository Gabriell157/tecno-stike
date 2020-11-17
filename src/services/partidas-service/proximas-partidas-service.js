import { apiPrivado } from '../../api/api.site'

export async function proximasPartidas() {
    const response = await apiPrivado.get('/match/next')
    return response.data
  }