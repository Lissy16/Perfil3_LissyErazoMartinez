# Perfil3_LissyErazoMartinez

Aplicación móvil hecha con React Native + Expo (React Navigation, custom hooks y componentes reutilizables). Consume la API de [Rick and Morty](https://rickandmortyapi.com/api/character).

- **Nombre del estudiante:** Lissy Erazo
- **Carnet:** 20240535
- **Sección y grupo:** 2B
- **Video demostrativo:** ENLACE-VIDEO-AQUI
- **Descargar APK:** ENLACE-APK-AQUI

## Estructura
- `src/components`: `Card`, `Loading`, `ErrorMessage` (reutilizables)
- `src/hooks`: `useFetchData`, `useCharacters` (lógica y consumo de API)
- `src/screens`: `StudentScreen` (pantalla 1), `CharactersScreen` (pantalla 2)
- `src/navigation`: React Navigation (native stack)

## Ejecutar
```
npm install
npx expo start
```

## Generar APK
```
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
