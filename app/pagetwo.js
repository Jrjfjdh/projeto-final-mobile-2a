import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from "react-native";

// ====================================================================
// 1. DADOS DOS DESENHOS COMPLETOS POR ERA (EXPANDIDO)
//    - Contém os detalhes, sinopses e curiosidades de cada série.
// ====================================================================

const cartoonData = [
  // --- ERA CHECKERBOARD (1992-1998) ---
  {
    title: "O Laboratório de Dexter",
    subtitle: "Era Checkerboard (1992-1998)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Dexter%27s_Laboratory_logo.png/300px-Dexter%27s_Laboratory_logo.png",
    paragraphs: [
      "Dexter, um garoto prodígio, esconde um laboratório de alta tecnologia em seu quarto. Seus planos são constantemente arruinados por sua irmã mais velha, Dee Dee, que tem o dom de encontrar e destruir tudo.",
      "Este foi o primeiro grande sucesso original do canal, estabelecendo o estilo de comédia que definiria a 'Era de Ouro'.",
    ],
    sectionTitle: "Inovação Destaque:",
    listItems: [
      "Primeiro spin-off de sucesso do 'What a Cartoon!'.",
      "Definiu o padrão para a comédia animada na década de 90.",
      "Misturava ciência, humor surreal e relações familiares.",
    ],
    curiosity: "A voz original de Dexter na primeira temporada era de uma mulher, Christine Cavanaugh, que também dublava Chuckie de Os Anjinhos.",
  },
  {
    title: "A Vaca e o Frango",
    subtitle: "Era Checkerboard (1992-1998)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Cow_and_Chicken_title_card.jpg/300px-Cow_and_Chicken_title_card.jpg",
    paragraphs: [
      "Vaca e Frango, dois irmãos (um bovino otimista e uma galinha ranzinza), vivem com pais humanos que só aparecem da cintura para baixo. Eles são frequentemente atormentados pelo 'Bumbum sem Calças', o Diabo.",
      "O humor é surreal e irreverente, com um toque de controvérsia que marcou a fase inicial dos Cartoon Cartoons.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Teve seu próprio spin-off ('Eu Sou o Máximo').",
      "Um dos desenhos mais 'subversivos' da fase inicial do canal.",
      "Explorava a dinâmica de opostos entre os irmãos.",
    ],
    curiosity: "A Vaca, o Frango e o Bumbum sem Calças eram todos dublados pelo mesmo dublador, Charlie Adler.",
  },
  {
    title: "Johnny Bravo",
    subtitle: "Era Checkerboard (1992-1998)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Johnny_Bravo_title_card.png/300px-Johnny_Bravo_title_card.png",
    paragraphs: [
      "Johnny Bravo é um jovem musculoso, loiro e narcisista que tenta, de forma desastrada, conquistar todas as mulheres que encontra. Seus planos invariavelmente falham de forma hilária.",
      "Com um estilo inspirado em Elvis Presley, a série se destacou pelo seu humor baseado em personagens e situações embaraçosas.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Humor focado em adultos, mas acessível a crianças.",
      "Estilo visual retro e influenciado por Elvis.",
      "Um dos primeiros sucessos a ser exibido junto com Dexter e Vaca e Frango.",
    ],
    curiosity: "Seth MacFarlane, criador de Family Guy, e Butch Hartman, criador de Padrinhos Mágicos, trabalharam como roteiristas na série.",
  },

  // --- ERA POWERHOUSE (1997-2004) ---
  {
    title: "As Meninas Superpoderosas",
    subtitle: "Era Powerhouse (1997-2004)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/The_Powerpuff_Girls_Logo.png/300px-The_Powerpuff_Girls_Logo.png",
    paragraphs: [
      "As irmãs Florzinha, Lindinha e Docinho usam seus superpoderes para salvar a cidade de Townsville de vilões como Macaco Louco. A série equilibrou a estética 'cute' com muita ação e batalhas épicas, tornando-se um fenômeno cultural.",
    ],
    sectionTitle: "Legado:",
    listItems: [
      "Um dos pilares da 'Era de Ouro' do Cartoon Network.",
      "Estilo visual e animação altamente estilizados.",
      "Introduziu vilões icônicos.",
    ],
    curiosity: "O episódio piloto original (de 1992) tinha o nome de 'As Whoopass Girls'.",
  },
  {
    title: "Du, Dudu e Edu",
    subtitle: "Era Powerhouse (1997-2004)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Ed_Edd_n_Eddy_Title_Card.png/300px-Ed_Edd_n_Eddy_Title_Card.png",
    paragraphs: [
      "Três amigos com o mesmo nome (Du, Dudu e Edu) arquitetam planos elaborados para enganar as outras crianças do bairro e conseguir dinheiro para comprar balas de caramelo. Os planos invariavelmente dão errado de forma hilária.",
      "É a série original do Cartoon Network mais longa e é famosa por sua animação fluida e 'rabiscada' (inspirada no traço de lápis).",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Série original do CN mais longa (6 temporadas).",
      "Conhecida pelo seu humor físico e o drama das amizades adolescentes.",
      "A animação única dava a impressão de um desenho a lápis em movimento.",
    ],
    curiosity: "O criador, Danny Antonucci, foi o único diretor e roteirista da série em toda a sua duração.",
  },
  {
    title: "Coragem, o Cão Covarde",
    subtitle: "Era Powerhouse (1997-2004)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/6/64/Courage_the_Cowardly_Dog_title_card.png/300px-Courage_the_Cowardly_Dog_title_card.png",
    paragraphs: [
      "O medroso Coragem vive com seus donos, Muriel e Eustácio, em uma fazenda isolada. Fenômenos paranormais e monstros estranhos atacam constantemente, forçando Coragem a superar seus medos para proteger sua família.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Mistura de terror, comédia e surrealismo.",
      "Design de criaturas inesquecível.",
      "Abordagem madura de temas de medo e lealdade.",
    ],
    curiosity: "Coragem, ao contrário da maioria dos cães em desenhos, raramente late, preferindo gritar de pânico.",
  },
  {
    title: "Samurai Jack",
    subtitle: "Era Powerhouse (1997-2004)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Samurai_Jack_logo.svg/300px-Samurai_Jack_logo.svg.png",
    paragraphs: [
      "Um samurai sem nome é transportado para um futuro distópico governado pelo demônio Aku. Ele viaja pelo mundo futurista em busca de um portal para voltar ao seu tempo e derrotar Aku.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Estilo de animação minimalista e cinematográfico.",
      "Grande foco em ação, com diálogos mínimos.",
      "Vencedora de 4 Primetime Emmy Awards.",
    ],
    curiosity: "O criador Genndy Tartakovsky inspirou-se em filmes de samurais e em HQs para o visual da série.",
  },
  
  // --- ERA CN CITY (2004–2010) ---
  {
    title: "A Mansão Foster para Amigos Imaginários",
    subtitle: "Era CN City (2004-2010)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Fosters_home_for_imaginary_friends_logo.png/300px-Fosters_home_for_imaginary_friends_logo.png",
    paragraphs: [
      "Bloo, o amigo imaginário travesso, e seu criador, Mac, vivem aventuras na Mansão Foster, um lar de adoção para amigos imaginários abandonados. A mansão é cheia de personagens cômicos e bizarros.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Vencedora de 7 prêmios Emmy.",
      "Estilo de animação que realça o absurdo e o expressivo.",
      "Explora a criatividade e a amizade em um contexto único.",
    ],
    curiosity: "Foi a primeira série original do Cartoon Network Studios após a aquisição da Hanna-Barbera pela Warner Bros. Animation.",
  },
  {
    title: "Ben 10 (Original)",
    subtitle: "Era CN City (2004-2010)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Ben_10_logo.svg/300px-Ben_10_logo.svg.png",
    paragraphs: [
      "Ben Tennyson, de 10 anos, descobre o Omnitrix, um relógio alienígena que permite que ele se transforme em 10 heróis alienígenas diferentes para lutar contra vilões intergalácticos durante as férias de verão.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Grande sucesso de ação do canal, gerando múltiplas sequências e reboots.",
      "Mistura ação, ficção científica e aventura de verão.",
      "Estabeleceu um dos maiores universos de franquia do CN.",
    ],
    curiosity: "Os criadores da série, Man of Action, também criaram a popular série Generator Rex.",
  },

  // --- ERA NOODS/TOONIX (2008-2010) ---
  {
    title: "As Trapalhadas de Flapjack",
    subtitle: "Era Noods/Toonix (2008-2010)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/The_Marvelous_Misadventures_of_Flapjack_title_card.png/300px-The_Marvelous_Misadventures_of_Flapjack_title_card.png",
    paragraphs: [
      "Flapjack, criado por uma baleia, e seu guia, o Capitão Falange, buscam a lendária Ilha dos Doces. O desenho é marcado pelo visual excêntrico e humor bizarro.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Visual excêntrico e levemente macabro.",
      "Humor bizarro e por vezes sombrio.",
      "Criou a base para os sucessos de comédia da era seguinte.",
    ],
    curiosity: "Flapjack foi a série que lançou as carreiras de Pendleton Ward (Hora de Aventura) e J.G. Quintel (Apenas um Show).",
  },
  
  // --- ERA CHECK IT! (2010–2016) ---
  {
    title: "Hora de Aventura",
    subtitle: "Era Check It! (2010-2016)",
    bannerUri: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/fff09eaf-17c3-446b-be32-8a0d47e4ccf1/50f08381-5713-11f0-97f2-027602c5f941?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    paragraphs: [
      "Em Hora de Aventura, acompanhamos Finn e Jake explorando a Terra de Ooo, enfrentando criaturas mágicas, mistérios antigos e personagens marcantes. A série mistura humor, emoção e temas profundos de forma única.",
      "O desenho marcou uma geração por sua liberdade criativa, personalidade forte e identidade visual colorida e surrealista.",
    ],
    sectionTitle: "Por que é importante?",
    listItems: [
      "Revolucionou o estilo visual dos desenhos contemporâneos.",
      "Mistura aventura e comédia com temas filosóficos e complexos.",
      "Criou um universo vasto e consistente.",
    ],
    curiosity: "A Terra de Ooo é um planeta pós-apocalíptico após a 'Guerra dos Cogumelos', revelada ao longo da série.",
  },
  {
    title: "Apenas um Show",
    subtitle: "Era Check It! (2010-2016)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Regular_Show_Title_Card.png/300px-Regular_Show_Title_Card.png",
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
    title: "O Incrível Mundo de Gumball",
    subtitle: "Era Check It! (2010-2016)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/The_Amazing_World_of_Gumball_title_card.png/300px-The_Amazing_World_of_Gumball_title_card.png",
    paragraphs: [
      "Gumball Watterson, um gato azul, e seu irmão adotivo, Darwin, um peixe de estimação com pernas, causam estragos em Elmore. O desenho se destaca por sua mistura única de estilos de animação (2D, 3D, fantoches e stop-motion).",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Inovação visual ao misturar técnicas de animação.",
      "Humor sarcástico e crítico, com quebras constantes da quarta parede.",
      "Sucesso internacional, sendo produzido no Reino Unido.",
    ],
    curiosity: "Praticamente todos os personagens de fundo são feitos de formas diferentes (fantoches, 3D, objetos reais), criando um mundo visualmente caótico.",
  },
  {
    title: "Steven Universo",
    subtitle: "Era Check It! (2010-2016)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Steven_Universe_logo.png/300px-Steven_Universe_logo.png",
    paragraphs: [
      "Steven é um garoto meio-humano, meio-Gem, que vive com as Crystal Gems: Garnet, Amethyst e Pearl. Ele precisa aprender a usar os poderes da sua pedra mágica para proteger o mundo.",
      "A série é celebrada por seus temas de amor, aceitação, diversidade e representatividade, sendo um marco na animação infantil e adulta.",
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

  // --- ERA DIMENSIONAL/MASHUP & ATUAIS (2017–Presente) ---
  {
    title: "Mundo de Greg",
    subtitle: "Era Dimensional/Mashup (2017-2022)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Craig_of_the_Creek_logo.png/300px-Craig_of_the_Creek_logo.png",
    paragraphs: [
      "Greg Williams e seus amigos exploram o Riacho, uma área natural que se tornou um vasto playground infantil onde crianças organizaram sua própria sociedade com regras, reinos e lendas.",
      "A série celebra a aventura, a criatividade e a organização social das crianças, sendo um sucesso recente aclamado pela crítica por sua representação positiva de amizade e diversidade.",
    ],
    sectionTitle: "Impacto Moderno:",
    listItems: [
      "Foco na construção de mundo através da perspectiva infantil.",
      "É elogiado pela representação de diferentes culturas e identidades.",
      "Mantém o legado do 'slice-of-life' iniciado em Steven Universo e Hora de Aventura.",
    ],
    curiosity: "Os criadores se inspiraram nas suas próprias infâncias para criar o ambiente detalhado e imaginativo do Riacho.",
  },
  {
    title: "Jellystone!",
    subtitle: "Eras Atuais (2022-Presente)",
    bannerUri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jellystone%21_Logo.png/300px-Jellystone%21_Logo.png",
    paragraphs: [
      "Os icônicos personagens da Hanna-Barbera (Zé Colmeia, Catatau, Dom Pixote, etc.) coexistem em uma cidade maluca, com visuais modernizados e dinâmicas de comédia de situação.",
      "A série é uma homenagem aos clássicos com um toque contemporâneo, sendo um dos carros-chefes do canal e do bloco Cartoonito.",
    ],
    sectionTitle: "Destaques:",
    listItems: [
      "Revitalização dos personagens clássicos para uma nova geração.",
      "Comédia rápida e pastelão (slapstick).",
      "Um dos principais conteúdos da HBO Max (Max).",
    ],
    curiosity: "A série foi criada por C.H. Greenblatt, o mesmo criador de Chowder e Harvey Beaks.",
  },
];


// ====================================================================
// 2. COMPONENTES (MANTIDOS E INTACTOS)
//    - Os componentes ListIten e CartoonCard são exatamente iguais ao seu código original.
// ====================================================================

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
      {/* StatusBar ajustada para um tema mais escuro no topo */}
      <StatusBar barStyle="dark-content" backgroundColor="#FFD700" /> 
      {cartoonData.map((cartoon, index) => (
        <CartoonCard key={index} data={cartoon} />
      ))}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

// ====================================================================
// 4. ESTILOS (CORES AJUSTADAS PARA AMARELO/LARANJA)
// ====================================================================

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FFF8DC", // Amarelo claro suave
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    marginTop: 20,
    
    shadowColor: "#FFA500", // Laranja para a sombra
    shadowOpacity: 0.25,
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
    color: "#FF8C00", // Laranja mais forte
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#8B4513", // Marrom para o subtítulo
    marginBottom: 24,
    fontWeight: "600",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333", // Cor de texto padrão
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 12,
    color: "#FF4500", // Laranja avermelhado para títulos de seção
    borderBottomWidth: 2,
    borderBottomColor: "#FFD700", // Amarelo dourado para a linha
    paddingBottom: 4,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  bullet: {
    fontSize: 18,
    color: "#FFD700", // Amarelo dourado para o bullet
    marginRight: 8,
    lineHeight: 24,
    width: 15,
  },
  listText: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
    lineHeight: 24,
  },
});