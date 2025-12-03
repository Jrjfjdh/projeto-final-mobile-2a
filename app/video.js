import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const FONT_TITLE_WEIGHT = '900'; 

// Defina a largura máxima do card aqui para ser consistente.
const CARD_MAX_WIDTH = 600;

const DADOS_DOS_VIDEOS = [
    { id: 'dexter', title: 'O Laboratório de Dexter (1996)', file: require('../assets/videos/dexter.mp4') },
    { id: 'powerpuff', title: 'As Meninas Superpoderosas (1998)', file: require('../assets/videos/powerpuff.mp4') },
    { id: 'johnnybravo', title: 'Johnny Bravo (1997)', file: require('../assets/videos/johnnybravo.mp4') },
    { id: 'ededdeddy', title: 'Du, Dudu e Edu (1999)', file: require('../assets/videos/ededdeddy.mp4') },
    { id: 'ben10', title: 'Ben 10 (2005)', file: require('../assets/videos/ben10.mp4') },
    { id: 'fosters', title: 'A Mansão Foster para Amigos Imaginários (2004)', file: require('../assets/videos/fosters.mp4') },
    { id: 'billymandy', title: 'As Terríveis Aventuras de Billy e Mandy (2001)', file: require('../assets/videos/billymandy.mp4') },
    { id: 'chowder', title: 'Chowder (2007)', file: require('../assets/videos/chowder.mp4') },
    { id: 'adventuretime', title: 'Hora de Aventura (2010)', file: require('../assets/videos/adventuretime.mp4') },
    { id: 'gumball', title: 'O Incrível Mundo de Gumball (2011)', file: require('../assets/videos/gumball.mp4') },
    { id: 'stevenuniverse', title: 'Steven Universe (2013)', file: require('../assets/videos/stevenuniverse.mp4') },
    { id: 'regularshow', title: 'Apenas um Show (2010)', file: require('../assets/videos/regularshow.mp4') },
    { id: 'omundodegreg', title: 'O Mundo de Greg (Craig of the Creek)', file: require('../assets/videos/omundodegreg.mp4') },
];

const VideoPlayer = ({ title, file }) => {
    return (
        <View style={styles.videoCard}>
            <Text style={styles.videoTitle}>{title}</Text>
            
            {file ? ( // Se o arquivo existir, renderiza o componente Video
                <Video
                    source={file}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain" 
                    isLooping
                    // Adicione uma chave única para forçar a remountagem se necessário (boa prática)
                    key={title} 
                />
            ) : ( // Se o arquivo NÃO existir, renderiza o placeholder
                <View style={[styles.video, styles.unavailableVideo]}>
                    <Text style={styles.unavailableText}>Vídeo Indisponível 😥</Text>
                    <Text style={styles.unavailableSubText}>(Arquivo faltando)</Text>
                </View>
            )}
        </View>
    );
};

export default function ListaDeEpisodiosScreen() {
    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollContent}>
            <View style={styles.headerContainer}>
                <Text style={styles.mainTitle}>📺 Clipes Cartoon Network</Text>
                <Text style={styles.subHeader}>aberturas</Text>
            </View>

            {/* Itera sobre TODOS os vídeos da lista */}
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

const styles = StyleSheet.create({
    mainContainer: { 
        flex: 1, 
        backgroundColor: "#FFD700"
    },
    scrollContent: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    headerContainer: { 
        alignItems: "center", 
        marginBottom: 25, 
        width: "100%", 
    },
    mainTitle: {
        fontSize: 26,
        fontWeight: FONT_TITLE_WEIGHT,
        color: "#C2185B",
        textAlign: 'center',
        marginBottom: 4,
        textShadowColor: 'rgba(255, 255, 255, 0.9)',
        textShadowOffset: { width: 1.5, height: 1.5 },
        textShadowRadius: 0,
    },
    subHeader: {
        fontSize: 16,
        color: "#303030",
        fontWeight: '700',
    },
    videoCard: {
        width: '100%',
        maxWidth: CARD_MAX_WIDTH, // Largura máxima fixa
        marginBottom: 25,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#E30B5C', 
        elevation: 5,
    },
    videoTitle: {
        fontSize: 18,
        fontWeight: '700',
        padding: 10,
        backgroundColor: '#D9D9D9',
        textAlign: 'center',
        color: '#333',
    },
    video: {
        width: '100%',
        // **AJUSTE CRÍTICO:** Usa aspectRatio para garantir a proporção 16:9, 
        // deixando o sistema calcular a altura automaticamente.
        aspectRatio: 16 / 9, 
        backgroundColor: '#000',
    },
    // Estilos para os cards sem vídeo
    unavailableVideo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B4B4B',
    },
    unavailableText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
    },
    unavailableSubText: {
        color: '#CCCCCC',
        fontSize: 14,
    }
});