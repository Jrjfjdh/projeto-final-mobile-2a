import { StyleSheet, Text, View, Image, StatusBar } from "react-native";

// Paleta de cores inspirada no Cartoon Network
const CN_COLORS = {
  PRIMARY_BLUE: "#00B0FF", // Azul vibrante, comum em muitas eras do CN
  SECONDARY_PURPLE: "#8E24AA", // Roxo para contraste e energia
  ACCENT_YELLOW: "#FFD700", // Amarelo para destaques
  TEXT_DARK: "#212121", // Quase preto para textos principais
  TEXT_LIGHT: "#FFFFFF", // Branco para contrastar
  CARD_BACKGROUND: "#FFFFFF", // Cartão claro para leitura
  SHADOW_COLOR: "#424242", // Sombra suave para profundidade
};

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Configuração da barra de status */}
      <StatusBar barStyle="light-content" backgroundColor={CN_COLORS.PRIMARY_BLUE} />

      {/* Imagem do logo do CN */}
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Cartoon_Network_logo.svg/1280px-Cartoon_Network_logo.svg.png",
        }}
      />

      {/* Cartão de Conteúdo Estilizado e Moderno */}
      <View style={styles.card}>
        <Text style={styles.title}>BEM-VINDO(A)!</Text>
        <Text style={styles.subtitle}>
          Pré-requisito para a disciplina de DDM
        </Text>
      </View>

      {/* Rodapé com cor de contraste e estilo divertido */}
      <Text style={styles.footer}>Desenvolvido por Gabriel Neves © 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // Gradiente simulado com cores vibrantes do CN
    backgroundColor: CN_COLORS.PRIMARY_BLUE, 
    // Uma segunda cor para simular gradiente ou transição
    // Poderia ser feito com 'LinearGradient' se fosse adicionada a dependência
    // Para este exemplo, manteremos uma cor principal sólida e usaremos a sombra para profundidade
    padding: 20,
  },

  logo: {
    width: 280, // Aumentei um pouco o tamanho do logo
    height: 140,
    resizeMode: "contain",
    marginBottom: 40, // Mais espaço abaixo do logo
  },

  card: {
    backgroundColor: CN_COLORS.CARD_BACKGROUND,
    borderRadius: 25, // Bordas mais arredondadas para um visual suave
    paddingVertical: 50, // Mais padding vertical
    paddingHorizontal: 30, // Mais padding horizontal
    width: "90%",
    alignItems: "center",
    
    // Sombra mais proeminente e colorida para um visual "pop"
    shadowColor: CN_COLORS.SECONDARY_PURPLE, // Sombra com cor secundária
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 8 }, // Sombra mais para baixo
    shadowRadius: 15, // Sombra mais espalhada
    elevation: 12, // Elevação maior para Android
    
    // Adicionar uma borda colorida para um toque extra
    borderWidth: 4,
    borderColor: CN_COLORS.ACCENT_YELLOW, // Borda amarela vibrante
  },

  title: {
    fontSize: 48, // Título maior
    fontWeight: "900", // Mais negrito para impacto
    color: CN_COLORS.TEXT_DARK, // Cor de texto principal para o título
    marginBottom: 15,
    textAlign: "center",
    // Poderia usar fontFamily customizada aqui, se disponível
  },

  subtitle: {
    fontSize: 24, // Subtítulo maior
    color: CN_COLORS.TEXT_DARK, 
    textAlign: "center",
    fontWeight: '600', // Um pouco mais negrito que o padrão
    lineHeight: 32, // Espaçamento de linha para melhor leitura
  },

  footer: {
    marginTop: 50, // Mais espaço antes do rodapé
    fontSize: 18, // Rodapé ligeiramente maior
    color: CN_COLORS.TEXT_LIGHT, // Rodapé em branco para contrastar com o fundo azul
    textAlign: "center",
    fontWeight: 'bold', // Rodapé em negrito
    letterSpacing: 0.5, // Pequeno espaçamento entre letras
  },
});