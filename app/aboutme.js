import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const profileImageSource = require('../assets/eu.png'); 

const profileData = {
  nome: "GABRIEL MÜLLER FERREIRA NEVES",
  idade: "18 anos",
  turma: "2° Info A",
  curso: "Informática",
  bio: "Entusiasta de tecnologia e desenvolvimento móvel, sempre em busca de novos conhecimentos no mundo da programação.",
};

export default function SobreMimGabriel() {
    
    const handleAction = () => {
        alert(`Ação executada! Ver projetos de ${profileData.nome}.`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={profileImageSource} 
                    style={styles.avatar}
                />
                
                <Text style={styles.title}>
                    {profileData.nome} 
                </Text>
                
                <View style={styles.speechBubble}>
                    <Text style={styles.bubbleText}>
                        "{profileData.bio}"
                    </Text>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>
                        **Idade:** {profileData.idade}
                    </Text>
                    <Text style={styles.detailText}>
                        **Turma:** {profileData.turma}
                    </Text>
                    <Text style={styles.detailText}>
                        **Curso:** {profileData.curso}
                    </Text>
                </View>
                
                <TouchableOpacity 
                    style={styles.actionButton}
                    onPress={handleAction}
                    activeOpacity={0.7} 
                >
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FF00FF", 
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
        borderColor: "#00FFFF", 
        shadowColor: "#FFFF00", 
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 0,
        maxWidth: 380, 
        width: '100%',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 8, 
        borderColor: "#FF4500", 
        marginBottom: 25,
        marginTop: -35, 
        backgroundColor: "#00FFFF", 
    },
    title: {
        fontSize: 28, 
        fontWeight: "900",
        color: "#FF00FF", 
        marginBottom: 15,
        textAlign: "center",
        textShadowColor: "#FFFF00", 
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 0,
        letterSpacing: 1, 
    },
    speechBubble: {
        backgroundColor: "#10e762ff", 
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 30, 
        borderWidth: 4,
        borderColor: "#FFFF00", 
    },
    bubbleText: {
        color: "#FFFFFF", 
        fontWeight: "bold",
        fontSize: 15,
        textAlign: "center",
        lineHeight: 22,
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: "#F0F0F0", 
        borderRadius: 15,
        padding: 20,
        marginBottom: 30,
        borderWidth: 3,
        borderColor: "#FF4500", 
    },
    detailText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#4A4A4A", 
        lineHeight: 30, 
    },
    actionButton: {
        backgroundColor: "#FF4500", 
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 18,
        marginTop: 10,
        borderWidth: 4,
        borderColor: "#00FFFF", 
        shadowColor: "#FF00FF",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
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
