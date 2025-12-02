import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView, Platform } from 'react-native';

/**
 * Tela do artigo sobre o criador do Cartoon Network.
 * Paleta de cores atualizada para um tema "Pop/Gummy" (Chamativo e Infantil).
 */

// NOVA PALETA DE CORES (Pop/Gummy: Laranja, Amarelo, Roxo e Ciano)
const NEW_PALETTE = {
  BACKGROUND: "#FFCA28",        // Amarelo Dourado Claro - Fundo vibrante e alegre
  PRIMARY_ACCENT: "#FF7043",    // Laranja Vibrante - Títulos, Botões e Destaques Principais
  SECONDARY_ACCENT: "#8E24AA",  // Roxo Profundo/Forte - Divisores, Borda do Card e Badges
  CARD_SHADOW: "#26C6DA",       // Ciano Brilhante - Sombra para contraste pop
  CARD_BG: "#FFFFFF",           // Branco
  TEXT_COLOR: "#424242",        // Cinza Escuro Suave
  HIGHLIGHT_BG: "#FFEE58",      // Amarelo Limão Claro - Fundo de Destaque
};

const articleData = {
  mainTitle: "O Magnata por Trás da CNN e CN",
  subtitle: "Ted Turner: De Atlanta para o Mundo",
  badge: "LEGADO DA MÍDIA",
  imageUrl: "https://placehold.co/600x160/8E24AA/FFFFFF?text=TED+TURNER+VISIONÁRIO", 
  cardTitle1: "Visão Geral do Canal",
  cardTitle2: "Perfil de Ted Turner",
  cardTitle3: "A Criação do Acervo de Desenhos",
  cardTitle4: "Filantropia e Outras Conquistas",
  year: "1992"
};

export default function CreatorScreen() {
  
  // Função para renderizar o texto com destaque (highlight)
  const renderHighlight = (text) => (
    <Text style={styles.highlightText}>{text}</Text>
  );

  // A função renderiza a imagem ou o placeholder
  const renderImage = () => {
    return (
      <View style={[styles.placeholderImage, { backgroundColor: NEW_PALETTE.SECONDARY_ACCENT }]}>
        <Text style={{ textAlign: 'center', color: NEW_PALETTE.CARD_BG, fontWeight: 'bold', fontSize: 18, marginTop: 70 }}>
          {articleData.imageUrl.split('?text=')[1].replace('+', ' ')}
        </Text>
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Cabeçalho Principal (headerContainer) */}
        <View style={styles.headerContainer}>
          {/* Badge (headerBadge) */}
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>{articleData.badge}</Text>
          </View>

          {/* Título Principal (mainTitle) */}
          <Text style={styles.mainTitle}>{articleData.mainTitle}</Text>
          
          {/* Sub-cabeçalho (subHeader) */}
          <Text style={styles.subHeader}>{articleData.subtitle}</Text>
        </View>

        {/* --- Card do Artigo --- */}
        <View style={styles.card}>
          
          {/* Imagem/Placeholder (cardImage/placeholderImage) */}
          {renderImage()}

          <View style={styles.cardContent}>

            {/* Linha do Título do Card e Ano */}
            <View style={styles.cardHeaderRow}>
              <View style={styles.titleWrapper}>
                <Text style={styles.cardTitle}>{articleData.cardTitle1}</Text>
              </View>
              {/* Badge do Ano (yearBadge) */}
              <View style={styles.yearBadge}>
                <Text style={styles.yearText}>Lançado em {articleData.year}</Text>
              </View>
            </View>

            {/* Divisor (divider) */}
            <View style={styles.divider} />

            {/* Visão Geral */}
            <Text style={styles.cardDescription}>
              O Cartoon Network, lançado em {renderHighlight('1º de outubro de 1992')}, foi um marco na televisão a cabo. Ele foi fundado pela
              empresa {renderHighlight('Turner Broadcasting System')}, liderada por Ted Turner.
            </Text>
            <Text style={styles.cardDescription}>
              Seu objetivo era fornecer uma programação 24 horas por dia, 7 dias por semana, 
              dedicada exclusivamente à animação, aproveitando a vasta biblioteca de desenhos que Turner havia adquirido.
            </Text>

            {/* --- Seção Perfil de Ted Turner --- */}
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

            {/* --- Seção A Criação do Acervo de Desenhos --- */}
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

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// O objeto de estilos foi adaptado com a nova paleta de cores (Laranja, Amarelo, Roxo e Ciano).
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: NEW_PALETTE.BACKGROUND, // #FFCA28 (Amarelo Dourado Claro)
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
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
    backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, // #FF7043 (Laranja Vibrante)
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: NEW_PALETTE.SECONDARY_ACCENT, // Borda Roxo
  },
  headerBadgeText: {
    color: NEW_PALETTE.CARD_BG, // Texto Branco para alto contraste
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  mainTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: NEW_PALETTE.SECONDARY_ACCENT, // #8E24AA (Roxo Forte)
    textAlign: 'center',
    marginBottom: 4,
    textShadowColor: NEW_PALETTE.PRIMARY_ACCENT, // Sombra Laranja
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0.1,
    letterSpacing: 1.5,
  },
  subHeader: {
    fontSize: 20,
    color: NEW_PALETTE.TEXT_COLOR, // Cinza Escuro Suave
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
    shadowColor: NEW_PALETTE.CARD_SHADOW, // #26C6DA (Ciano Brilhante)
    shadowOpacity: 0.8,
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 10,
    elevation: 10,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: NEW_PALETTE.SECONDARY_ACCENT, // #8E24AA (Roxo Forte)
  },
  placeholderImage: {
    width: "100%",
    height: 160,
    // Cor de fundo do placeholder definida inline com SECONDARY_ACCENT
    justifyContent: 'center',
    alignItems: 'center',
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
    color: NEW_PALETTE.SECONDARY_ACCENT, // #8E24AA (Roxo Forte)
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  yearBadge: {
    backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, // #FF7043 (Laranja Vibrante)
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10, // Borda mais arredondada
    borderWidth: 2,
    borderColor: NEW_PALETTE.CARD_BG, // Borda Branca
    alignSelf: 'flex-start',
  },
  yearText: {
    fontSize: 13,
    fontWeight: "900",
    color: NEW_PALETTE.CARD_BG, // Texto Branco
  },
  divider: {
    height: 4, // Divisor mais grosso
    backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, // #FF7043 (Laranja Vibrante)
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 26,
    color: NEW_PALETTE.TEXT_COLOR, // #424242 (Cinza Escuro Suave)
    textAlign: "justify",
    fontWeight: "500",
    marginBottom: 15,
  },
  // Estilo para o Destaque (Highlight) dentro do texto
  highlightText: {
    fontWeight: "900",
    color: NEW_PALETTE.SECONDARY_ACCENT, // #8E24AA (Roxo Forte)
    backgroundColor: NEW_PALETTE.HIGHLIGHT_BG, // #FFEE58 (Amarelo Limão Claro)
    paddingHorizontal: 5,
    borderRadius: 6,
    // Efeito de "pop"
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  // Estilos do Botão "Ler Mais"
  readMoreButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: NEW_PALETTE.PRIMARY_ACCENT, // Laranja
    borderRadius: 10,
    marginTop: 15,
    borderWidth: 3,
    borderColor: NEW_PALETTE.SECONDARY_ACCENT, // Roxo
  },
  readMoreText: {
    color: NEW_PALETTE.CARD_BG, // Branco
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  footer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  footerText: {
    color: NEW_PALETTE.SECONDARY_ACCENT, // #8E24AA (Roxo Forte)
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1.5,
  }
});