import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';

const STUDENT = {
  nombre: 'Lissy Erazo',
  carnet: '20240535',
  seccionGrupo: '2B',
};

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Información del estudiante</Text>
      <View style={styles.box}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{STUDENT.nombre}</Text>
        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>{STUDENT.carnet}</Text>
        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.value}>{STUDENT.seccionGrupo}</Text>
      </View>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Characters')}>
        <Text style={styles.buttonText}>Ver personajes de Rick y Morty</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: 'center' },
  heading: { color: colors.primary, fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 24 },
  box: { backgroundColor: colors.card, borderRadius: 16, padding: 20, marginBottom: 32 },
  label: { color: colors.muted, fontSize: 13, textTransform: 'uppercase', marginTop: 10 },
  value: { color: colors.text, fontSize: 20, fontWeight: '600' },
  button: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: colors.background, fontSize: 16, fontWeight: 'bold' },
});
