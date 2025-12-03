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
    mainTitle: "O Visionário Por Trás da CN e CNN",
    subtitle: "Ted Turner: Do Outdoor à Mídia Global",
    badge: "MAGNATA EMPRESARIAL",
    cardTitle1: "Perfil e Origens",
    cardTitle2: "A Ousadia na Televisão",
    cardTitle3: "A Criação da Cartoon Network",
    cardTitle4: "Legado e Inovações",
    cardTitle5: "Curiosidades sobre Ted Turner", 
    year: "1992"
};

export default function CreatorScreen() {
    
    const renderHighlight = (text) => (
        <Text style={styles.highlightText}>{text}</Text>
    );

    const renderImage = () => (
        <Image
            source={localImage} 
            style={styles.cardImage} 
            accessibilityLabel="Foto de Robert Edward 'Ted' Turner III"
        />
    );

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

                <View style={[
                    styles.card,
                    Platform.OS === 'web' && { boxShadow: `4px 6px 10px ${NEW_PALETTE.CARD_SHADOW}` }
                ]}>
                    {renderImage()}
                    <View style={styles.cardContent}>
                        <View style={styles.cardHeaderRow}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.cardTitle}>{articleData.cardTitle1}</Text>
                            </View>
                            <View style={styles.yearBadge}>
                                <Text style={styles.yearText}>Nascimento em {articleData.year}</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            • Nome Completo: Robert Edward "Ted" Turner III
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Nascimento: {renderHighlight('19 de Novembro de 1938')} (Cincinnati, Ohio)
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Posição: Empresário, Magnata da Mídia e Filantropo.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Nascido em Ohio, Ted cresceu na Geórgia em uma família de negócios de outdoors. Aos 24 anos, após a perda do pai, {renderHighlight('ele herdou a empresa familiar')}, assumindo o desafio de administrá-la.
                        </Text>

                        <Text style={styles.cardTitle}>{articleData.cardTitle2}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            Nos anos 60, Ted expandiu a empresa para o ramo da televisão. Em {renderHighlight('1970')}, fundou a {renderHighlight('Turner Broadcasting System (TBS)')}, transformando estações locais em redes nacionais.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Sua maior ousadia veio em {renderHighlight('1980')} com a fundação da {renderHighlight('CNN (Cable News Network)')}, o primeiro canal de notícias 24 horas do mundo, revolucionando a indústria.
                        </Text>

                        <Text style={styles.cardTitle}>{articleData.cardTitle3}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            Visando um vasto acervo de conteúdo, Ted investiu em catálogos de animações. Em {renderHighlight('1991')}, ele adquiriu a lendária {renderHighlight('Hanna-Barbera')}, obtendo acesso a clássicos como 'Tom & Jerry' e 'Scooby-Doo'.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Com este tesouro de desenhos em mãos, a ideia de um canal 24h dedicado apenas à animação se concretizou: a Cartoon Network nasceu em {renderHighlight('1º de Outubro de 1992')}.
                        </Text>

                        <Text style={styles.cardTitle}>{articleData.cardTitle4}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            A CN rapidamente se destacou ao misturar clássicos do acervo com novas {renderHighlight('séries originais')} icônicas, como 'Dexter’s Laboratory' e 'As Meninas Superpoderosas', estabelecendo um novo padrão global para a animação televisiva.
                        </Text>
                        <Text style={styles.cardDescription}>
                            Seu legado abrange mídia (CNN, TNT, TBS, CN), esportes (Atlanta Braves) e filantropia, incluindo uma famosa doação de {renderHighlight('US$ 1 bilhão para as Nações Unidas')}.
                        </Text>

                        <Text style={styles.cardTitle}>{articleData.cardTitle5}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.cardDescription}>
                            • É conhecido como {renderHighlight('“Mouth of the South”')} por falar o que pensa sem medo.
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Já foi dono de times esportivos, incluindo o {renderHighlight('Atlanta Braves')} (beisebol) e o {renderHighlight('Atlanta Hawks')} (basquete).
                        </Text>
                        <Text style={styles.cardDescription}>
                            • Doou {renderHighlight('US$ 1 bilhão para a ONU')} e para causas ambientais, sendo um dos maiores filantropos da história moderna.
                        </Text>

                        <View style={styles.footer}>
                            <Text style={styles.footerText}>FIM DO ARTIGO: LEGADO TURNER</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    webContainerWrapper: {
        height: '100vh', 
        backgroundColor: NEW_PALETTE.BACKGROUND, 
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'auto', 
    },
    mainContainer: {
        flex: 1,
        backgroundColor: NEW_PALETTE.BACKGROUND, 
        paddingTop: Platform.OS === 'android' ? 25 : 0, 
        maxWidth: Platform.OS === 'web' ? 850 : null, 
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
        textShadowColor: NEW_PALETTE.PRIMARY_ACCENT, 
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
    card: {
        backgroundColor: NEW_PALETTE.CARD_BG,
        borderRadius: 16,
        marginBottom: 20,
        shadowColor: NEW_PALETTE.CARD_SHADOW, 
        shadowOpacity: 0.8,
        shadowOffset: { width: 4, height: 6 },
        shadowRadius: 10,
        elevation: 10,
        overflow: "hidden",
        borderWidth: 5,
        borderColor: NEW_PALETTE.SECONDARY_ACCENT, 
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
        height: 4, 
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
