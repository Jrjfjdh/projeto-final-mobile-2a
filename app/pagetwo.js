import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity } from "react-native";

// --- 1. ESTRUTURA DE DADOS (ERAS E DESENHOS CN) ---
// Adaptada para ter "description" (resumo) e "fullDescription" (detalhes)
const CARTOON_NETWORK_ERAS = [
    {
        id: 1,
        era: "ERA BLOCK / PRÉ-CHECKERBOARD",
        years: "1992–1996",
        color: "#9C27B0", // Roxo - Destaca o card
        description: "Início do canal; vivia de reprises; não tinha muitos originais ainda.",
        fullDescription: "Início do canal (1992–1996), que vivia de reprises de Looney Tunes, Tom & Jerry e Hanna-Barbera. Essa fase não tinha produções próprias, mas o bloco World Premiere Toons em 1995 revelou os animadores que salvariam o canal. Desenhos: Looney Tunes, Os Flintstones, Scooby-Doo (reprises), Thundercats, He-Man.",
    },
    {
        id: 2,
        era: "ERA CHECKERBOARD",
        years: "1996–2004",
        color: "#1B9C46", // Verde Checkerboard
        description: "Nascimento dos Cartoon Cartoons; explosão de originais como Dexter, Meninas Superpoderosas, Johnny Bravo e Coragem.",
        fullDescription: "Com a Era Checkerboard (1996–2004), o canal engrenou com séries originais de sucesso. A identidade visual era quadriculada. Originais: O Laboratório de Dexter, As Meninas Superpoderosas, Johnny Bravo, Du, Dudu e Edu, Coragem, A Vaca e o Frango, Samurai Jack, KND. Animes: Pokémon, Dragon Ball Z.",
    },
    {
        id: 3,
        era: "ERA CITY / POWERHOUSE",
        years: "2004–2007",
        color: "#6D4C41", // Marrom/Laranja da Era City
        description: "Vinhetas com cidade 3D. Lançamento de Ben 10 e Mansão Foster. Começa a crise com a saída de Ted Turner.",
        fullDescription: "A Era City (2004–2007) marcou o auge visual e o início da crise gerencial. O logo virou 'CN' e a programação foi dominada por novos sucessos e animes. Originais: Mansão Foster para Amigos Imaginários, Ben 10 (2005), Camp Lazlo, Hi Hi Puffy AmiYumi. Animes: Zatch Bell!, One Piece.",
    },
    {
        id: 4,
        era: "ERA NERD / CHEETAH",
        years: "2007–2010",
        color: "#8B0000", // Vermelho Escuro/Vinho para destacar a crise
        description: "Crise criativa; foco em live-action (CN Real); queda de audiência. Mas surgiram Flapjack e Chowder.",
        fullDescription: "A Era Nerd (2007–2010) foi a pior crise: foco em live-action de baixa qualidade ('CN Real') e queda de audiência. Muitos desenhos antigos foram cortados. Os novos hits: Chowder, The Marvelous Misadventures of Flapjack, Ben 10: Força Alienígena, Total Drama Island.",
    },
    {
        id: 5,
        era: "ERA CHECK IT (Recuperação)",
        years: "2010–2016",
        color: "#7B1FA2", // Roxo Vibrante da Era Check It
        description: "Renascimento do canal; identidade vibrante; explosão de hits icônicos: Hora de Aventura, Gumball, Apenas um Show e Steven Universe.",
        fullDescription: "A Era Check It (2010–2016) foi o grande renascimento, com foco total na animação original e uma estética moderna e vibrante. Sucessos: Hora de Aventura, O Incrível Mundo de Gumball, Apenas um Show, Steven Universe, Titio Avô, Over The Garden Wall. O canal voltou ao topo.",
    },
    {
        id: 6,
        era: "ERA DIMENSIONAL / REDRAWN",
        years: "2016–Presente",
        color: "#0288D1", // Azul - Era Atual
        description: "Estética moderna, foco em reboots e finais de séries clássicas. O Mundo de Greg é o novo sucesso.",
        fullDescription: "A Era Dimensional (2016–Presente) foca em um humor mais leve e na estética minimalista. Houve muitos reboots (Ben 10 2016, ThunderCats Roar) e spin-offs (Steven Universe Future). O Mundo de Greg (Craig of the Creek) e Maçã e Cebolinha são os novos sucessos, com o canal se fundindo cada vez mais com a plataforma Max.",
    },
];

const FONT_TITLE_WEIGHT = '900';
const FONT_SUBTITLE_WEIGHT = '700';

