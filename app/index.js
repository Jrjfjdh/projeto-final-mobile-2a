import { StyleSheet, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Cartoon_Network_logo.svg/1280px-Cartoon_Network_logo.svg.png",
        }}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>
          Pré-requisito para a disciplina de DDM
        </Text>
      </View>

      <Text style={styles.footer}>Desenvolvido por Gabriel Neves © 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },

  logo: {
    width: 240,
    height: 120,
    resizeMode: "contain",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: "90%",
    alignItems: "center",

    // efeito cartão CN
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 6,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 22,
    color: "#555",
    textAlign: "center",
  },

  footer: {
    marginTop: 40,
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
