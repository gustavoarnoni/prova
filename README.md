# Sistema de Gerenciamento de Viagens

Sistema para gerenciar viagens com destinos, desenvolvido para prova de nivelamento.

## Tecnologias

- **Backend**: NestJS + MongoDB + Mongoose
- **Frontend**: React + Vite + Axios

## Estrutura do Projeto

```
.
├── src/                # Backend NestJS
│   ├── viagem/         # Módulo de viagens
│   └── common/         # Filtros e utilitários
├── frontend/           # Frontend React
│   └── src/
│       ├── components/ # Componentes React
│       └── services/   # Serviços de API
```

## Como executar

### Backend (porta 3000)
```bash
# Na raiz do projeto
npm run start:dev
```

### Frontend (porta 5173)
```bash
# Em outro terminal
cd frontend
npm run dev
```

## Funcionalidades

- ✅ Criar, listar, editar e deletar viagens
- ✅ Adicionar e remover destinos nas viagens
- ✅ Interface simples e responsiva
- ✅ Validação de dados
- ✅ Tratamento de erros

## API Endpoints

- `POST /viagem` - Criar viagem
- `GET /viagem` - Listar viagens
- `GET /viagem/:id` - Buscar viagem por ID
- `PUT /viagem/:id` - Atualizar viagem
- `DELETE /viagem/:id` - Deletar viagem
- `POST /viagem/:id/destino` - Adicionar destino
- `DELETE /viagem/:id/destino` - Remover destino

## Modelo de Dados

```javascript
{
  nome: string,
  dataSaida: Date,
  dataChegada: Date,
  valor: number,
  destinos: [{ nome: string }]
}
```