import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

// 1. Dados dos desenhos (Apenas um Show, Steven Universo, e Hora de Aventura)
const cartoonData = [
  {
    title: "Hora de Aventura",
    subtitle: "Aventuras de Finn e Jake",
    bannerUri:
      "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/fff09eaf-17c3-446b-be32-8a0d47e4ccf1/50f08381-5713-11f0-97f2-027602c5f941?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    paragraphs: [
      "Em Hora de Aventura, acompanhamos Finn e Jake explorando a Terra de Ooo, enfrentando criaturas mágicas, mistérios antigos e personagens marcantes. A série mistura humor, emoção e temas profundos de forma única.",
      "O desenho marcou uma geração por sua liberdade criativa, personalidade forte e identidade visual colorida e surrealista.",
    ],
    sectionTitle: "Por que é importante?",
    listItems: [
      "Revolucionou o estilo visual dos desenhos",
      "Mistura aventura com temas filosóficos",
      "Criou um universo gigantesco e consistente",
    ],
    curiosity:
      "A Terra de Ooo é um planeta pós-apocalíptico após a 'Guerra dos Cogumelos', revelada ao longo da série.",
  },
  {
    title: "Apenas um Show",
    subtitle: "Trabalho e Encontros Surrealistas",
    bannerUri:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Regular_Show_Title_Card.png/300px-Regular_Show_Title_Card.png",
    paragraphs: [
      "Mordecai e Rigby, dois amigos inseparáveis, trabalham como jardineiros em um parque. A rotina deles é constantemente interrompida por eventos bizarros, mágicos ou sobrenaturais.",
      "A série é conhecida por seu humor nostálgico dos anos 80 e 90, e por escalar conflitos simples do dia a dia a proporções épicas e absurdas.",
    ],
    sectionTitle: "O que o torna único?",
    listItems: [
      "Combina humor de trabalho (sitcom) com ficção científica",
      "Personagens carismáticos e cheios de falhas",
      "Trilha sonora e referências à cultura pop retrô",
    ],
    curiosity:
      "O criador, J.G. Quintel, dublou Mordecai (o gaio azul) e High Five Ghost. Ele baseou a série em suas experiências na faculdade.",
  },
  {
    title: "Steven Universo",
    subtitle: "Amizade e Crescimento",
    bannerUri:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Steven_Universe_logo.png/300px-Steven_Universe_logo.png",
    paragraphs: [
      "Steven é um garoto meio-humano, meio-Gem, que vive com as Crystal Gems: Garnet, Amethyst e Pearl. Ele precisa aprender a usar os poderes da sua pedra mágica para proteger o mundo.",
      "A série é celebrada por seus temas de amor, aceitação, diversidade e representatividade LGBTQIA+, sendo um marco na animação infantil e adulta.",
    ],
    sectionTitle: "Temas Essenciais:",
    listItems: [
      "Exploração profunda de identidades e sentimentos",
      "Construção de um mundo complexo e emocional",
      "Foco em relacionamentos saudáveis e comunicação",
    ],
    curiosity:
      "A criadora, Rebecca Sugar, é a primeira mulher a criar uma série sozinha para o Cartoon Network. Ela usou muito de sua experiência em Hora de Aventura.",
  },
];

// Componente para um item da lista
const ListItem = ({ text }) => (
  <View style={styles.listItemContainer}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.listText}>{text}</Text>
  </View>
);

// 2. Componente Reutilizável para o Cartão do Desenho
const CartoonCard = ({ data }) => (
  <View style={styles.card}>
    <Image style={styles.banner} source={{ uri: data.bannerUri }} />

    <Text style={styles.title}>{data.title}</Text>
    <Text style={styles.subtitle}>{data.subtitle}</Text>

    {data.paragraphs.map((p, index) => (
      <Text key={`p-${index}`} style={styles.paragraph}>
        {p}
      </Text>
    ))}

    <Text style={styles.sectionTitle}>{data.sectionTitle}</Text>
    {data.listItems.map((item, index) => (
      <ListItem key={`l-${index}`} text={item} />
    ))}

    <Text style={styles.sectionTitle}>Curiosidade:</Text>
    <Text style={styles.paragraph}>{data.curiosity}</Text>
  </View>
);

// 3. Componente Principal que renderiza a lista de cartões
export default function PageTwo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cartoonData.map((cartoon, index) => (
        <CartoonCard key={index} data={cartoon} />
      ))}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

// Estilos (mantidos e ligeiramente ajustados do código anterior)
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFC0CB",
  },
  card: {
    backgroundColor: "#f7f7f7",
    borderRadius: 16,
    padding: 24,
    marginTop: 20, // Espaçamento entre os cartões
    
    shadowColor: "#000",
    shadowOpacity: 0.15, // Aumentei um pouco a opacidade para destacar mais os cartões
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,
  },
  banner: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 4,
    color: "#e65fb2",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
    fontWeight: "600",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 12,
    color: "#000",
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    paddingBottom: 4,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: "#e65fb2",
    marginRight: 8,
    lineHeight: 24,
    width: 15, // Garante que o bullet tenha espaço fixo
  },
  listText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
  },
});