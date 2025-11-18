import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function AboutMe() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png",
          }}
        />

        <Text style={styles.title}>Sobre Mim</Text>

        <Text style={styles.text}>
          Olá! Meu nome é Gabriel e este app foi desenvolvido como parte do meu
          projeto escolar sobre Cartoon Network e a televisão moderna.
        </Text>

        <Text style={styles.text}>
          Aqui você encontra curiosidades, evolução dos desenhos, vídeos,
          aberturas clássicas e muito mais. Um mergulho na nostalgia com um
          toque atual!
        </Text>

        <Text style={styles.subtitle}>Habilidades</Text>
        <Text style={styles.text}>• Desenvolvimento mobile</Text>
        <Text style={styles.text}>• Criatividade e design</Text>
        <Text style={styles.text}>• Paixão por desenhos animados</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 60,
    backgroundColor: "#f0f0f0",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },

  image: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#111",
  },

  text: {
    fontSize: 20,
    lineHeight: 28,
    color: "#333",
    marginBottom: 10,
  },
});
