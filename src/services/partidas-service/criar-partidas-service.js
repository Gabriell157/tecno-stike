import { apiPublica} from '../../api/api.site'

export async function criarPartida(request) {
    const response = await apiPublica.post('/match', request)
    return response.data
  }