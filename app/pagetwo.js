import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Variáveis de peso de fonte para uso nos estilos
const FONT_TITLE_WEIGHT = '900';
const FONT_SUBTITLE_WEIGHT = '700';

// --- 1. ESTRUTURA DE DADOS (ERAS E DESENHOS CN) ---
// Mantendo a estrutura original com objetos complexos (detail, simple)
const CARTOON_NETWORK_ERAS = [
    {
        era: "ERA BLOCK / PRÉ-CHECKERBOARD",
        years: "1992–1996",
        color: "#9C27B0", // Roxo
        description: "Início do canal; vivia de reprises; não tinha muitos originais ainda.",
        content: [
            { type: "title", text: "Desenhos Clássicos em Reprise" },
            { type: "simple", items: [
                "Looney Tunes", "Merrie Melodies", "Tom & Jerry", "Os Flintstones", 
                "Scooby-Doo (reprises)", "Thundercats", "He-Man",
            ]}
        ],
    },
    {
        era: "ERA CHECKERBOARD",
        years: "1996–2004",
        color: "#1B9C46", // Verde Checkerboard
        description: "Nascimento dos Cartoon Cartoons; explosão de originais como Dexter, Meninas Superpoderosas, Johnny Bravo e Coragem.",
        content: [
            { type: "title", text: "Desenhos Originais Principais" },
            {
                type: "detail",
                title: "O Laboratório de Dexter (1996)",
                sinopse: "Dexter, um menino gênio, tenta constantemente criar novas invenções, enquanto lida com sua irmã Dee Dee.",
                fame: "Um dos primeiros 'Cartoon Cartoons'.",
                curiosity: "Criado por Genndy Tartakovsky.",
            },
            {
                type: "detail",
                title: "As Meninas Superpoderosas (1998)",
                sinopse: "Três meninas super-heroínas usam seus superpoderes para salvar a cidade de Townsville.",
                fame: "Fenômeno de merchandising global.",
                curiosity: "O curta original de 1992 chamava-se 'Whoopass Stew'.",
            },
            { type: "title", text: "Outros Clássicos e Animes Populares" },
            { type: "simple", items: [
                "Johnny Bravo", "Du, Dudu e Edu", "Coragem, o Cão Covarde", 
                "Samurai Jack"
            ]}
        ],
    },
    {
        era: "ERA CHECK IT",
        years: "2010–2016",
        color: "#7B1FA2", // Roxo Vibrante da Era Check It
        description: "Renascimento do canal; identidade vibrante; explosão de hits icônicos: Hora de Aventura, Gumball e Steven Universe.",
        content: [
            { type: "title", text: "Grandes Sucessos da Era Moderna" },
            {
                type: "detail",
                title: "Hora de Aventura (2010)",
                sinopse: "Finn, o humano, e Jake, o cão, exploram a terra pós-apocalíptica e mágica de Ooo.",
                fame: "A série que definiu a nova era do CN.",
                curiosity: "Teve origem como um curta da Nickelodeon, mas foi rejeitada por eles.",
            },
            {
                type: "detail",
                title: "Steven Universe (2013)",
                sinopse: "Steven, um garoto meio-humano/meio-Gem, vive com as Crystal Gems.",
                fame: "Elogiado por sua representação de temas LGBTQ+ e diversidade.",
                curiosity: "Primeira série animada do CN criada exclusivamente por uma mulher, Rebecca Sugar.",
            },
            { type: "simple", items: [
                "O Incrível Mundo de Gumball", "Apenas um Show", "Ursos Sem Curso", 
                "O Segredo Além do Jardim"
            ]}
        ],
    },
];


const CartoonDetail = ({ title, sinopse, fame, curiosity }) => (
    <View style={innerStylesCustom.detailCard}>
        <Text style={innerStylesCustom.detailTitle}>{title}</Text>
        <Text style={innerStylesCustom.detailText}><Text style={{ fontWeight: 'bold' }}>Sinopse:</Text> {sinopse}</Text>
        <Text style={innerStylesCustom.detailText}><Text style={{ fontWeight: 'bold' }}>Curiosidade:</Text> {curiosity}</Text>
    </View>
);

const CartoonListItem = ({ items }) => (
    <View style={innerStylesCustom.listCard}>
        {items.map((item, index) => (
            <Text key={index} style={innerStylesCustom.listItemText}>⭐ {item}</Text>
        ))}
    </View>
);

const EraSectionTitle = ({ text }) => (
    <View style={innerStylesCustom.sectionTitleContainer}>
        <Text style={innerStylesCustom.sectionTitleText}>{text}</Text>
    </View>
);

