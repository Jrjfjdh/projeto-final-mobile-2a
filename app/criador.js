import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';

const localImage = require('../assets/ted.jpg'); 

const NEW_PALETTE = {
    BACKGROUND: "#FFCA28",        
    PRIMARY_ACCENT: "#FF7043",    
    SECONDARY_ACCENT: "#8E24AA",  
    CARD_SHADOW: "#26C6DA",       
    CARD_BG: "#FFFFFF",           
    TEXT_COLOR: "#424242",        
    HIGHLIGHT_BG: "#FFEE58",      
};

const articleData = {
    mainTitle: "O Magnata por Trás da CNN e CN",
    subtitle: "Ted Turner: De Atlanta para o Mundo",
    badge: "LEGADO DA MÍDIA",
    cardTitle1: "Visão Geral do Canal",
    cardTitle2: "Perfil de Ted Turner",
    cardTitle3: "A Criação do Acervo de Desenhos",
    cardTitle4: "Filantropia e Outras Conquistas",
    year: "1992"
};

export default function CreatorScreen() {
        const renderHighlight = (text) => (
        <Text style={styles.highlightText}>{text}</Text>
    );

    const renderImage = () => {
        return (
            <Image
                source={localImage} 
                style={styles.cardImage} 
                accessibilityLabel="Foto de Robert Edward 'Ted' Turner III"
            />
        );
    };

    const containerStyle = [
        styles.mainContainer,
        Platform.OS === 'web' && styles.webContainerWrapper,
    ];
    
    return (
        <SafeAreaView style={containerStyle}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                <View style={styles.headerContainer}>
                    <View style={styles.headerBadge}>
                        <Text style={styles.headerBadgeText}>{articleData.badge}</Text>
                    </View>

                    <Text style={styles.mainTitle}>{articleData.mainTitle}</Text>
                    
                    <Text style={styles.subHeader}>{articleData.subtitle}</Text>
                </View>

                Card do Artigo
                <View style={[
                    styles.card,
                    // Aplica box-shadow na Web 
                    Platform.OS === 'web' && { boxShadow: `4px 6px 10px ${NEW_PALETTE.CARD_SHADOW}` }
                ]}>
                    
                    {renderImage()}

                    <View style={styles.cardContent}>

                        <View style={styles.cardHeaderRow}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.cardTitle}>{articleData.cardTitle1}</Text>
                            </View>
                            <View style={styles.yearBadge}>
                                <Text style={styles.yearText}>Lançado em {articleData.year}</Text>
                            </View>
                        </View>

                        <View style={styles.divider} />

                        <Text style={styles.cardDescription}>
                            O Cartoon Network, lançado em {renderHighlight('1º de outubro de 1992')}, foi um marco na televisão a cabo. Ele foi fundado pela
                            empresa {renderHighlight('Turner Broadcasting System')}, liderada por Ted Turner.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Seu objetivo era fornecer uma programação 24 horas por dia, 7 dias por semana, 
                            dedicada exclusivamente à animação, aproveitando a vasta biblioteca de desenhos que Turner havia adquirido.
                        </Text>

                        <Text style={styles.cardTitle}>{articleData.cardTitle2}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            • Nome Completo: Robert Edward "Ted" Turner III
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Nascimento: {renderHighlight('19 de Novembro de 1938')} (Cincinatti, Ohio)
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Posição: Empresário, Magnata da Mídia e Filantropo.
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Foco: Conhecido por sua abordagem agressiva e visão de futuro, que transformou a indústria de notícias e entretenimento.
                        </Text>

                        <Text style={styles.cardTitle}>{articleData.cardTitle3}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            A chave para o CN foi a aquisição em 1991 do estúdio {renderHighlight('Hanna-Barbera')}, o que deu a Turner acesso a um tesouro de animações clássicas.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Este acervo incluía mais de 8.500 horas de conteúdo de bibliotecas da {renderHighlight('MGM')}, 
                            {renderHighlight('Warner Bros. (pré-1948)')} e, claro, as criações da Hanna-Barbera como 'Os Flintstones', 'Os Jetsons' e 'Scooby-Doo'.
                        </Text>

                        {/* --- Seção Legado e Outras Conquistas --- */}
                        <Text style={styles.cardTitle}>{articleData.cardTitle4}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            Além do Cartoon Network, o maior legado de Ted Turner é a fundação da {renderHighlight('CNN (Cable News Network')} em 1980, o primeiro canal de notícias 24h do mundo.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Como filantropo, ele é famoso por sua doação de {renderHighlight('US$ 1 bilhão para as Nações Unidas')} e por ter fundado a 'United Nations Foundation'.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Turner também é um velejador premiado, tendo vencido a prestigiosa 'America's Cup' em {renderHighlight('1977')}.
                        </Text>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>FIM DO ARTIGO</Text>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    webContainerWrapper: {
        // Garante altura boa e centraliza o app vertical e horizontalmente
        height: '100vh', 
        backgroundColor: '#FFD700', 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'auto', // Permite scroll se o conteúdo for maior que a tela
    },

    mainContainer: {
        flex: 1,
        backgroundColor: NEW_PALETTE.BACKGROUND, 
        paddingTop: Platform.OS === 'android' ? 25 : 0, 
        
        // Limita a largura do app na Web
        maxWidth: Platform.OS === 'web' ? 700 : null,
        // Centraliza horizontalmente e dá respiro vertical na Web
        marginHorizontal: Platform.OS === 'web' ? 'auto' : 0,
        marginVertical: Platform.OS === 'web' ? 20 : 0,
    },
    
    
    scrollContent: {
        padding: 15,
        paddingBottom: 60,
    },
    headerContainer: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 15,
    },
    headerBadge: {
        backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, 
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 3,
        borderColor: NEW_PALETTE.SECONDARY_ACCENT, 
    },
    headerBadgeText: {
        color: NEW_PALETTE.CARD_BG, 
        fontSize: 12,
        fontWeight: "900",
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    mainTitle: {
        fontSize: 38,
        fontWeight: "900",
        color: NEW_PALETTE.SECONDARY_ACCENT, 
        textAlign: 'center',
        marginBottom: 4,
        textShadowColor: NEW_PALETTE.PRIMARY_ACCENT, // faz Sombra
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 0.1,
        letterSpacing: 1.5,
    },
    subHeader: {
        fontSize: 20,
        color: NEW_PALETTE.TEXT_COLOR, 
        fontWeight: "800",
        textShadowColor: 'rgba(255, 255, 255, 0.4)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    
    // Estilos do Card
    card: {
        backgroundColor: NEW_PALETTE.CARD_BG,
        borderRadius: 16,
        marginBottom: 20,
        // Sombras nativas (iOS/Android)
        shadowColor: NEW_PALETTE.CARD_SHADOW, // #26C6DA (Ciano Brilhante)
        shadowOpacity: 0.8,
        shadowOffset: { width: 4, height: 6 },
        shadowRadius: 10,
        elevation: 10,
        // A sombra CSS para Web é adicionada condicionalmente no componente
        
        overflow: "hidden",
        borderWidth: 5,
        borderColor: NEW_PALETTE.SECONDARY_ACCENT, // #8E24AA (Roxo Forte)
    },
    cardImage: {
        width: "100%",
        height: 160,
        resizeMode: 'cover', 
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
        fontSize: 22,
        fontWeight: "900",
        color: NEW_PALETTE.SECONDARY_ACCENT, 
        marginBottom: 5,
        letterSpacing: 0.5,
    },
    yearBadge: {
        backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, 
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 10, 
        borderWidth: 2,
        borderColor: NEW_PALETTE.CARD_BG, 
        alignSelf: 'flex-start',
    },
    yearText: {
        fontSize: 13,
        fontWeight: "900",
        color: NEW_PALETTE.CARD_BG, 
    },
    divider: {
        height: 4, // Divisor mais grosso
        backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, 
        marginBottom: 15,
    },
    cardDescription: {
        fontSize: 16,
        lineHeight: 26,
        color: NEW_PALETTE.TEXT_COLOR, 
        textAlign: "justify",
        fontWeight: "500",
        marginBottom: 15,
    },
    highlightText: {
        fontWeight: "900",
        color: NEW_PALETTE.SECONDARY_ACCENT, 
        backgroundColor: NEW_PALETTE.HIGHLIGHT_BG, 
        paddingHorizontal: 5,
        borderRadius: 6,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    footer: {
        alignItems: "center",
        marginTop: 15,
        marginBottom: 20,
    },
    footerText: {
        color: NEW_PALETTE.SECONDARY_ACCENT, 
        fontSize: 14,
        fontWeight: "900",
        letterSpacing: 1.5,
    }
});