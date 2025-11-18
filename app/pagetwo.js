import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function PageTwo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/pt/thumb/5/5f/Adventure_Time_logo.png/800px-Adventure_Time_logo.png",
          }}
        />

        <Text style={styles.title}>Tema Livre</Text>
        <Text style={styles.subtitle}>Hora de Aventura</Text>

        <Text style={styles.text}>
          Em Hora de Aventura, acompanhamos Finn e Jake explorando a Terra de
          Ooo, enfrentando criaturas mágicas, mistérios antigos e personagens
          marcantes. A série mistura humor, emoção e temas profundos de forma
          única.
        </Text>

        <Text style={styles.text}>
          O desenho marcou uma geração por sua liberdade criativa,
          personalidade forte e identidade visual colorida e surrealista.
        </Text>

        <Text style={styles.section}>Por que é importante?</Text>
        <Text style={styles.list}>• Revolucionou o estilo visual dos desenhos</Text>
        <Text style={styles.list}>• Mistura aventura com temas filosóficos</Text>
        <Text style={styles.list}>• Criou um universo gigantesco e consistente</Text>

        <Text style={styles.section}>Curiosidade:</Text>
        <Text style={styles.text}>
          A Terra de Ooo é um planeta pós-apocalíptico após a "Guerra dos
          Cogumelos", revelada ao longo da série.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 60,
    backgroundColor: "#e65fb2",
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
    height: 130,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 26,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
    fontWeight: "bold",
  },

  text: {
    fontSize: 18,
    lineHeight: 26,
    color: "#444",
    marginBottom: 12,
  },

  section: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
    color: "#000",
  },

  list: {
    fontSize: 18,
    marginBottom: 8,
    color: "#333",
  },
});