const CartoonEra = ({ era, years, color, description, content }) => (
    // Usa o estilo de card principal com borda dinâmica
    <View style={[innerStylesCustom.eraContainer, { borderColor: color }]}>
        
        {/* Título e Badge de Ano como se fosse o header do Card */}
        <View style={innerStylesCustom.eraHeaderRow}>
            <Text style={[innerStylesCustom.eraTitle, { color: color }]}>{era}</Text>
            <View style={innerStyles.yearBadge}>
                <Text style={innerStyles.yearText}>{years}</Text>
            </View>
        </View>
        
        <View style={innerStyles.divider} />

        <Text style={innerStylesCustom.eraDescription}>{description}</Text>
        
        {content.map((item, index) => {
            if (item.type === "detail") {
                return <CartoonDetail key={index} {...item} />;
            }
            if (item.type === "simple") {
                return <CartoonListItem key={index} items={item.items} />;
            }
            if (item.type === "title") {
                return <EraSectionTitle key={index} text={item.text} />;
            }
            return null;
        })}
    </View>
);

// --- 3. COMPONENTE PRINCIPAL (Page) ---
export default function Page() {
    return (
        <View style={styles.mainContainer}>
             <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* Cabeçalho - Usa os estilos 'styles' */}
                <View style={styles.headerContainer}>
                    <View style={styles.headerBadge}>
                        <Text style={styles.headerBadgeText}>💖 CN HISTORY 💛</Text>
                    </View>
                    <Text style={styles.mainTitle}>LINHA DO TEMPO DA ANIMAÇÃO</Text>
                    <Text style={styles.subHeader}>DESENHOS E ERAS</Text>
                </View>

                {/* Conteúdo Dinâmico */}
                {CARTOON_NETWORK_ERAS.map((era, index) => (
                    <CartoonEra key={index} {...era} />
                ))}
                
                {/* Footer - Usa o estilo 'innerStyles.footer' */}
                <View style={innerStyles.footer}>
                    <Text style={innerStyles.footerText}>FIM DA ANÁLISE</Text>
                </View>
            </ScrollView>
        </View>
    );
}


// --- 4. ESTILOS FORNECIDOS PELO USUÁRIO (Adaptados e Replicados) ---

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
    // Estilos do Card base (usado como referência)
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
    divider: {
        height: 4, // Divisor mais grosso
        backgroundColor: "#F06292", // Rosa Médio
        marginBottom: 15,
        marginHorizontal: 15,
    },
    yearBadge: {
        backgroundColor: "#FFEB3B", // Amarelo Destaque
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#E30B5C", // Contorno Rosa Choque
        alignSelf: 'flex-start', 
        shadowColor: "#303030",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    yearText: {
        fontSize: 13,
        fontWeight: FONT_TITLE_WEIGHT,
        color: "#E30B5C", // Rosa Choque
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
    // Outros estilos do innerStyles (titleWrapper, cardTitle, etc.) foram movidos e adaptados abaixo para os componentes aninhados.
});

// Estilos CUSTOM para os componentes de lista e detalhe (adaptação do innerStyles)
const innerStylesCustom = StyleSheet.create({
    eraContainer: {
        width: "100%",
        maxWidth: 700,
        marginVertical: 15,
        backgroundColor: "#FFFFFF", // Fundo Branco
        borderRadius: 15,
        borderWidth: 5, // Contorno grosso
        shadowColor: "#E30B5C", 
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 0, 
        elevation: 8,
        overflow: 'hidden',
        paddingBottom: 5, // Para dar espaço no final
    },
    eraHeaderRow: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start",
        padding: 15,
        paddingBottom: 10,
    },
    eraTitle: {
        fontWeight: FONT_TITLE_WEIGHT,
        fontSize: 24,
        flex: 1,
        marginRight: 10,
        // A cor é dinâmica (item.color)
        letterSpacing: 0.5,
    },
    eraDescription: {
        fontWeight: FONT_SUBTITLE_WEIGHT,
        fontSize: 16,
        textAlign: "left",
        marginBottom: 15,
        paddingHorizontal: 15,
        color: "#555",
        lineHeight: 22,
    },
    detailCard: {
        backgroundColor: "#FFF9C4", // 💡 Amarelo Bem Claro
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderLeftWidth: 8,
        borderColor: "#F06292", // 🎀 Rosa Médio na Lateral
        borderWidth: 2,
        borderColor: '#FFECB3', 
    },
    detailTitle: {
        fontWeight: FONT_TITLE_WEIGHT,
        fontSize: 20,
        color: "#C2185B", // 🌹 Rosa Escuro Vibrante
        marginBottom: 5,
    },
    detailText: {
        fontSize: 14,
        lineHeight: 20,
        color: "#333",
        marginBottom: 5,
    },
    listCard: {
        backgroundColor: "#FFEBEE", // 🌸 Rosa Bem Claro
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFD700', // Amarelo Dourado de Contorno
    },
    listItemText: {
        fontSize: 16,
        lineHeight: 24,
        color: "#303030",
        fontWeight: FONT_SUBTITLE_WEIGHT,
    },
    sectionTitleContainer: {
        borderBottomWidth: 3,
        borderBottomColor: '#FF69B4', // Rosa
        marginHorizontal: 15,
        marginBottom: 10,
        paddingBottom: 5,
        alignItems: 'flex-start',
    },
    sectionTitleText: {
        fontWeight: FONT_TITLE_WEIGHT,
        fontSize: 18,
        color: "#C2185B", // Rosa Escuro
    }
});