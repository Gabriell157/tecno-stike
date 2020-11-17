import { apiPrivado } from '../../api/api.site'

export async function partidasRecentes() {
    const response = await apiPrivado.get('/match/latest')
    return response.data
  }