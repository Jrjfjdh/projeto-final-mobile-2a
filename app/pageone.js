import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

// --- DADOS ATUALIZADOS COM DETALHES DE DESENHOS E CURIOSIDADES DAS ERAS ---
const historyData = [
  {
    id: 1,
    title: "1992–1996: Era Block (Lançamento)",
    years: "1992–1996",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736ce07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Nos primeiros anos, o Cartoon Network vivia de reprises da Hanna-Barbera e dos Looney Tunes. Tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995, que revelou nomes gigantes como Craig McCracken e Tartakovsky, formando a primeira geração dos Cartoon Cartoons.",
    fullDescription: "Nos primeiros anos (1992–1996), o Cartoon Network vivia quase totalmente de reprises da Hanna-Barbera e dos Looney Tunes. Essa “Era Block” não tinha produções próprias, mas tudo mudou quando Fred Seibert criou o World Premiere Toons em 1995: um bloco para curtas feitos por novos animadores. Dessa iniciativa nasceram nomes gigantes como Craig McCracken, Tartakovsky e David Feiss. Esses curtas formariam a primeira geração dos Cartoon Cartoons. Paralelamente surgiram a expansão para a América Latina e a criação do Boomerang. Esta era é marcada pela transição para as produções originais.",
    eraCuriosities: [
      "Foi a única era do canal que não tinha um logotipo na tela (bug de canal) fixo ou animado; os *bumpers* eram apenas preto e branco.",
      "O lançamento oficial ocorreu no dia 1 de outubro de 1992, com o primeiro programa exibido sendo o curta de *Popeye* 'Down to the Sea'.",
      "O canal dependia quase 100% da vasta biblioteca de desenhos antigos da Hanna-Barbera, MGM e Warner Bros."
    ],
    cartoonDetails: [
      {
        name: "O Laboratório de Dexter (1996)",
        creator: "Genndy Tartakovsky",
        synopsis: "Um garoto gênio constrói um laboratório secreto de alta tecnologia em seu quarto, tentando escondê-lo de seus pais e de sua irmã intrometida e dançarina, Dee Dee.",
        curiosities: [
          "O desenho foi um dos primeiros 'Cartoon Cartoons' completos, nascido do bloco 'What a Cartoon!'.",
          "O conceito original surgiu enquanto Tartakovsky estudava no CalArts (Instituto de Artes da Califórnia).",
          "A voz de Dexter na dublagem original (EUA) era feita por uma mulher, Christine Cavanaugh, para dar um toque mais 'cientista infantil'."
        ]
      },
      {
        name: "As Meninas Superpoderosas (1998)",
        creator: "Craig McCracken",
        synopsis: "Três irmãs super-heroínas (Florzinha, Lindinha e Docinho) criadas acidentalmente pelo Professor Utônio defendem Townsville de vilões como Macaco Louco.",
        curiosities: [
          "Originalmente, o nome das personagens era 'The Whoopass Girls', mas foi mudado para 'Powerpuff Girls' por questões de censura.",
          "O desenho é conhecido pelo seu estilo visual único, misturando referências de arte pop e um design minimalista.",
          "Craig McCracken foi colega de quarto de Genndy Tartakovsky na faculdade, e ambos tiveram seus desenhos lançados na mesma época."
        ]
      },
      {
        name: "Johnny Bravo (1997)",
        creator: "Van Partible",
        synopsis: "Um fortão musculoso, auto-proclamado 'sedutor', mas ingênuo, tenta (e falha miseravelmente) em conseguir encontros, morando com sua mãe, Bunny Bravo.",
        curiosities: [
          "O personagem Johnny Bravo foi inspirado em Elvis Presley, James Dean e nos movimentos de dança de Michael Jackson.",
          "O desenho foi cancelado e depois revivido para uma terceira e quarta temporada, com uma mudança sutil no estilo de animação.",
          "Van Partible começou com um curta-metragem sobre Johnny Bravo enquanto estudava Loyola Marymount University."
        ]
      },
      {
        name: "Du, Dudu e Edu (Ed, Edd n’ Eddy) (1999)",
        creator: "Danny Antonucci",
        synopsis: "Três amigos com o mesmo nome (Ed, Edd e Eddy) fazem planos mirabolantes e golpes infalíveis para conseguir dinheiro e comprar seu doce favorito: 'sazone' (jujubas grandes).",
        curiosities: [
          "O desenho é famoso pela sua animação 'nervosa' ou 'oscilante', que foi intencional para dar a sensação de um desenho antigo, desenhado à mão.",
          "Foi o último 'Cartoon Cartoon' original e, por muito tempo, a série original do CN a ficar mais tempo no ar.",
          "O criador, Danny Antonucci, é canadense, o que faz deste um dos primeiros sucessos de animação produzidos no Canadá para o Cartoon Network dos EUA."
        ]
      },
    ]
  },
  {
    id: 2,
    title: "1992–1999: Era Checkerboard (Consolidação)",
    years: "1992–1999",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png",
    description: "O canal engrenou com séries originais de sucesso como Dexter, Meninas Superpoderosas, Johnny Bravo, Du Dudu e Edu e Coragem. O bloco What a Cartoon! continuou revelando novas criações. A estética quadriculada virou marca registrada.",
    fullDescription: "Com a Era Checkerboard (1992–1999), o canal finalmente engrenou com séries originais de sucesso. O bloco 'What a Cartoon!' continuou revelando novas criações. A estética quadriculada e os *bumpers* criativos viraram marca registrada. Nessa fase também chegaram animações da Warner como *Animaniacs* e *Pink & Cérebro*. Ao final dos anos 90, o canal teria um novo competidor poderoso: os animes (que geraram a Era Powerhouse).",
    eraCuriosities: [
      "O nome da era vem do padrão quadriculado (xadrez/checkerboard) que era o tema principal das vinhetas, embora o logotipo principal ainda fosse preto e branco.",
      "Nessa fase, o canal lançou seu primeiro *show* original, *The Moxy Show* (1993), uma série de comédia com animação 3D e *live-action*.",
      "O bloco *What a Cartoon!* (1995) foi o motor dessa era, gastando milhões de dólares para criar curtas que dariam origem a todos os *Cartoon Cartoons* clássicos."
    ],
    cartoonDetails: []
  },
  {
    id: 3,
    title: "1999–2004: Era Powerhouse (O Auge)",
    years: "1999–2004",
    image: "https://images.unsplash.com/photo-1614726365723-49dc46e7e797?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Marcou o auge do canal. Com o bloco Toonami, chegaram animes de sucesso (Dragon Ball, Pokémon, Yu Yu Hakusho). O Adult Swim ganhou mais força, e o canal virou fenômeno cultural, atingindo seu ponto máximo de popularidade.",
    fullDescription: "A Era Powerhouse (1999–2004) marcou o auge. Com o bloco **Toonami**, chegaram *Dragon Ball*, *Pokémon*, *Yu Yu Hakusho*, *Cavaleiros do Zodíaco*, entre muitos outros. Os desenhos clássicos migraram para o canal Boomerang. O **Adult Swim** ganhou mais força, exibindo animações adultas. O canal virou fenômeno cultural, lançou o filme das Meninas Superpoderosas e atingiu seu ponto máximo de popularidade.",
    eraCuriosities: [
      "O tema musical mais famoso da era, usado nas vinhetas (*bumpers*), era uma música *lounge* jazz/surf-rock com o nome de 'Powerhouse', do compositor Raymond Scott, feita para a Warner Bros. nos anos 40.",
      "Foi a era em que o bloco **Toonami** se consolidou, popularizando animes como *Dragon Ball Z* e *Pokémon* para o público ocidental.",
      "As vinhetas eram notórias por apresentar *crossovers* surreais e estilizados entre personagens de diferentes desenhos, como *Dexter* encontrando *Coragem*."
    ],
    cartoonDetails: []
  },
  {
    id: 4,
    title: "2004–2010: Era City (Primeira Grande Crise) | Renovação e Animações Modernas",
    years: "2004–2010",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Crise marcada pela saída de Ted Turner e mudanças mal recebidas. O logo virou 'CN'. Apesar disso, surgiram boas animações como **Mansão Foster**, **Flapjack** e o fenômeno **Ben 10**.",
    fullDescription: "A Era City (2004–2010) marcou a primeira grande crise. Ted Turner saiu, o clássico logotipo virou 'CN'. A programação ficou dominada por reprises de *Naruto* e *Ben 10*. Mesmo com a crise, essa era trouxe uma renovação com desenhos mais experimentais, que foram a base para a recuperação do canal.",
    eraCuriosities: [
      "Foi a era com o conceito de *crossover* mais ambicioso, transformando todos os personagens em 'vizinhos' vivendo juntos na mesma cidade (*CN City*).",
      "O logo foi abreviado para 'CN' e perdeu o estilo preto e branco, buscando uma estética mais moderna e *clean*.",
      "O canal exibiu um *bumper* em homenagem a Joseph Barbera após sua morte em 2006, reconhecendo a importância da Hanna-Barbera para a origem do canal."
    ],
    cartoonDetails: [
      {
        name: "Ben 10 (2005)",
        creator: "Man of Action (Joe Casey, Joe Kelly, Duncan Rouleau, Steven T. Seagle)",
        synopsis: "O jovem Ben Tennyson encontra um relógio alienígena chamado Omnitrix, que lhe permite se transformar em dez heróis alienígenas diferentes para combater o mal.",
        curiosities: [
          "A equipe 'Man of Action' é um coletivo de quatro criadores de quadrinhos e animações.",
          "Ben 10 foi um sucesso comercial tão grande que gerou quatro séries originais e três reboots/reimaginações.",
          "Originalmente, Ben só teria 10 transformações, mas a popularidade levou à adição de mais aliens e novos Omnitrixes."
        ]
      },
      {
        name: "A Mansão Foster para Amigos Imaginários (2004)",
        creator: "Craig McCracken",
        synopsis: "Mac, um garoto de 8 anos, visita diariamente a Mansão Foster, um lar para amigos imaginários abandonados, para passar tempo com seu próprio amigo, Bloo.",
        curiosities: [
          "Foi a primeira série de McCracken após 'As Meninas Superpoderosas'.",
          "A Mansão é inspirada na arquitetura vitoriana e no *art nouveau*.",
          "O desenho foi um dos primeiros do CN a ser totalmente animado digitalmente, abandonando o método de tinta e pintura cel."
        ]
      },
      {
        name: "As Terríveis Aventuras de Billy e Mandy (2001 – seguiu forte até 2007)",
        creator: "Maxwell Atoms",
        synopsis: "Duas crianças, o ingênuo Billy e a cínica Mandy, forçam o Ceifador (Grim) a ser seu melhor amigo, após vencerem uma aposta de limbo.",
        curiosities: [
          "O desenho começou como um segmento do 'Grim & Evil', dividindo tempo com 'Evil Con Carne'.",
          "Maxwell Atoms buscou inspiração em desenhos macabros de sua infância, como 'Pica-Pau' e 'Looney Tunes'.",
          "O Ceifador, mesmo sendo uma entidade poderosa, é frequentemente humilhado e tratado como servo pelas crianças."
        ]
      },
      {
        name: "Chowder (2007)",
        creator: "C. H. Greenblatt",
        synopsis: "As aventuras de Chowder, um jovem aprendiz de chef fofo, mas desastrado, que trabalha na empresa de catering Mung Daal.",
        curiosities: [
          "C. H. Greenblatt trabalhou anteriormente em *Bob Esponja Calça Quadrada* e *As Terríveis Aventuras de Billy e Mandy*.",
          "O desenho é famoso por quebrar a 'quarta parede' constantemente, interagindo diretamente com o espectador.",
          "Cada episódio apresenta um estilo visual único, com texturas e padrões incomuns, parecendo um *scrapbook* animado."
        ]
      },
    ]
  },
  {
    id: 5,
    title: "2010–2012: Era Toonix (Fundo do Poço) | Nova Onda CN",
    years: "2010–2012",
    image: "https://images.unsplash.com/photo-1515601777675-d308909cc3eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Considerada o fundo do poço, com mascotes genéricos, cortes de aberturas e live-action. No entanto, nasceram os pilares que salvariam o canal: **Hora de Aventura**, **Apenas um Show** e **Gumball**.",
    fullDescription: "A Era Toonix (2010–2012) é considerada o fundo do poço devido à baixa qualidade de muitos *live-actions* e a perda de identidade visual. No entanto, essa fase marca o nascimento da 'Nova Onda CN', um movimento de animações que se tornaram sucessos globais e salvaram o canal da crise, criando uma nova geração de fãs e fandoms.",
    eraCuriosities: [
      "Na América Latina (incluindo o Brasil), os mascotes eram chamados de **Toonix**, enquanto nos EUA eram chamados de **Noods**.",
      "Essa era focou muito na interação digital, permitindo aos usuários criarem seus próprios avatares Toonix no site, refletindo a crescente popularidade da internet na época.",
      "Apesar de ser vista como um período de crise, foi nela que *Hora de Aventura* e *Apenas um Show* estrearam, salvando o canal e abrindo caminho para a nova era de ouro."
    ],
    cartoonDetails: [
      {
        name: "Hora de Aventura (2010)",
        creator: "Pendleton Ward",
        synopsis: "As aventuras do garoto humano Finn e seu melhor amigo e irmão adotivo, Jake, um cão com poderes de mudar de forma, na terra pós-apocalíptica e mágica de Ooo.",
        curiosities: [
          "O desenho foi inicialmente recusado pelo Nicktoons e só foi aceito pelo Cartoon Network após um curta viral.",
          "A série é aclamada por equilibrar humor surreal e temas complexos de maturidade, amor e existencialismo.",
          "Pendleton Ward deixou o cargo de *showrunner* após a quarta temporada para se concentrar na escrita, mas continuou envolvido criativamente."
        ]
      },
      {
        name: "O Incrível Mundo de Gumball (2011)",
        creator: "Ben Bocquelet",
        synopsis: "Acompanha Gumball Watterson, um gato azul de 12 anos, e seu irmão adotivo e melhor amigo, Darwin, um peixe dourado que ganhou pernas, em suas vidas caóticas em Elmore.",
        curiosities: [
          "É uma produção britânico-americana, e a série é notável por usar múltiplos estilos de animação (2D, 3D, fantoche, stop-motion) em um único episódio.",
          "O conceito foi criado por Ben Bocquelet quando ele trabalhava em uma agência de publicidade, originalmente para um programa sobre uma escola de super-heróis falidos.",
          "Os personagens principais são baseados em desenhos rejeitados de projetos anteriores de Bocquelet."
        ]
      },
      {
        name: "Steven Universe (2013)",
        creator: "Rebecca Sugar",
        synopsis: "Steven Universe, um garoto meio-humano meio-Gem, vive com as Crystal Gems (Garnet, Ametista e Pérola) na cidade de Beach City, aprendendo a usar seus poderes para proteger a Terra.",
        curiosities: [
          "Foi a primeira série original do Cartoon Network criada por uma mulher (Rebecca Sugar).",
          "A série é celebrada por sua representação positiva de relacionamentos LGBTQ+ e temas de autoaceitação e empatia.",
          "Rebecca Sugar foi roteirista e artista de *storyboard* em *Hora de Aventura* antes de criar *Steven Universe*."
        ]
      },
      {
        name: "Regular Show / Apenas um Show (2010)",
        creator: "J. G. Quintel",
        synopsis: "Mordecai (um gaio-azul) e Rigby (um guaxinim), dois zeladores na casa de um parque, transformam tarefas mundanas em aventuras surreais e frequentemente perigosas.",
        curiosities: [
          "O desenho começou como um curta-metragem de estudante de Quintel na CalArts.",
          "A série se inspira fortemente na cultura pop dos anos 80 e 90, especialmente em videogames.",
          "J. G. Quintel deu a voz original a Mordecai e Rigby (parcialmente) é baseada em seu tempo trabalhando em um cinema."
        ]
      },
    ]
  },
  {
    id: 6,
    title: "2012–Atual: Era Check It (Recuperação) | Fase Recente / Atual",
    years: "2012–atual",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "O canal se recuperou com foco em animação original. Surgiram sucessos gigantes como **Steven Universo**, **Urso Sem Curso** e **Over The Garden Wall**. Enfrenta críticas pelo excesso de comédias *nonsense* e *reboots*.",
    fullDescription: "Com a Era Check It (2012–atual), o canal finalmente se recuperou, com o foco voltando para a animação original. Surgiram sucessos gigantes e aclamados. Nos últimos anos, o canal tem investido em *reboots* polêmicos (*Teen Titans Go!*) e séries que se beneficiam das plataformas de streaming, mantendo a relevância no cenário da animação.",
    eraCuriosities: [
      "Essa era marcou o retorno ao visual quadriculado preto e branco das primeiras eras (Checkerboard/Powerhouse), mas com um estilo minimalista e moderno.",
      "O canal celebrou seu 20º aniversário no início dessa era (2012), usando-a como um ponto de virada para renovar a programação de animações.",
      "Nas versões mais recentes (Check It 3.0 em diante), os *bumpers* começaram a usar objetos reais como tecidos e *biscuit* (massinha) para compor as cenas com os personagens."
    ],
    cartoonDetails: [
      {
        name: "O Mundo de Greg (Craig of the Creek) (2018–presente)",
        creator: "Matt Burnett e Ben Levin",
        synopsis: "Craig Williams, de 10 anos, explora as aventuras selvagens de um riacho em sua cidade, um lugar utópico e cheio de crianças, com seus melhores amigos, Kelsey e J.P.",
        curiosities: [
          "Os criadores Matt Burnett e Ben Levin foram roteiristas e editores de *storyboard* em *Steven Universe*.",
          "A série é elogiada por sua diversidade de personagens e a exploração de temas de comunidade e pertencimento.",
          "O cenário do riacho é um lugar onde as crianças criam suas próprias regras, refletindo a liberdade imaginativa da infância."
        ]
      },
      {
        name: "Os Jovens Titãs em Ação! (Teen Titans Go!) (2013–forte até hoje)",
        creator: "Michael Jelenic e Aaron Horvath",
        synopsis: "Versão cômica e estilizada das vidas de Robin, Estelar, Ravena, Mutano e Ciborgue, que passam o tempo livre se divertindo e comendo pizza, geralmente com o objetivo de irritar uns aos outros.",
        curiosities: [
          "É um *spin-off* da série *Teen Titans* (2003-2006), mas com foco total na comédia e no absurdo.",
          "O desenho é um dos mais polarizadores do Cartoon Network: adorado por crianças, mas frequentemente criticado por fãs da série original.",
          "Apesar das críticas, é um dos maiores sucessos de audiência da última década do CN."
        ]
      },
      {
        name: "Victor e Valentino (2019)",
        creator: "Diego Molano",
        synopsis: "Dois meio-irmãos muito diferentes exploram Monte Macabro, uma pequena e misteriosa cidade onde mitos e lendas mesoamericanas ganham vida.",
        curiosities: [
          "O criador, Diego Molano, inspirou-se em seu próprio tempo visitando o México com sua avó.",
          "A série se destaca por usar folclore asteca, maia e olmeca, introduzindo culturas latino-americanas no *mainstream* da animação.",
          "Começou como um curta para o programa de desenvolvimento de talentos do Cartoon Network."
        ]
      },
      {
        name: "We Baby Bears (2022)",
        creator: "Manny Hernandez",
        synopsis: "Um *spin-off* de *Urso Sem Curso*, focado nas aventuras de Pardo, Panda e Polar enquanto bebês, viajando pelo mundo em uma caixa mágica em busca de um lugar para chamar de lar.",
        curiosities: [
          "O estilo de animação é mais vibrante e estilizado do que a série original, *Urso Sem Curso* (*We Bare Bears*).",
          "Cada episódio da série se passa em um local diferente, dando ao programa uma estrutura de 'road trip' mágica.",
          "Manny Hernandez, o criador, foi diretor de episódios na série original."
        ]
      },
    ]
  },
];
// --- FIM DOS DADOS ATUALIZADOS ---

