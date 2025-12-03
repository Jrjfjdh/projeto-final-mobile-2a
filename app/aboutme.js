import { StyleSheet, Text, View, Image } from "react-native";

const localImageSource = require('../assets/eu.png'); 

export default function SobreMimGabriel() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Image
          source={localImageSource} 
          style={styles.avatar}
        />
        <Text style={styles.title}>
          GABRIEL MÜLLER FERREIRA NEVES 
        </Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>
            IDADE: 18 anos
          </Text>
          <Text style={styles.detailText}>
            TURMA: 2° Info A
          </Text>
          <Text style={styles.detailText}>
            CURSO: Informática
          </Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF00FF", // Magenta Elétrico
    justifyContent: "center",
    alignItems: "center",
    padding: 20, 
  },
  card: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 30, 
    padding: 25,
    alignItems: "center",
    borderWidth: 6, 
    borderColor: "#00FFFF", // Ciano Neon
    // Sombra "chapada"
    shadowColor: "#FFFF00", // Amarelo Neon
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 15,
    maxWidth: 380, 
    width: '100%',
  },
  avatar: {
    // AJUSTE: MUDANÇA AQUI! De -60 para -35.
    // Isso fará a imagem "saltar" menos para fora do cartão, ficando mais baixa.
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8, 
    borderColor: "#FF4500", // Laranja Vibrante
    marginBottom: 25,
    marginTop: -35, // A imagem sobe menos (fica mais baixa no cartão)
    backgroundColor: "#00FFFF", 
  },
  title: {
    fontSize: 26, 
    fontWeight: "900",
    color: "#FF00FF", 
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "#FFFF00", 
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 0,
    letterSpacing: 0.5,
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: "#F0F0F0", 
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: "#FF4500", 
  },
  detailText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
    lineHeight: 30, 
  },
  speechBubble: {
    backgroundColor: "#10e762ff", 
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 15,
    borderWidth: 4,
    borderColor: "#FFFF00", 
  },
  bubbleText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  actionButton: {
    backgroundColor: "#FF4500", 
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 25,
    borderWidth: 4,
    borderColor: "#00FFFF", 
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