import { StyleSheet, Text, View, Image } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      {/* Remover as formas de fundo para um visual mais limpo e reto, mantendo o fundo vibrante */}
      
      <View style={styles.card}>
        <Image
          // Substitua esta linha pela URI da sua imagem ou use 'require("./seu-avatar-reduzido.png")'
          source={{ uri: "https://via.placeholder.com/120/9C27B0/FFFFFF?text=🌟+CRIATIVO!" }}
          style={styles.avatar}
        />
        <Text style={styles.title}>
          💥 BOOM! EU SOU A CRIATIVIDADE! 💥
        </Text>
        <Text style={styles.subtitle}>
          Esta página é uma EXPLOSÃO de ideias e alegria exagerada!
        </Text>
        <View style={styles.speechBubble}>
          <Text style={styles.bubbleText}>
            🎉 MEU MUNDO É COLORIDO E MALUCO! 🎉
          </Text>
        </View>
        <View style={styles.actionButton}>
          <Text style={styles.buttonText}>CLIQUE PARA MAIS DIVERSÃO!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Fundo vibrante, mas sem as formas flutuantes para um look mais reto
    backgroundColor: "#FF00FF", // Magenta Elétrico
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Padding padrão para as bordas da tela
  },
  card: {
    // Cartão principal menor, reto e centralizado
    backgroundColor: "#FFFFFF", // Branco Puro
    borderRadius: 30, // Bordas arredondadas, mas não tão exageradas
    padding: 25,
    alignItems: "center",
    borderWidth: 6, // Borda grossa
    borderColor: "#00FFFF", // Ciano Neon
    // Sombra "chapada" para um efeito cartoon
    shadowColor: "#FFFF00", // Amarelo Neon
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 15,
    maxWidth: 380, // Limita o tamanho máximo para não ser gigante
    width: '100%',
    // Sem inclinação, bem reto!
  },
  avatar: {
    // Imagem menor, centralizada no topo do card
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8, // Borda da imagem ainda grossa e vibrante
    borderColor: "#FF4500", // Laranja Vibrante
    marginBottom: 25,
    marginTop: -60, // Sobe um pouco para um efeito "pop" sem ser exagerado
    backgroundColor: "#9C27B0", // Cor do placeholder
  },
  title: {
    // Título ainda grande e impactante, mas um pouco menor
    fontSize: 34,
    fontWeight: "900",
    color: "#FF00FF", // Magenta Elétrico
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "#FFFF00", // Sombra no texto
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
    letterSpacing: 1,
  },
  subtitle: {
    // Subtítulo em tamanho adequado, claro e legível
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A", // Cinza escuro
    marginBottom: 20,
    textAlign: "center",
  },
  speechBubble: {
    // Balão de fala menor e mais contido, mas ainda cartoon
    backgroundColor: "#10e762ff", // Seu verde original
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 15,
    borderWidth: 4,
    borderColor: "#FFFF00", // Amarelo Neon
    // Sem inclinação, reto!
  },
  bubbleText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  actionButton: {
    // Botão de ação menor, reto e com bom contraste
    backgroundColor: "#FF4500", // Laranja Vibrante
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 25,
    borderWidth: 4,
    borderColor: "#00FFFF", // Ciano Neon
    // Sem inclinação, reto!
    shadowColor: "#FF00FF",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 16,
    textAlign: "center",
    textShadowColor: "#4A4A4A",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
});