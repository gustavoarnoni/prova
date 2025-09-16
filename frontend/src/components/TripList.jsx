import { useState, useEffect } from 'react';
import { viagemAPI } from '../services/api';
import { format } from 'date-fns';

const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const response = await viagemAPI.getAllViagens();
      setTrips(response.data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar viagens: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  if (loading) return <div>Carregando viagens...</div>;
  if (error) return <div>{error}</div>;
  if (!trips.length) return <div>Nenhuma viagem encontrada.</div>;

  return (
    <div>
      <h2>Viagens Cadastradas</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data Saída</th>
            <th>Data Chegada</th>
            <th>Valor</th>
            <th>Destinos</th>
          </tr>
        </thead>
        <tbody>
          {trips.map(trip => (
            <tr key={trip._id}>
              <td>{trip.nome}</td>
              <td>{format(new Date(trip.dataSaida), 'dd/MM/yyyy')}</td>
              <td>{format(new Date(trip.dataChegada), 'dd/MM/yyyy')}</td>
              <td>R$ {trip.valor.toFixed(2)}</td>
              <td>{trip.destinos?.length || 0} destino(s)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripList;