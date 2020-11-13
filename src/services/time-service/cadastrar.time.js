import { apiPublica, apiPrivado } from '../../api/api.site'

export async function cadastroTime(request) {
    const response = await apiPublica.post('/team', request)
    return response.data
  }

  export async function pegarTimes() {
    const response = await apiPrivado.get('/team')
    return response.data
  }

 
