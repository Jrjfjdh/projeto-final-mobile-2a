import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Video } from 'expo-av';

// 🔥 LISTA DE VÍDEOS LOCAIS
const DADOS_DOS_VIDEOS = [
  {
    id: 'gumball',
    title: 'O Incrível Mundo de Gumball',
    file: require('../assets/gumball.mp4'),
  },
  {
    id: 'ben10',
    title: 'Ben 10 Clássico',
  },
  {
    id: 'titans',
    title: 'Jovens Titãs',
  },
];

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * 0.5625;

// COMPONENTE DO PLAYER
const VideoPlayer = ({ title, file }) => {
  return (
    <View style={styles.videoCard}>
      <Text style={styles.videoTitle}>{title}</Text>

      <Video
        source={file}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
      />
    </View>
  );
};

// TELA PRINCIPAL
export default function ListaDeEpisodiosScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>📺 Episódios</Text>
      <Text style={styles.subHeader}>Vídeos 100% Locais</Text>

      {DADOS_DOS_VIDEOS.map((item) => (
        <VideoPlayer
          key={item.id}
          title={item.title}
          file={item.file}
        />
      ))}
    </ScrollView>
  );
}

// ESTILOS
const styles = StyleSheet.create({
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#E30613',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  videoCard: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingBottom: 10,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    backgroundColor: '#D9D9D9',
    textAlign: 'center',
  },
  video: {
    width: '100%',
    height: VIDEO_HEIGHT,
    backgroundColor: '#000',
  },
});