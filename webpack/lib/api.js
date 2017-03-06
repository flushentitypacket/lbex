import axios from 'axios';
axios.defaults.headers.common['X-CSRF-Token'] = window['csrf-token'];

export const getInventions = () =>
  axios.get('/inventions', { params: { format: 'json' } })
    .then(response => response.data)
    .then(items => items.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      username: item.username,
      email: item.email,
      bits: item.bits.map(bit => ({
        name: bit.name,
      })),
      materials: item.materials.map(materials => ({
        name: materials.name,
      })),
    })));

export const updateInvention = ({ id, invention }) =>
  axios.put(`/inventions/${id}`, { data: { ...invention } });
