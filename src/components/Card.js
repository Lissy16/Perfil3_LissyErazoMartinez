import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
  },
  image: { width: 110, height: 130 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  title: { color: colors.primary, fontSize: 17, fontWeight: 'bold', marginBottom: 6 },
  description: { color: colors.muted, fontSize: 13, lineHeight: 18 },
});
