import { apiPrivado } from '../../api/api.site'

export async function atualizarPartida(request, id) {

    const response = await apiPrivado.patch(`/match/${id}`, request)
    return response.data
  }