import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";

import imgblock from "../assets/block.jpg"; 
import imgcheckerboard from "../assets/checkerboard.webp";
import imgpowerhouse from "../assets/powerhouse.webp"; 
import imgcity from "../assets/city.jpeg"; 
import imgtoonix from "../assets/toonix.webp"; 
import imgcheckit from "../assets/checkit.webp"; 
import imgdimen from "../assets/dimensional.webp"; 

const historyData = [
  {
    id: 1,
    title: "1992–1999: Era Checkerboard (Consolidação)",
    years: "1992–1999",
    imageSource: imgcheckerboard,
    description: "O canal engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações. A estética quadriculada virou marca registrada. No final dos anos 90, os animes surgiram como um novo competidor.",
    fullDescription: "Com a Era Checkerboard (1992–1999), o canal finalmente engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações (Billy e Mandy, Samurai Jack, KND). A estética quadriculada e os bumpers criativos viraram marca registrada. Nessa fase também chegaram animações da Warner como Animaniacs, Freakazoid e Pink & Cérebro. Porém, ao final dos anos 90, o canal teria um novo competidor poderoso: os animes."
  },
  {
    id: 2,
    title: "1992–1996: Era Block (Lançamento)",
    years: "1992–1996",
    imageSource: imgblock,
    description: "Nos primeiros anos, o Cartoon Network vivia de reprises da Hanna-Barbera e dos Looney Tunes. Tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995, um bloco de curtas que revelou nomes gigantes como Craig McCracken e Tartakovsky, formando a primeira geração dos Cartoon Cartoons.",
    fullDescription: "Nos primeiros anos (1992–1996), o Cartoon Network vivia quase totalmente de reprises da Hanna-Barbera e dos Looney Tunes. Essa “Era Block” não tinha produções próprias, mas tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995: um bloco para curtas feitos por novos animadores. Dessa iniciativa nasceram nomes gigantes como Craig McCracken, Tartakovsky e David Feiss, além dos futuros criadores de Family Guy e Padrinhos Mágicos. Esses curtas formariam a primeira geração dos Cartoon Cartoons, que consolidaram o canal mundialmente. Paralelamente surgiram dois marcos: a expansão para a América Latina e a criação do Boomerang, inicialmente um bloco só de clássicos."
  },
  {
    id: 3,
    title: "1999–2004: Era Powerhouse (O Auge)",
    years: "1999–2004",
    imageSource: imgpowerhouse,
    description: "A era Powerhouse (também conhecida como Reface 1997 ) foi a terceira era do Cartoon Network . Começou em 2 de março de 1998, dando continuidade às eras Checkerboard e Starburst , e terminou nas primeiras horas da manhã de 14 de junho de 2004. Foi sucedida pela era CN City . O primeiro programa a ser exibido na era Powerhouse foi O Canada e o último foi Captain Planet . Screwy, Ain t It foi o slogan da era até 2001, juntamente com o slogan secundário You With Us?.",
    fullDescription: "A era Powerhouse foi utilizada pelo Cartoon Network Europa de 1999 a 2002. A América Latina também utilizou esse visual de 30 de abril de 1998 a 31 de dezembro de 2004, enquanto na Ásia e na Austrália , essa era durou de 22 de agosto de 1999 a 30 de setembro de 2005. No Japão , essa era foi ao ar de 1999 a 31 de dezembro de 2005."
  },
  {
    id: 4,
    title: "2004–2010: Era City (Primeira Grande Crise)",
    years: "2004–2010",
    imageSource: imgcity,
    description: "A era recebeu esse nome por causa de seus bumpers, que se passavam em uma cidade criada por computação gráfica e apresentavam personagens do Cartoon Network interagindo entre si. Esses bumpers foram produzidos pela empresa australiana Animal Logic. A era City é notável pelo novo logotipo que trouxe consigo, bem como pela locutora (uma atriz da Califórnia chamada Nicole Vicius) e pelo slogan This is Cartoon Network.",
    fullDescription: "A era City viu o surgimento de novas e bem-sucedidas séries originais do Cartoon Network , que começaram a substituir tanto os desenhos animados clássicos quanto os antigos desenhos animados da série Cartoon Cartoons. Um número maior de filmes com atores reais também começou a ser exibido no Cartoon Network durante essa era."
  },
  {
    id: 5,
    title: "2010–2012: Era Toonix (Fundo do Poço)",
    years: "2010–2012",
    imageSource: imgtoonix,
    description: "Toonix foi a 5ª era do Cartoon Network América Latina (4ª no Brasil), substituindo o CN City . Originalmente, foram usados ​​no site do Cartoon Network América Latina em 2008 como parte do CN 2.0. Depois disso, o Cartoon Network América Latina  usou o visual Toonix para sua identidade visual na tela de 5 de agosto de 2010 a 3 de setembro de 2012.",
    fullDescription: "Toonix foi a 5ª era do Cartoon Network América Latina (4ª no Brasil), substituindo o CN City . Originalmente, foram usados ​​no site do Cartoon Network América Latina em 2008 como parte do CN 2.0. Depois disso, o Cartoon Network América Latina  usou o visual Toonix para sua identidade visual na tela de 5 de agosto de 2010 a 3 de setembro de 2012. Os Toonix foram introduzidos no final de 2010 nas transmissões da Cartoon Network na região da Ásia-Pacífico . O design foi usado em diversos blocos de programação (como o Toonilicious ) e posteriormente introduzido como avatares para os membros do CN Club online. Durante a reformulação da marca CHECK it (It's a Fun Thing!) em 1º de outubro de 2011, o bloco Toonilicious usa um visual semelhante ao da América Latina em suas promoções, incluindo alguns bumpers que foram editados para conter um logotipo CHECK it animado."
  },
  {
    id: 6,
    title: "2012–2016: Era Check It (Recuperação)",
    years: "2012–2016",
    imageSource: imgcheckit,
    description: "CHECK it (também conhecido como It's A Fun Thing na Ásia e Austrália) foi uma nova identidade visual para o canal, apresentada pela primeira vez em 22 de março de 2010 e lançada em 29 de maio de 2010 nos EUA e em 1º de outubro de 2011 na Ásia e Austrália, sucedendo a era Noods . Essa era apresentou novos programas que definiriam a direção futura da emissora, como Adventure Time , Regular Show e The Amazing World of Gumball.",
    fullDescription: "CHECK it (também conhecido como It's A Fun Thing na Ásia e Austrália) foi uma nova identidade visual para o canal, apresentada pela primeira vez em 22 de março de 2010 e lançada em 29 de maio de 2010 nos EUA e em 1º de outubro de 2011 na Ásia e Austrália, sucedendo a era Noods . Essa era apresentou novos programas que definiriam a direção futura da emissora, como Adventure Time , Regular Show e The Amazing World of Gumball. A décima identidade visual da emissora, criada pela Brand New School, faz uso intenso do padrão quadriculado em preto e branco que compunha o primeiro logotipo, além de diversas variações de cores CMYK e vários padrões. Em 20 de maio de 2013, os bumpers e as telas UP NEXT do canal foram reformulados com a nova identidade visual, CHECK it 3.0. Os bumpers UP NEXT, por exemplo, consistiam em um cubo giratório com a imagem animada de um personagem do próximo programa em uma paleta de cores CMYK, acompanhada de música especialmente encomendada à Impactist . Em 1º de junho de 2015, os bumpers foram reformulados novamente, utilizando gradientes acentuados e novos emojis, e passaram a ser conhecidos como CHECK it 4.0. O slogan CHECK it é uma frase recorrente em Regular Show . A partir dessa era, inicia-se um período de transição do uso de gráficos 3D para um design mais plano com cores mais vibrantes. O CHECK it 1.0 é a última era a utilizar gráficos 3D. Em alguns outros feeds internacionais, coincidiu com a era Dimensional . O feed dos Estados Unidos, em 14 de junho de 2016, adotou a era Dimensional como sucessora da era CHECK it. Até o momento, o CHECK it 4.0 é a última reformulação de marca com suporte para todos os feeds internacionais."
  },
  {
    id: 7,
    title: "2016–atual: Era Dimensional",
    years: "2016–atual",
    imageSource: imgdimen,
    description: "A era Dimensional (comumente abreviada como CN Dimensional ) é a décima quarta identidade visual do Cartoon Network nos Estados Unidos, juntamente com a Mashup , e mais recentemente em todo o mundo, incluindo Canadá, América Latina, Europa, Oriente Médio, África, Ásia e Oceania. Estreou em 30 de maio de 2016 e foi criada pelo Bent Design Lab. Anteriormente conhecida como CHECK it 4.5, foi oficialmente nomeada Dimensional em 14 de junho de 2016, dando uma nova identidade ao canal, além de diversas melhorias, e sucedendo a era CHECK it.",
    fullDescription: "A era Dimensional (comumente abreviada como CN Dimensional ) é a décima quarta identidade visual do Cartoon Network nos Estados Unidos, juntamente com a Mashup , e mais recentemente em todo o mundo, incluindo Canadá, América Latina, Europa, Oriente Médio, África, Ásia e Oceania. Estreou em 30 de maio de 2016 e foi criada pelo Bent Design Lab. Anteriormente conhecida como CHECK it 4.5, foi oficialmente nomeada Dimensional em 14 de junho de 2016, dando uma nova identidade ao canal, além de diversas melhorias, e sucedendo a era CHECK it. Foi apresentada após um vídeo promocional em duas partes com Jovens Titãs em Ação! e o revival de As Meninas Superpoderosas em 2016. Em 2017, introduziu o slogan NEW NEW NEW NEW após um vídeo promocional de novos episódios de O Incrível Mundo de Gumball em fevereiro, mas foi abandonado no verão de 2018. A era Dimensional era anteriormente conhecida como CHECK it 4.5, uma nova versão da era CHECK it que foi lançada em 29 de maio de 2010. No entanto, foi confirmado posteriormente, em 14 de junho de 2016, que passaria a ser conhecida como era Dimensional, um novo pacote de identidade visual para o canal."
  },
];

