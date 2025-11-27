import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function Criador() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Quem Criou o Cartoon Network?</Text>

        <Image
          style={styles.image}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png",
          }}
        />

        <Text style={styles.subtitle}>Visão Geral</Text>
        <Text style={styles.text}>
          O canal foi lançado em <Text style={styles.highlight}>1º de outubro de 1992</Text> pela
          empresa <Text style={styles.highlight}>Turner Broadcasting System</Text>.
        </Text>
        <Text style={styles.text}>
          O fundador dessa empresa e a mente por trás da ideia é o empresário
          norte-americano <Text style={styles.highlight}>Ted Turner</Text>.
        </Text>

        <Text style={styles.subtitle}>Ted Turner</Text>
        <Text style={styles.text}>• Nome Completo: Robert Edward "Ted" Turner III</Text>
        <Text style={styles.text}>
          • Nascimento: <Text style={styles.highlight}>1938</Text>
        </Text>
        <Text style={styles.text}>• Posição: Empresário e Magnata da Mídia</Text>
        <Text style={styles.text}>
          • Outra Fundação: Também fundou a <Text style={styles.highlight}>CNN</Text> (o primeiro canal
          de notícias 24h do mundo).
        </Text>

        <Text style={styles.subtitle}>Como Surgiu a Ideia?</Text>
        <Text style={styles.text}>
          Turner havia comprado diversos catálogos de animação, incluindo os lendários da
          <Text style={styles.highlight}> Hanna-Barbera</Text>.
        </Text>
        <Text style={styles.text}>
          Isso incluía clássicos como <Text style={styles.highlight}>Os Flintstones</Text>,
          <Text style={styles.highlight}> Os Jetsons</Text> e
          <Text style={styles.highlight}> Scooby-Doo</Text>.
        </Text>
        <Text style={styles.text}>
          Para aproveitar esse enorme acervo, ele criou um canal totalmente dedicado a animações.
        </Text>

        <Text style={styles.subtitle}>Desenvolvimento do Canal</Text>
        <Text style={styles.text}>
          A Hanna-Barbera continuou produzindo conteúdo original para o Cartoon Network.
        </Text>
        <Text style={styles.text}>
          Em 1996, a Turner Broadcasting foi adquirida pela Time Warner, mas Ted Turner permanece
          como o responsável por tornar o Cartoon Network uma realidade.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F7C948", 
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    borderWidth: 5,
    borderColor: "#1B1B1B"
  },
  image: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
    marginBottom: 30,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "#E63946", // vermelho vibrante cartoon
    backgroundColor: "#FFF",
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#E67E22",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "#FAD390",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 10,
    color: "#16A085",
    borderBottomWidth: 3,
    borderBottomColor: "#16A085",
    paddingBottom: 4,
  },
  text: {
    fontSize: 18,
    lineHeight: 27,
    color: "#2C3E50",
    marginBottom: 10,
    fontWeight: "500",
  },
  highlight: {
    fontWeight: "900",
    color: "#E63946",
    fontSize: 19,
  },
});