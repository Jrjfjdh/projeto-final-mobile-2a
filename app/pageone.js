import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function PageOne() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png",
          }}
        />

        <Text style={styles.title}>Tema Obrigatório</Text>

        <Text style={styles.subtitle}>
          A evolução da televisão nos tempos modernos
        </Text>

        <Text style={styles.text}>
          Nesta parte, vamos explorar como a televisão evoluiu ao longo dos
          anos, passando de transmissões analógicas simples para plataformas
          digitais, streaming e conteúdos interativos.
        </Text>

        <Text style={styles.text}>
          O Cartoon Network teve papel importante nessa evolução, trazendo
          desenhos com identidade visual marcante, humor único e estilos que
          influenciaram uma geração inteira.
        </Text>

        <Text style={styles.text}>
          Com a chegada da TV moderna, os conteúdos ficaram mais acessíveis,
          interativos e disponíveis em várias plataformas além da TV tradicional,
          como celulares, tablets e computadores.
        </Text>

        <Text style={styles.section}>Pontos principais:</Text>
        <Text style={styles.list}>• Televisão analógica → digital</Text>
        <Text style={styles.list}>• Streaming e on-demand</Text>
        <Text style={styles.list}>• Desenhos com identidade própria</Text>
        <Text style={styles.list}>• Expansão para múltiplas telas</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 60,
    backgroundColor: "#0a65af",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 6,
  },

  banner: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 22,
  },

  text: {
    fontSize: 18,
    lineHeight: 26,
    color: "#444",
    marginBottom: 15,
  },

  section: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
  },

  list: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
});
