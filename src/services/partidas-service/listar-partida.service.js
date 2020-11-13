import { apiPrivado } from '../../api/api.site'

export async function listarPartidas() {
    const response = await apiPrivado.get('/match')
    return response.data
  }