// --- 2. COMPONENTE PRINCIPAL (Page) ---
export default function Page() {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleExpand = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    return (
        <View style={styles.mainContainer}>
            {/* Status Bar: Rosa Choque */}
            <StatusBar barStyle="light-content" backgroundColor="#E30B5C" /> 
            
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                
                {/* Cabeçalho */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerBadge}>
                        <Text style={styles.headerBadgeText}>💖 CN HISTORY 💛</Text>
                    </View>
                    <Text style={styles.mainTitle}>LINHA DO TEMPO DA CARTOON NETWORK</Text>
                    <Text style={styles.subHeader}>AS ERAS DA ANIMAÇÃO</Text>
                </View>

                {/* Renderização dos Cards de Era */}
                {CARTOON_NETWORK_ERAS.map((item) => (
                    <View key={item.id} style={[innerStyles.card, { borderColor: item.color }]}>
                        
                        <View style={innerStyles.cardContent}>
                            
                            {/* Cabeçalho do Card */}
                            <View style={innerStyles.cardHeaderRow}>
                                <View style={innerStyles.titleWrapper}>
                                    <Text style={[innerStyles.cardTitle, { color: item.color }]}>{item.era}</Text>
                                </View>
                                
                                {/* Badge Amarelo/Rosa para Anos */}
                                <View style={innerStyles.yearBadge}>
                                    <Text style={innerStyles.yearText}>{item.years}</Text>
                                </View>
                            </View>

                            {/* Divisor em cor de destaque Rosa */}
                            <View style={innerStyles.divider} />

                            {/* Descrição: Exibe o resumo ou o texto completo */}
                            <Text style={innerStyles.cardDescription}>
                                {expandedCard === item.id ? item.fullDescription : item.description}
                            </Text>

                            {/* Botão "Ler Mais / Ler Menos" */}
                            <TouchableOpacity 
                                style={innerStyles.readMoreButton}
                                onPress={() => toggleExpand(item.id)}
                            >
                                <Text style={innerStyles.readMoreText}>
                                    {expandedCard === item.id ? 'VER MENOS ▲' : 'DETALHES DA ERA ▼'}
                                </Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                ))}

                <View style={innerStyles.footer}>
                    <Text style={innerStyles.footerText}>✨ ANIMAÇÃO PARA SEMPRE ✨</Text>
                </View>

            </ScrollView>
        </View>
    );
}

// --- 3. ESTILOS GLOBAIS E LOCAIS (Rosa e Amarelo) ---

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#FFD700", // 🌟 Amarelo Dourado Vibrante (Fundo Principal)
    },
    scrollContent: {
        padding: 20, 
        paddingBottom: 60,
        alignItems: "center",
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 15,
        width: "100%",
        maxWidth: 700,
    },
    headerBadge: {
        backgroundColor: "#E30B5C", // Rosa Choque (Destaque)
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 3,
        borderColor: "#FFFFFF",
        shadowColor: "#303030",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 0, 
        elevation: 5,
    },
    headerBadgeText: {
        color: "#FFEB3B", // Amarelo Claro para contraste no badge
        fontSize: 14,
        fontWeight: FONT_TITLE_WEIGHT, 
        letterSpacing: 2,
    },
    mainTitle: {
        fontSize: 34, 
        fontWeight: FONT_TITLE_WEIGHT,
        color: "#C2185B", // Rosa Escuro Vibrante
        textAlign: 'center',
        marginBottom: 4,
        textShadowColor: 'rgba(255, 255, 255, 0.9)', // Efeito de contorno branco forte
        textShadowOffset: { width: 2.5, height: 2.5 },
        textShadowRadius: 0,
        letterSpacing: 1.5,
    },
    subHeader: {
        fontSize: 20,
        color: "#303030",
        fontWeight: FONT_SUBTITLE_WEIGHT,
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

const innerStyles = StyleSheet.create({
    // Estilos do Card (adaptado do seu modelo)
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15, 
        marginBottom: 20,
        width: "100%",
        maxWidth: 700,
        shadowColor: "#E30B5C", // Sombra Rosa para impacto
        shadowOpacity: 1,
        shadowOffset: { width: 5, height: 5 }, // Sombra sólida e projetada
        shadowRadius: 0,
        elevation: 8,
        overflow: "hidden",
        borderWidth: 5, // Contorno grosso, cor dinâmica (item.color)
    },
    cardContent: {
        padding: 20,
    },
    cardHeaderRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start",
        marginBottom: 10,
    },
    titleWrapper: {
        flex: 1,
        marginRight: 10,
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: FONT_TITLE_WEIGHT, 
        // A cor é dinâmica, definida pelo item.color (Era Checkerboard é verde, City é marrom, etc.)
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    yearBadge: {
        backgroundColor: "#FFEB3B", // Amarelo Destaque
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#E30B5C", // Contorno Rosa Choque
        alignSelf: 'flex-start', 
    },
    yearText: {
        fontSize: 13,
        fontWeight: FONT_TITLE_WEIGHT,
        color: "#E30B5C", // Rosa Choque
    },
    divider: {
        height: 4, // Divisor mais grosso
        backgroundColor: "#F06292", // Rosa Médio
        marginBottom: 15,
    },
    cardDescription: {
        fontSize: 16, 
        lineHeight: 26,
        color: "#212121", 
        textAlign: "left", 
        fontWeight: "500", 
        marginBottom: 15,
    },
    readMoreButton: {
        alignSelf: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 0, 
    },
    readMoreText: {
        color: '#C2185B', // Rosa Escuro para ação
        fontWeight: FONT_TITLE_WEIGHT, // Bem destacado
        fontSize: 16,
        letterSpacing: 1,
    },
    footer: {
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,
    },
    footerText: {
        color: "#E30B5C", // Rosa Choque
        fontSize: 16,
        fontWeight: FONT_TITLE_WEIGHT,
        letterSpacing: 2,
    }
});