import { apiPrivado } from '../../api/api.site'


export async function deletarTime(request) {
    const response = await apiPrivado.delete(`/team/${request}`)
    return response.data
  }