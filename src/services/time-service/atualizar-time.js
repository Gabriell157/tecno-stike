import { apiPrivado } from '../../api/api.site'

export async function atualizarTime(request, id) {
  
    const response = await apiPrivado.put(`/team/${id}`, request)
    return response.data
  }