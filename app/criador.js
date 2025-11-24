import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Criador() {
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Quem Criou o Cartoon Network?</Text>

        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png",
          }}
        />

        <Text style={styles.text}>
          O canal foi lançado em <Text style={styles.highlightText}>1º de outubro de 1992</Text> pela empresa{" "}
          <Text style={styles.highlightText}>Turner Broadcasting System</Text>.
        </Text>
        
        <Text style={styles.text}>
          O fundador dessa empresa e a mente por trás da ideia é o empresário norte-americano{" "}
          <Text style={styles.highlightText}>Ted Turner</Text>!
        </Text>

        <Text style={styles.subtitle}> Ted Turner</Text>
        <Text style={styles.text}>• Nome completo: Robert Edward "Ted" Turner III</Text>
        <Text style={styles.text}>• Nascimento: <Text style={styles.highlightText}>1938</Text></Text>
        <Text style={styles.text}>• Empresário e magnata da mídia</Text>
        <Text style={styles.text}>• Também fundou a <Text style={styles.highlightText}>CNN</Text> (o primeiro canal de notícias 24h do mundo!)</Text>

        <Text style={styles.subtitle}> Como Surgiu a Ideia?</Text>
        <Text style={styles.text}>
          Turner havia comprado diversos catálogos de animação, incluindo os lendários da{" "}
          <Text style={styles.highlightText}>Hanna-Barbera</Text>, que continham clássicos como{" "}
          <Text style={styles.highlightText}>Os Flintstones, Os Jetsons e Scooby-Doo</Text>!
        </Text>
        <Text style={styles.text}>
          Para aproveitar esse enorme acervo, ele criou um canal totalmente dedicado a animações — algo super inovador para a época!
        </Text>

        <Text style={styles.subtitle}> Desenvolvimento</Text>
        <Text style={styles.text}>
          A Hanna-Barbera continuou produzindo conteúdo original de tirar o fôlego para o Cartoon Network.
        </Text>
        <Text style={styles.text}>
          Em 1996, a Turner Broadcasting foi adquirida pela Time Warner, mas Ted Turner ainda é reconhecido como o gênio responsável por tornar o Cartoon Network uma realidade mágica!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#007BFF", // Azul Forte de Fundo (Mais saturado)
  },

  card: {
    backgroundColor: "#FFEB3B", // Amarelo Gema/Vivo para o Cartão
    borderRadius: 30,
    padding: 25,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5, // Sombra mais intensa
    shadowOffset: { width: 6, height: 6 }, // Sombra mais deslocada
    shadowRadius: 12,
    borderWidth: 5,
    borderColor: "#4CAF50", // Borda em Verde Vibrante (Ciano/Esmeralda)
  },

  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 25,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#FF5722", // Borda da imagem em Laranja/Vermelho Intenso
  },

  title: {
    fontSize: 38,
    fontWeight: "900",
    color: "#D32F2F", // Vermelho Escuro/Vivo para o Título
    textAlign: "center",
    marginBottom: 15,
    textShadowColor: "#FFEB3B", // Sombra do Título em Amarelo Gema
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    // fontFamily: "Comic Sans MS", // Mantendo sugestão
  },

  subtitle: {
    fontSize: 28,
    fontWeight: "800",
    marginTop: 25,
    marginBottom: 12,
    color: "#00BCD4", // Ciano/Turquesa Vibrante para Subtítulos
    textShadowColor: "#FFFFFF", // Sombra em Branco
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    // fontFamily: "Comic Sans MS", // Mantendo sugestão
  },

  text: {
    fontSize: 18,
    lineHeight: 26,
    color: "#212121", // Texto Principal em Preto/Cinza Escuro para Alto Contraste
    marginBottom: 10,
    // fontFamily: "Arial Rounded MT Bold"
  },
  highlightText: {
    fontWeight: "bold",
    color: "#E91E63", // Pink/Magenta Vivo para Destaques
    fontSize: 19,
  }
});