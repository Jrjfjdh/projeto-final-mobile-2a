import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

// Dados atualizados com as eras do texto narrativo
const historyData = [
  {
    id: 1,
    title: "1992–1996: Era Block (Lançamento)",
    years: "1992–1996",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736ce07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Nos primeiros anos, o Cartoon Network vivia de reprises da Hanna-Barbera e dos Looney Tunes. Tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995, um bloco de curtas que revelou nomes gigantes como Craig McCracken e Tartakovsky, formando a primeira geração dos Cartoon Cartoons.",
    fullDescription: "Nos primeiros anos (1992–1996), o Cartoon Network vivia quase totalmente de reprises da Hanna-Barbera e dos Looney Tunes. Essa “Era Block” não tinha produções próprias, mas tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995: um bloco para curtas feitos por novos animadores. Dessa iniciativa nasceram nomes gigantes como Craig McCracken, Tartakovsky e David Feiss, além dos futuros criadores de Family Guy e Padrinhos Mágicos. Esses curtas formariam a primeira geração dos Cartoon Cartoons, que consolidaram o canal mundialmente. Paralelamente surgiram dois marcos: a expansão para a América Latina e a criação do Boomerang, inicialmente um bloco só de clássicos."
  },
  {
    id: 2,
    title: "1992–1999: Era Checkerboard (Consolidação)",
    years: "1992–1999",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png", 
    description: "O canal engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações. A estética quadriculada virou marca registrada. No final dos anos 90, os animes surgiram como um novo competidor.",
    fullDescription: "Com a Era Checkerboard (1992–1999), o canal finalmente engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações (Billy e Mandy, Samurai Jack, KND). A estética quadriculada e os bumpers criativos viraram marca registrada. Nessa fase também chegaram animações da Warner como Animaniacs, Freakazoid e Pink & Cérebro. Porém, ao final dos anos 90, o canal teria um novo competidor poderoso: os animes."
  },
  {
    id: 3,
    title: "1999–2004: Era Powerhouse (O Auge)",
    years: "1999–2004",
    image: "https://images.unsplash.com/photo-1614726365723-49dc46e7e797?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Marcou o auge do canal. Com o bloco Toonami, chegaram animes de sucesso (Dragon Ball, Pokémon, Yu Yu Hakusho). O Adult Swim ganhou mais força, e o canal virou fenômeno cultural, atingindo seu ponto máximo de popularidade.",
    fullDescription: "A Era Powerhouse (1999–2004) marcou o auge. Com o bloco Toonami, chegaram Dragon Ball, Pokémon, Yu Yu Hakusho, Cavaleiros do Zodíaco, entre muitos outros. Os desenhos clássicos migraram para o canal Boomerang. O Adult Swim ganhou mais força, exibindo animações adultas. O canal virou fenômeno cultural, lançou o filme das Meninas Superpoderosas e atingiu seu ponto máximo de popularidade."
  },
  {
    id: 4,
    title: "2004–2010: Era City (Primeira Grande Crise)",
    years: "2004–2010",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Crise marcada pela saída de Ted Turner e mudanças mal recebidas. O logo virou 'CN' e a programação foi tomada por reprises de Naruto e Ben 10. Apesar disso, surgiram boas animações como Mansão Foster, Flapjack e Chowder.",
    fullDescription: "A Era City (2004–2010) marcou a primeira grande crise. Ted Turner saiu, Pablo Zuccarino assumiu, e várias mudanças foram mal recebidas: o clássico logotipo virou “CN”, muitos desenhos antigos desapareceram e a programação ficou tomada por reprises de Naruto, Ben 10 e Bakugan. Adult Swim foi cancelado no Brasil após reclamações de pais. Mesmo assim, surgiram boas animações como Mansão Foster, Flapjack, Chowder e o próprio Ben 10, que virou um fenômeno comercial."
  },
  {
    id: 5,
    title: "2010–2012: Era Toonix (Fundo do Poço)",
    years: "2010–2012",
    image: "https://images.unsplash.com/photo-1515601777675-d308909cc3eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Considerada o fundo do poço, com mascotes genéricos, cortes de aberturas, censura e séries live-action. No entanto, nasceram os pilares que salvariam o canal: Hora de Aventura, Apenas um Show, Gumball e o novo Ben 10. O Brasil começou a produzir 'Irmão do Jorel'.",
    fullDescription: "A Era Toonix (2010–2012) é considerada o fundo do poço. O canal adotou bumpers com mascotes genéricos, cortou aberturas e encerramentos para colocar mais comerciais, censurou episódios e encheu a grade com séries live-action de baixa qualidade. Muitos desenhos eram cancelados sem aviso e os horários viraram uma bagunça. Ainda assim, nasceram os pilares que salvariam o canal: Hora de Aventura, Apenas um Show, Gumball e o novo Ben 10. O Brasil começou a produzir animações próprias como “Irmão do Jorel”."
  },
  {
    id: 6,
    title: "2012–Atual: Era Check It (Recuperação)",
    years: "2012–atual",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "O canal se recuperou com foco em animação original. Surgiram sucessos gigantes como Steven Universo, Urso Sem Curso e Over The Garden Wall. Nos últimos anos, enfrenta críticas pelo excesso de comédias nonsense e reboots polêmicos.",
    fullDescription: "Com a Era Check It (2012–atual) o canal finalmente se recuperou. Os bumpers ficaram mais modernos, as censuras diminuíram, e o foco voltou a ser animação original. Surgiram sucessos gigantes como Steven Universo, Urso Sem Curso, Over The Garden Wall e outros nacionais como Historietas Assombradas. Porém, nos últimos anos o canal voltou a enfrentar críticas pelo excesso de comédias nonsense e reboots polêmicos, como Teen Titans Go, Be Cool Scooby-Doo, Powerpuff Girls 2016 e Thundercats Roar. Ao longo dessa trajetória, o Cartoon Network oscilou entre eras de ouro e quedas drásticas, mas sempre teve um papel fundamental para a animação mundial, revelando talentos e marcando gerações."
  },
];

