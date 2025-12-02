import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  StatusBar, 
  TouchableOpacity,
  Platform // ESSENCIAL para diferenciar Web/Mobile
} from "react-native";

// Dados de História (inalterados)
const historyData = [
  {
    id: 1,
    title: "1992–1996: Era Block (Lançamento)",
    years: "1992–1996",
    image: null, 
    description: "Nos primeiros anos, o Cartoon Network vivia de reprises da Hanna-Barbera e dos Looney Tunes. Tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995, um bloco de curtas que revelou nomes gigantes como Craig McCracken e Tartakovsky, formando a primeira geração dos Cartoon Cartoons.",
    fullDescription: "Nos primeiros anos (1992–1996), o Cartoon Network vivia quase totalmente de reprises da Hanna-Barbera e dos Looney Tunes. Essa “Era Block” não tinha produções próprias, mas tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995: um bloco para curtas feitos por novos animadores. Dessa iniciativa nasceram nomes gigantes como Craig McCracken, Tartakovsky e David Feiss, além dos futuros criadores de Family Guy e Padrinhos Mágicos. Esses curtas formariam a primeira geração dos Cartoon Cartoons, que consolidaram o canal mundialmente. Paralelamente surgiram dois marcos: a expansão para a América Latina e a criação do Boomerang, inicialmente um bloco só de clássicos."
  },
  {
    id: 2,
    title: "1992–1999: Era Checkerboard (Consolidação)",
    years: "1992–1999",
    image: null,
    description: "O canal engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações. A estética quadriculada virou marca registrada. No final dos anos 90, os animes surgiram como um novo competidor.",
    fullDescription: "Com a Era Checkerboard (1992–1999), o canal finalmente engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações (Billy e Mandy, Samurai Jack, KND). A estética quadriculada e os bumpers criativos viraram marca registrada. Nessa fase também chegaram animações da Warner como Animaniacs, Freakazoid e Pink & Cérebro. Porém, ao final dos anos 90, o canal teria um novo competidor poderoso: os animes."
  },
  {
    id: 3,
    title: "1999–2004: Era Powerhouse (O Auge)",
    years: "1999–2004",
    image: null,
    description: "Marcou o auge do canal. Com o bloco Toonami, chegaram animes de sucesso (Dragon Ball, Pokémon, Yu Yu Hakusho). O Adult Swim ganhou mais força, e o canal virou fenômeno cultural, atingindo seu ponto máximo de popularidade.",
    fullDescription: "A Era Powerhouse (1999–2004) marcou o auge. Com o bloco Toonami, chegaram Dragon Ball, Pokémon, Yu Yu Hakusho, Cavaleiros do Zodíaco, entre muitos outros. Os desenhos clássicos migraram para o canal Boomerang. O Adult Swim ganhou mais força, exibindo animações adultas. O canal virou fenômeno cultural, lançou o filme das Meninas Superpoderosas e atingiu seu ponto máximo de popularidade."
  },
  {
    id: 4,
    title: "2004–2010: Era City (Primeira Grande Crise)",
    years: "2004–2010",
    image: null,
    description: "Crise marcada pela saída de Ted Turner e mudanças mal recebidas. O logo virou 'CN' e a programação foi tomada por reprises de Naruto e Ben 10. Apesar disso, surgiram boas animações como Mansão Foster, Flapjack e Chowder.",
    fullDescription: "A Era City (2004–2010) marcou a primeira grande crise. Ted Turner saiu, Pablo Zuccarino assumiu, e várias mudanças foram mal recebidas: o clássico logotipo virou “CN”, muitos desenhos antigos desapareceram e a programação ficou tomada por reprises de Naruto, Ben 10 e Bakugan. Adult Swim foi cancelado no Brasil após reclamações de pais. Mesmo assim, surgiram boas animações como Mansão Foster, Flapjack, Chowder e o próprio Ben 10, que virou um fenômeno comercial."
  },
  {
    id: 5,
    title: "2010–2012: Era Toonix (Fundo do Poço)",
    years: "2010–2012",
    image: null,
    description: "Considerada o fundo do poço, com mascotes genéricos, cortes de aberturas, censura e séries live-action. No entanto, nasceram os pilares que salvariam o canal: Hora de Aventura, Apenas um Show, Gumball e o novo Ben 10. O Brasil começou a produzir 'Irmão do Jorel'.",
    fullDescription: "A Era Toonix (2010–2012) é considerada o fundo do poço. O canal adotou bumpers com mascotes genéricos, cortou aberturas e encerramentos para colocar mais comerciais, censurou episódios e encheu a grade com séries live-action de baixa qualidade. Muitos desenhos eram cancelados sem aviso e os horários viraram uma bagunça. Ainda assim, nasceram os pilares que salvariam o canal: Hora de Aventura, Apenas um Show, Gumball e o novo Ben 10. O Brasil começou a produzir animações próprias como “Irmão do Jorel”."
  },
  {
    id: 6,
    title: "2012–Atual: Era Check It (Recuperação)",
    years: "2012–atual",
    image: null,
    description: "O canal se recuperou com foco em animação original. Surgiram sucessos gigantes como Steven Universo, Urso Sem Curso e Over The Garden Wall. Nos últimos anos, enfrenta críticas pelo excesso de comédias nonsense e reboots polêmicos.",
    fullDescription: "Com a Era Check It (2012–atual) o canal finalmente se recuperou. Os bumpers ficaram mais modernos, as censuras diminuíram, e o foco voltou a ser animação original. Surgiram sucessos gigantes como Steven Universo, Urso Sem Curso, Over The Garden Wall e outros nacionais como Historietas Assombradas. Porém, nos últimos anos o canal voltou a enfrentar críticas pelo excesso de comédias nonsense e reboots polêmicos, como Teen Titans Go, Be Cool Scooby-Doo, Powerpuff Girls 2016 e Thundercats Roar. Ao longo dessa trajetória, o Cartoon Network oscilou entre eras de ouro e quedas drásticas, mas sempre teve um papel fundamental para a animação mundial, revelando talentos e marcando gerações."
  },
];


