import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const viagemAPI = {
  getAllViagens: () => api.get('/viagem'),
  getViagemById: (id) => api.get(`/viagem/${id}`),
  createViagem: (data) => api.post('/viagem', data),
  updateViagem: (id, data) => api.put(`/viagem/${id}`, data),
  deleteViagem: (id) => api.delete(`/viagem/${id}`),
  addDestino: (id, destino) => api.post(`/viagem/${id}/destino`, destino),
  removeDestino: (id, destino) => api.delete(`/viagem/${id}/destino`, { data: destino }),
  updateDestino: (id, destino) => api.put(`/viagem/`)
};

export default api;