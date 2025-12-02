import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

// Paleta de cores inspirada no Cartoon Network (Melhorada para o efeito "Toon")
const CN_COLORS = {
  PRIMARY_BLUE: "#00B0FF", 
  SECONDARY_PURPLE: "#8E24AA", 
  ACCENT_YELLOW: "#FFD700", // Amarelo vibrante - agora será o principal do cartão
  OUTLINE_BLACK: "#000000", // Preto puro para os contornos
  TEXT_DARK: "#212121", 
  TEXT_LIGHT: "#FFFFFF", 
  BRIGHT_WHITE: "#FAFAFA", // Branco brilhante
  BACKGROUND_LIGHT: "#E0F7FA", // Um azul ou ciano bem claro para o fundo
};

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Configuração da barra de status */}
      <StatusBar barStyle="dark-content" backgroundColor={CN_COLORS.BACKGROUND_LIGHT} />

      {/* Imagem do logo do CN - URL Corrigida para PNG/Estável */}
      <Image
        style={styles.logo}
        source={{
          // Nova URL (PNG direto)
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Cartoon_network_modified_logo.PNG/1200px-Cartoon_network_modified_logo.PNG",
        }}
      />

      {/* Cartão de Conteúdo Estilizado com Sombra Toon (Decalque) */}
      {/* View para simular a sombra "decalque" ou "pop" - efeito cartoon */}
      <View style={styles.cardContainer}> 
        <View style={styles.card}>
          <Text style={styles.title}>BEM-VINDO(A)!</Text>
          <Text style={styles.subtitle}>
            Pré-requisito para a disciplina de DDM
          </Text>
        </View>
      </View>

      {/* Faixa de Rodapé com estilo de cenário/cartão */}
      <View style={styles.footerStrip}>
        <Text style={styles.footerText}>Desenvolvido por Gabriel Neves © 2025</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // Fundo simples para destacar o cartão
    backgroundColor: CN_COLORS.BACKGROUND_LIGHT, 
    padding: 20,
    justifyContent: 'space-around', // Distribui melhor os elementos
  },

  logo: {
    width: 300, 
    height: 150,
    resizeMode: "contain",
    marginTop: 20,
    // Efeito de contorno fino no logo (opcional, dependendo da imagem)
  },
    
  // Contêiner que simula uma sombra/decalque 
  cardContainer: {
    // A cor de fundo aqui é a cor da "sombra" ou do "decalque"
    backgroundColor: CN_COLORS.SECONDARY_PURPLE, 
    borderRadius: 30,
    // Cria o efeito de profundidade (3D plano)
    // Deslocamento para mostrar a cor roxa por baixo
    paddingBottom: 8, 
    paddingRight: 8,
    // Garante que o cartão fique dentro
    position: 'relative', 
    width: "95%",
    maxWidth: 400,
  },

  card: {
    // Fundo Amarelo Berrante
    backgroundColor: CN_COLORS.ACCENT_YELLOW,
    borderRadius: 25, 
    paddingVertical: 40, 
    paddingHorizontal: 25, 
    width: "100%", // Ocupa 100% do container com offset
    alignItems: "center",
    // Contorno Preto Grosso ("Toon Outline")
    borderWidth: 6, 
    borderColor: CN_COLORS.OUTLINE_BLACK, 
    
    // Para que o cartão fique na frente do seu "decalque"
    position: 'relative', 
    top: 0,
    left: 0,
  },

  title: {
    fontSize: 40, 
    fontWeight: "900", 
    color: CN_COLORS.TEXT_DARK, 
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: CN_COLORS.BRIGHT_WHITE, // Sombra branca suave para pop
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    letterSpacing: 2, // Espaçamento de letra para um look de título
  },

  subtitle: {
    fontSize: 22, 
    color: CN_COLORS.TEXT_DARK, 
    textAlign: "center",
    fontWeight: '800', 
    lineHeight: 30, 
    // Contorno sutil no texto
    textShadowColor: CN_COLORS.TEXT_LIGHT, 
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    letterSpacing: 0.5,
  },
    
  // Novo estilo para o rodapé como uma faixa
  footerStrip: {
    backgroundColor: CN_COLORS.PRIMARY_BLUE, // Cor vibrante para a faixa
    width: '100%',
    paddingVertical: 15,
    // Contorno Toon no rodapé
    borderTopWidth: 6, 
    borderBottomWidth: 6,
    borderColor: CN_COLORS.OUTLINE_BLACK, 
    alignItems: 'center',
    marginBottom: -20, // Puxa para baixo, dependendo de como o justifyContent funciona
  },

  footerText: {
    fontSize: 16, 
    color: CN_COLORS.TEXT_LIGHT, 
    textAlign: "center",
    fontWeight: '900', 
    letterSpacing: 1,
    // Efeito de sombra no texto
    textShadowColor: CN_COLORS.OUTLINE_BLACK,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0,
  },
});