export default function PageOne() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const containerStyle = [
    styles.mainContainer,
    // Aplica o wrapper de centralização APENAS se for Web
    Platform.OS === 'web' && styles.webContainerWrapper,
  ];

  return (
    <View style={containerStyle}>
      {/* Oculta a StatusBar na Web */}
      {Platform.OS !== 'web' && 
        <StatusBar barStyle="light-content" backgroundColor="#FF5722" />
      }
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.headerContainer}>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>A HISTÓRIA DO CARTOON NETWORK</Text>
          </View>
          <Text style={styles.mainTitle}>LINHA DO TEMPO CN</Text>
          <Text style={styles.subHeader}>AS ERAS DA ANIMAÇÃO</Text>
        </View>

        {historyData.map((item) => (
          <View key={item.id} style={styles.card}>
            
            <View style={styles.placeholderImage} />
            
            <View style={styles.cardContent}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.titleWrapper}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
                <View style={styles.yearBadge}>
                  <Text style={styles.yearText}>{item.years}</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <Text style={styles.cardDescription}>
                {expandedCard === item.id ? item.fullDescription : item.description}
              </Text>

              <TouchableOpacity
                style={styles.readMoreButton}
                onPress={() => toggleExpand(item.id)}
              >
                <Text style={styles.readMoreText}>
                  {expandedCard === item.id ? 'VER MENOS ▲' : 'VER MAIS ▼'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // -------------------------------------------------------------------
  // ESTILOS DE CENTRALIZAÇÃO E CONTENÇÃO (APLICADOS NA WEB)
  // -------------------------------------------------------------------
  webContainerWrapper: {
    // Garante que o container ocupe toda a altura da viewport
    height: '100vh', 
    backgroundColor: '#FFD700', // Cor de fundo fora da área do app
    
    // Centraliza o conteúdo horizontal e verticalmente
    alignItems: 'center', 
    justifyContent: 'center', 
    
    overflow: 'auto', // Permite scroll se o conteúdo for maior que a tela
  },
  
  mainContainer: {
    flex: 1, 
    backgroundColor: "#FBC02D",
    
    // Limita a largura máxima para simular um celular/tablet na Web
    maxWidth: Platform.OS === 'web' ? 600 : null, 
    
    // Adiciona margem automática para centralização horizontal final na web
    marginHorizontal: Platform.OS === 'web' ? 'auto' : 0,
    
    // Adiciona margem vertical para que não fique colado nas bordas do browser (na web)
    marginVertical: Platform.OS === 'web' ? 20 : 0, 
    
    // Adiciona um padding vertical interno para dar um respiro no topo/rodapé do conteúdo
    paddingVertical: Platform.OS === 'web' ? 20 : 0, 
  },
  
  // -------------------------------------------------------------------
  // RESTANTE DOS ESTILOS
  // -------------------------------------------------------------------
  scrollContent: {
    padding: 15,
    paddingBottom: 60,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
  },
  headerBadge: {
    backgroundColor: "#FF5722",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  headerBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
  },
  mainTitle: {
    fontSize: 38,
    fontWeight: "900",
    color: "#D32F2F",
    textAlign: 'center',
    marginBottom: 4,
    textShadowColor: 'rgba(255, 255, 255, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1.5,
  },
  subHeader: {
    fontSize: 20,
    color: "#303F9F",
    fontWeight: "800",
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  
  // Estilos do Card com correção de sombra (elevation) para a Web
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    
    // Estilos padrão de sombra (iOS/Android)
    shadowColor: "#D32F2F",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 10,
    elevation: 8, 
    
    // Sombra CSS nativa forçada na Web
    ...(Platform.OS === 'web' && {
        boxShadow: '4px 6px 10px rgba(211, 47, 47, 0.3)',
    }),
    
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#303F9F",
  },
  placeholderImage: {
    width: "100%",
    height: 160,
    backgroundColor: '#CCCCCC', 
  },
  cardContent: {
    padding: 20,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "flex-start",
    marginBottom: 10,
  },
  titleWrapper: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: "#303F9F",
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  yearBadge: {
    backgroundColor: "#FFEB3B",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#D32F2F",
    alignSelf: 'flex-start',
  },
  yearText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#D32F2F",
  },
  divider: {
    height: 3,
    backgroundColor: "#FF5722",
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 26,
    color: "#212121",
    textAlign: "justify",
    fontWeight: "500",
    marginBottom: 15,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 0,
  },
  readMoreText: {
    color: '#D32F2F',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 1,
  },
  footer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  footerText: {
    color: "#FF5722",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1.5,
  }
});