const WebBackground = ({ children }) => (
  <View style={styles.webContainerWrapper}>
    {children}
  </View>
);

const AnimatedCard = ({ item, isExpanded, toggleExpand }) => {
  const animateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      animateValue,
      {
        toValue: isExpanded ? 1 : 0,
        duration: 300,
        useNativeDriver: Platform.OS !== 'web',
      }
    ).start();
  }, [isExpanded, animateValue]);

  const descriptionStyle = {
    opacity: animateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1],
    }),
    transform: [{
      scaleY: animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1],
      })
    }],
  };
  
  const cardAnimatedStyle = {
    transform: [{
      scale: animateValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.01],
      })
    }],
  };

  return (
    <Animated.View style={[styles.card, cardAnimatedStyle]}>
      {(item.image || item.imageSource) && (
        <Image
          source={item.imageSource || item.image} 
          style={styles.cardImage}
          resizeMode="cover"
        />
      )}
      {(!item.image && !item.imageSource) && <View style={styles.placeholderImage} />}

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

        <Animated.Text style={[styles.cardDescription, descriptionStyle]}>
          {isExpanded ? item.fullDescription : item.description}
        </Animated.Text>

        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={() => toggleExpand(item.id)}
        >
          <Text style={styles.readMoreText}>
            {isExpanded ? 'VER MENOS ▲' : 'VER MAIS ▼'}
          </Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default function PageOne() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const PageContent = (
    <View style={styles.mainContainer}>
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
          <AnimatedCard
            key={item.id}
            item={item}
            isExpanded={expandedCard === item.id}
            toggleExpand={toggleExpand}
          />
        ))}
      </ScrollView>
    </View>
  );

  if (Platform.OS === 'web') {
    return <WebBackground>{PageContent}</WebBackground>;
  }

  return PageContent;
}

const styles = StyleSheet.create({
  webContainerWrapper: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto', 
    paddingVertical: 20, 
  },
  mainContainer: {
    backgroundColor: "#FBC02D",
    maxWidth: Platform.OS === 'web' ? 800 : null,
    height: Platform.OS === 'web' ? '100%' : 'auto', 
    flex: Platform.OS !== 'web' ? 1 : null,
  },
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
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#D32F2F",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 10,
    elevation: 8,
    ...(Platform.OS === 'web' && {
      boxShadow: '4px 6px 10px rgba(211, 47, 47, 0.3)',
    }),
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#303F9F",
  },
  cardImage: {
    width: "100%",
    height: 160,
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