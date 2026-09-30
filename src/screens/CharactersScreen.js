import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import useCharacters from '../hooks/useCharacters';
import { colors } from '../theme/colors';

export default function CharactersScreen() {
  const { characters, loading, error, refetch } = useCharacters();

  if (loading) return <View style={styles.container}><Loading /></View>;
  if (error) return <View style={styles.container}><ErrorMessage message={error} onRetry={refetch} /></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card title={item.name} image={item.image} description={item.description} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: 16 },
});