export default function PageOne() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <View style={styles.mainContainer}>
      {/* Mudei o style da status bar para cores cartoon */}
      <StatusBar barStyle="light-content" backgroundColor="#FF5722" /> 
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>A HISTÓRIA DOS CARTOONS</Text> {/* Texto mais dinâmico */}
          </View>
          <Text style={styles.mainTitle}>LINHA DO TEMPO CN</Text>
          <Text style={styles.subHeader}>AS ERAS DA ANIMAÇÃO</Text>
        </View>

        {/* Renderização dos Cards */}
        {historyData.map((item) => (
          <View key={item.id} style={styles.card}>
            
            {/* Imagem de Capa */}
            <Image 
              style={styles.cardImage}
              source={{ uri: item.image }}
            />
            
            <View style={styles.cardContent}>
              {/* Cabeçalho do Card */}
              <View style={styles.cardHeaderRow}>
                <View style={styles.titleWrapper}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
                <View style={styles.yearBadge}>
                  <Text style={styles.yearText}>{item.years}</Text>
                </View>
              </View>

              {/* Divisor em cor de destaque */}
              <View style={styles.divider} />

              {/* Descrição: Exibe o resumo ou o texto completo baseado no estado */}
              <Text style={styles.cardDescription}>
                {expandedCard === item.id ? item.fullDescription : item.description}
              </Text>

              {/* Botão "Ler Mais / Ler Menos" */}
              <TouchableOpacity 
                style={styles.readMoreButton}
                onPress={() => toggleExpand(item.id)}
              >
                <Text style={styles.readMoreText}>
                  {expandedCard === item.id ? 'VER MENOS ▲' : 'VER MAIS ▼'} {/* Texto mais ativo */}
                </Text>
              </TouchableOpacity>
              
            </View>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>FIM DA LINHA DO TEMPO</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FBC02D", // Amarelo Vibrante (Mais Cartoon)
  },
  scrollContent: {
    padding: 15, // Padding reduzido para um visual mais 'full'
    paddingBottom: 60,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 15,
  },
  headerBadge: {
    backgroundColor: "#FF5722", // Laranja/Vermelho (Destaque)
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8, // Bordas mais definidas
    marginBottom: 8,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  headerBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900", // Mais ousado
    letterSpacing: 2, // Maior espaçamento para efeito dinâmico
  },
  mainTitle: {
    fontSize: 38, // Aumentado
    fontWeight: "900",
    color: "#D32F2F", // Vermelho Forte
    textAlign: 'center',
    marginBottom: 4,
    textShadowColor: 'rgba(255, 255, 255, 0.7)', // Efeito de contorno branco
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    letterSpacing: 1.5,
  },
  subHeader: {
    fontSize: 20,
    color: "#303F9F", // Azul Escuro
    fontWeight: "800",
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Pequena sombra para contraste
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  
  // Estilos do Card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16, // Bordas mais definidas e menos arredondadas
    marginBottom: 20,
    shadowColor: "#D32F2F", // Sombra Vermelha para impacto
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 6 }, // Sombra mais projetada
    shadowRadius: 10,
    elevation: 8,
    overflow: "hidden",
    borderWidth: 4, // Contorno forte
    borderColor: "#303F9F", // Contorno Azul
  },
  cardImage: {
    width: "100%",
    height: 160, // Ligeiramente maior
    resizeMode: "cover",
    opacity: 1,
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
    fontWeight: "900", // Título bem forte
    color: "#303F9F", // Azul Escuro
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  yearBadge: {
    backgroundColor: "#FFEB3B", // Amarelo Destaque
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#D32F2F", // Contorno Vermelho
    alignSelf: 'flex-start', 
  },
  yearText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#D32F2F", // Vermelho
  },
  divider: {
    height: 3, // Divisor mais grosso
    backgroundColor: "#FF5722", // Cor de destaque
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 16, // Um pouco maior para leitura
    lineHeight: 26,
    color: "#212121", // Preto forte para corpo de texto
    textAlign: "justify", 
    fontWeight: "500", // Um pouco mais de peso
    marginBottom: 15,
  },
  // Estilos do Botão "Ler Mais"
  readMoreButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 0, 
  },
  readMoreText: {
    color: '#D32F2F', // Vermelho para ação
    fontWeight: '900', // Bem destacado
    fontSize: 16,
    letterSpacing: 1, // Dinâmico
  },
  footer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  footerText: {
    color: "#FF5722", // Laranja/Vermelho
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1.5,
  }
});