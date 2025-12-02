import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Video } from 'expo-av';

const FONT_TITLE_WEIGHT = '900'; 

const DADOS_DOS_VIDEOS = [
    {
        id: 'dexter',
        title: 'O Laboratório de Dexter (1996)',
        file: require('../assets/videos/dexter.mp4'),

    },
    {
        id: 'powerpuff',
        title: 'As Meninas Superpoderosas (1998)',
        file: require('../assets/videos/powerpuff.mp4'),

    },
    {
        id: 'johnnybravo',
        title: 'Johnny Bravo (1997)',
        file: require('../assets/videos/johnnybravo.mp4'),
    },
    {
        id: 'ededdeddy',
        title: 'Du, Dudu e Edu (1999)',
        file: require('../assets/videos/ededdeddy.mp4'),
    },
    {
        id: 'ben10',
        title: 'Ben 10 (2005)',
        file: require('../assets/videos/ben10.mp4'),
    },
    {
        id: 'fosters',
        title: 'A Mansão Foster para Amigos Imaginários (2004)',
        file: require('../assets/videos/fosters.mp4'),
    },
    {
        id: 'billymandy',
        title: 'As Terríveis Aventuras de Billy e Mandy (2001)',
        file: require('../assets/videos/billymandy.mp4'),
    },
    {
        id: 'chowder',
        title: 'Chowder (2007)',
        file: require('../assets/videos/chowder.mp4'),
    },
    {
        id: 'adventuretime',
        title: 'Hora de Aventura (2010)',
        file: require('../assets/videos/adventuretime.mp4'),
    },
    {
        id: 'gumball',
        title: 'O Incrível Mundo de Gumball (2011)',
        file: require('../assets/videos/gumball.mp4'),
    },
    {
        id: 'stevenuniverse',
        title: 'Steven Universe (2013)',
        file: require('../assets/videos/stevenuniverse.mp4'),

        
    },
    {
        id: 'regularshow',
        title: 'Apenas um Show (2010)',
        file: require('../assets/videos/regularshow.mp4'),
    },
     {
        id: 'omundodegreg',
        title: 'O Mundo de Greg (Craig of the Creek)',

    },
     {
        id: 'teentitansgo',
        title: 'Os Jovens Titãs em Ação!',
        
    },
     {
        id: 'victorevalentino',
        title: 'Victor e Valentino (2019)',
    },
     {
        id: 'webabybears',
        title: 'We Baby Bears (2022)',
    },
];

const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * 0.5625; 

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

export default function ListaDeEpisodiosScreen() {
    return (
        <ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollContent}>
            <View style={styles.headerContainer}>
                <Text style={styles.mainTitle}>📺 Clipes Cartoon Network</Text>
                <Text style={styles.subHeader}>aberturas</Text>
            </View>

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
        backgroundColor: "#FFD700" // Fundo CN Amarelo
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
        color: "#C2185B", // Vermelho CN
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
        maxWidth: 600, // Limite a largura para telas grandes
        marginBottom: 25,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#E30B5C', // Borda vermelha
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
        height: VIDEO_HEIGHT,
        backgroundColor: '#000',
    },
});