import useFetchData from './useFetchData';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function useCharacters() {
  const { data, loading, error, refetch } = useFetchData(API_URL);

  const characters = data.map((c) => ({
    id: c.id,
    name: c.name,
    image: c.image,
    description: `${c.species} · ${c.status} · ${c.gender}\nOrigen: ${c.origin?.name}\nUbicación: ${c.location?.name}`,
  }));

  return { characters, loading, error, refetch };
}
