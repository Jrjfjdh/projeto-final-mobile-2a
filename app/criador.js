import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Criador() {
  return (
    // Removendo o padding extra e simplificando o fundo
    <ScrollView contentContainerStyle={styles.container}>
      {/* Removendo a rotação e suavizando a sombra do cartão */}
      <View style={styles.card}>
        <Text style={styles.title}>Quem Criou o Cartoon Network?</Text>

        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png",
          }}
        />

        <Text style={styles.subtitle}>Visão Geral</Text>
        <Text style={styles.text}>
          O canal foi lançado em{" "}
          <Text style={styles.highlightText}>1º de outubro de 1992</Text> pela
          empresa <Text style={styles.highlightText}>Turner Broadcasting System</Text>.
        </Text>

        <Text style={styles.text}>
          O fundador dessa empresa e a mente por trás da ideia é o empresário
          norte-americano <Text style={styles.highlightText}>Ted Turner</Text>.
        </Text>

        <Text style={styles.subtitle}>Ted Turner</Text>
        <Text style={styles.text}>
          • Nome Completo: Robert Edward "Ted" Turner III
        </Text>
        <Text style={styles.text}>
          • Nascimento: <Text style={styles.highlightText}>1938</Text>
        </Text>
        <Text style={styles.text}>• Posição: Empresário e Magnata da Mídia</Text>
        <Text style={styles.text}>
          • Outra Fundação: Também fundou a <Text style={styles.highlightText}>CNN</Text> (o primeiro canal de notícias 24h do mundo).
        </Text>

        <Text style={styles.subtitle}>Como Surgiu a Ideia?</Text>
        <Text style={styles.text}>
          Turner havia comprado diversos catálogos de animação, incluindo os
          lendários da <Text style={styles.highlightText}>Hanna-Barbera</Text>.
        </Text>
        <Text style={styles.text}>
          Isso incluía clássicos como{" "}
          <Text style={styles.highlightText}>Os Flintstones</Text>,{" "}
          <Text style={styles.highlightText}>Os Jetsons</Text> e{" "}
          <Text style={styles.highlightText}>Scooby-Doo</Text>.
        </Text>
        <Text style={styles.text}>
          Para aproveitar esse enorme acervo, ele criou um canal totalmente
          dedicado a animações.
        </Text>

        <Text style={styles.subtitle}>Desenvolvimento do Canal</Text>
        <Text style={styles.text}>
          A Hanna-Barbera continuou produzindo conteúdo original para o Cartoon
          Network.
        </Text>
        <Text style={styles.text}>
          Em 1996, a Turner Broadcasting foi adquirida pela Time Warner, mas Ted
          Turner permanece como o responsável por tornar o Cartoon Network uma
          realidade.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F4D03F", // Amarelo Laranja Suave
  },

  card: {
    backgroundColor: "#FFFFFF", // Branco Limpo
    borderRadius: 15, // Bordas mais suaves
    padding: 25,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3, // Sombra suave
    shadowOffset: { width: 0, height: 4 }, // Sombra reta
    shadowRadius: 8,
    borderWidth: 4,
    borderColor: "#4A235A", // Roxo Escuro/Índigo
  },

  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#E74C3C", // Vermelho Cinderela
    // Removendo a rotação
  },

  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#D35400", // Laranja/Marrom Intenso
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FAD7A0", // Sombra Suave
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontFamily: "Comic Sans MS", // Fonte Cartoon (se suportada)
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 10,
    color: "#1ABC9C", // Verde Água/Menta
    // Removendo sombras fortes no subtítulo
    fontFamily: "Comic Sans MS", // Fonte Cartoon (se suportada)
    borderBottomWidth: 2, // Linha divisória para organização
    borderBottomColor: "#1ABC9C",
    paddingBottom: 5,
  },

  text: {
    fontSize: 17,
    lineHeight: 25,
    color: "#2C3E50", // Azul Petróleo Escuro (para boa leitura)
    marginBottom: 8,
    fontFamily: "Comic Sans MS", // Fonte Cartoon (se suportada)
  },
  highlightText: {
    fontWeight: "bold",
    color: "#E74C3C", // Vermelho Cinderela
    fontSize: 18,
    fontFamily: "Comic Sans MS", // Fonte Cartoon (se suportada)
  },
});