// --- COMPONENTE PRINCIPAL (PageOne.js) ---
export default function PageOne() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // --- NOVO COMPONENTE PARA CURIOSIDADES DA ERA (CuriositiesSection) ---
  const CuriositiesSection = ({ title, curiosities }) => (
    <View style={styles.eraCuriositiesContainer}>
      <Text style={styles.eraCuriositiesHeader}>CURIOSIDADES DA ERA 🧠</Text>
      <View style={styles.curiositiesList}>
        {curiosities.map((c, i) => (
          <View key={i} style={styles.curiosityItem}>
            <Text style={styles.curiosityText}>• {c}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  // --- COMPONENTE DE DETALHES DE DESENHOS (REUTILIZADO) ---
  const CartoonDetails = ({ details }) => (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsHeader}>CARTOON CARTOONS DESTAQUE 🌟</Text>
      {details.map((cartoon, index) => (
        <View key={index} style={styles.cartoonItem}>
          <Text style={styles.cartoonName}>**{cartoon.name}**</Text>
          <Text style={styles.cartoonCreator}>Criador: *{cartoon.creator}*</Text>
          <Text style={styles.cartoonSynopsis}>
            **Sinopse:** {cartoon.synopsis}
          </Text>
          <Text style={styles.cartoonCuriositiesHeader}>Curiosidades do Desenho:</Text>
          <View style={styles.curiositiesList}>
            {cartoon.curiosities.map((c, i) => (
              <View key={i} style={styles.curiosityItem}>
                <Text style={styles.curiosityText}>• {c}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
  // ----------------------------------------------------

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#FF5722" />

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
            
            <Image
              style={styles.cardImage}
              source={{ uri: item.image }}
            />
            
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
                {item.description}
              </Text>
              
              {/* --- LÓGICA DE EXIBIÇÃO: SE ESTIVER EXPANDIDO, MOSTRA TUDO --- */}
              {expandedCard === item.id && (
                <>
                  <Text style={styles.fullDescriptionText}>
                    {item.fullDescription}
                  </Text>
                  
                  {/* NOVO - Exibição das Curiosidades da Era */}
                  {item.eraCuriosities.length > 0 && (
                      <CuriositiesSection curiosities={item.eraCuriosities} />
                  )}
                  
                  {/* Exibição dos Detalhes dos Desenhos (se houver) */}
                  {item.cartoonDetails.length > 0 && (
                    <CartoonDetails details={item.cartoonDetails} />
                  )}
                </>
              )}
              {/* ------------------------------------------------------------------------------------------ */}

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
  mainContainer: {
    flex: 1,
    backgroundColor: "#FBC02D",
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

  // Estilos do Card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#D32F2F",
    shadowOpacity: 0.3,
    shadowOffset: { width: 4, height: 6 },
    shadowRadius: 10,
    elevation: 8,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#303F9F",
  },
  cardImage: {
    width: "100%",
    height: 160,
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
  cardDescription: { // Descrição inicial (curta)
    fontSize: 16,
    lineHeight: 26,
    color: "#212121",
    textAlign: "justify",
    fontWeight: "500",
    marginBottom: 15,
  },
  fullDescriptionText: { // Descrição completa
    fontSize: 16,
    lineHeight: 26,
    color: "#212121",
    textAlign: "justify",
    fontWeight: "500",
    marginBottom: 20, // Espaço antes dos detalhes
    paddingTop: 10, // Um pequeno respiro para o texto completo
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },

  // Estilos do Botão "Ler Mais"
  readMoreButton: {
    alignSelf: 'center', // Centraliza o botão
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginTop: 10,
    marginBottom: 5,
  },
  readMoreText: {
    color: '#D32F2F',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: 1,
  },
  
  // --- NOVOS ESTILOS PARA CURIOSIDADES DA ERA ---
  eraCuriositiesContainer: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#303F9F', // Azul para destacar
    marginBottom: 20,
    backgroundColor: '#E3F2FD', // Fundo levemente azulado
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  eraCuriositiesHeader: {
    fontSize: 18,
    fontWeight: '900',
    color: '#D32F2F',
    marginBottom: 10,
    textAlign: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#FF5722',
  },
  // --- FIM NOVOS ESTILOS PARA CURIOSIDADES DA ERA ---


  // --- NOVOS ESTILOS PARA DETALHES DOS DESENHOS (REAPROVEITADOS/AJUSTADOS) ---
  detailsContainer: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: '#FFEB3B', // Amarelo para destacar a seção
    marginBottom: 20,
    backgroundColor: '#FFFDE7', // Fundo levemente amarelado
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  detailsHeader: {
    fontSize: 18,
    fontWeight: '900',
    color: '#303F9F',
    marginBottom: 10,
    textAlign: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#FF5722',
  },
  cartoonItem: {
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  cartoonName: {
    fontSize: 18,
    fontWeight: '900',
    color: '#D32F2F',
    marginBottom: 5,
  },
  cartoonCreator: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#424242',
    marginBottom: 8,
  },
  cartoonSynopsis: {
    fontSize: 15,
    color: '#212121',
    marginBottom: 10,
    lineHeight: 22,
  },
  cartoonCuriositiesHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#303F9F',
    marginTop: 5,
    marginBottom: 5,
  },
  curiositiesList: {
    paddingLeft: 5,
  },
  curiosityItem: {
    marginBottom: 3,
  },
  curiosityText: {
    fontSize: 14,
    color: '#424242',
    lineHeight: 20,
  },
});