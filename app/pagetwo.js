import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Platform, StatusBar } from "react-native";

// os imports da imagens 
import imgDexter from "../assets/dexter.png";
import imgAsPowerpuffGirls from "../assets/As Powerpuff Girls.png";
import imgjohnnybravo from "../assets/johnny bravo.png";
import imgEdEddnEddy from "../assets/EdEddnEddy.png";
import imgben10 from "../assets/ben10.jpg";
import imgFostersHomeforImaginaryFriends from "../assets/FostersHomeforImaginaryFriends.jpg";
import imgthegrimadventuresofbillymandy from "../assets/thegrimadventuresofbilly&mandy.png";
import imgChowder from "../assets/chowder1.jpg";
import imgAdventureTime from "../assets/adventuretime.jpg";
import imgGumball from "../assets/gumball.jpg";
import imgStevenUniverse from "../assets/steveuniverse.jpg";
import imgRegularShow from "../assets/regularshow.jpg";
import imgGreg from "../assets/greg.webp";
import imgteentitans from "../assets/TeenTitans.webp";
import imgvictor from "../assets/victor.jpg";
import imgbear from "../assets/bear.jpg";


const FONT_TITLE_WEIGHT = '900';
const FONT_SUBTITLE_WEIGHT = '700';

const CARTOON_NETWORK_ERAS = [
    {
        era: "ERA BLOCK / PRÉ-CHECKERBOARD",
        years: "1992–1996",
        color: "#9C27B0", // Roxo
        description: "Início do canal; vivia de reprises; não tinha muitos originais ainda.",
        content: [
            { type: "title", text: "Desenhos Clássicos em Reprise" },
            { type: "simple", items: [
                "Looney Tunes", "Merrie Melodies", "Tom & Jerry", "Os Flintstones", 
                "Scooby-Doo (reprises)", "Thundercats", "He-Man",
            ]}
        ],
    },
    {
        era: "ERA CHECKERBOARD",
        years: "1996–2004",
        color: "#1B9C46", // Verde
        description: "Nascimento dos Cartoon Cartoons; explosão de originais como Dexter, Meninas Superpoderosas, Johnny Bravo e Corage.",
        content: [
            { type: "title", text: "Desenhos Originais Principais" },
            {
                type: "detail",
                title: "O Laboratório de Dexter (1996)",
                creator: "Genndy Tartakovsky",
                sinopse: "é uma série de animação sobre um menino gênio, Dexter, que constrói um laboratório secreto atrás de uma estante em seu quarto para realizar experimentos científicos. A série acompanha as aventuras e problemas que surgem quando sua irmã mais velha, Dee Dee, descobre o local e atrapalha seus inventos, além dos confrontos com seu arqui-inimigo, Mandark. ",
                imageSource: imgDexter,
                curiosities: [
                    "O Dexter tem sotaque… mas ninguém sabe de onde, Os criadores nunca confirmaram exatamente qual é o sotaque dele. Ele foi inspirado na ideia de cientista europeu, misturando russo, alemão e francês..",
                    "O conceito original surgiu enquanto Tartakovsky estudava no CalArts.",
                    "A voz de Dexter na dublagem original (EUA) era feita por uma mulher, Christine Cavanaugh."
                ],
            },
            {
                type: "detail",
                title: "As Meninas Superpoderosas (1998)",
                creator: "Craig McCracken",
                sinopse: "As Meninas Superpoderosas acompanha as aventuras de Florzinha, Lindinha e Docinho, três garotinhas criadas acidentalmente em um laboratório pelo Professor Utônio ao misturar “açúcar, tempero e tudo de bom” com o misterioso Elemento X. Apesar de serem crianças do jardim de infância, elas usam seus poderes — como força sobre-humana, velocidade, voo e rajadas de energia — para proteger Townsville de criminosos, monstros gigantes, invasões alienígenas e vilões icônicos como Macaco Louco, Ele e a Gangue Gangrena. Entre salvar o mundo e lidar com a vida escolar, as meninas enfrentam desafios que misturam ação, humor e caos colorido.",
                imageSource: imgAsPowerpuffGirls,
                curiosities: [
                    "O curta original de 1992 chamava-se 'Whoopass Stew', mas foi mudado por censura.",
                    "O desenho é conhecido pelo seu estilo visual único, misturando referências de arte pop.",
                    "Craig McCracken foi colega de quarto de Genndy Tartakovsky na faculdade."
                ],
            },
            {
                type: "detail",
                title: "Johnny Bravo (1997)",
                creator: "Van Partible",
                sinopse: "Johnny Bravo segue a vida de Johnny, um jovem musculoso, vaidoso e completamente convencido de que é irresistível para as mulheres — mesmo sendo sempre rejeitado por causa de seu comportamento exagerado e sua completa falta de noção. Morando com a mãe em uma cidade cheia de figuras peculiares, Johnny vive se metendo em confusões ao tentar “conquistar” alguém, o que geralmente termina em trapalhadas, pancadas cartunescas e situações absurdas. A série mistura humor físico, referências à cultura pop, paródias e o estilo clássico de galãs dos anos 50.",
                imageSource: imgjohnnybravo,
                curiosities: [
                    "Johnny Bravo foi inspirado em Elvis Presley e James Dean.",
                    "Seth MacFarlane trabalhou na série. Antes de criar Family Guy, ele foi roteirista e animador em Johnny Bravo, ajudando a definir o tom humorístico.",
                    "Van Partible começou com um curta-metragem sobre Johnny Bravo enquanto estava na universidade."
                ],
            },
            {
                type: "detail",
                title: "Du, Dudu e Edu (Ed, Edd n’ Eddy) (1999)",
                creator: "Danny Antonucci",
                sinopse: "Du, Dudu e Edu acompanha o trio de amigos — Ed (Du), Edd (Dudu) e Eddy (Edu) — que vivem em um bairro suburbano tentando ganhar dinheiro para comprar jumbos picolés, seu doce favorito. Cada episódio mostra os três elaborando planos mirabolantes para enganar as outras crianças do beco, mas tudo quase sempre dá errado de forma caótica e hilária. Enquanto Ed é o fortão bobão, Edd é o inteligente metódico e Eddy é o líder ambicioso cheio de golpes — juntos, eles criam uma comédia cheia de exageros, gritos, objetos gigantes e humor físico.",
                imageSource: imgEdEddnEddy,
                curiosities: [
                    "O traço “tremido” é proposital. As linhas vibrando (o famoso “boiling line”) imitam desenhos feitos à mão tradicionalmente, dando um estilo único e reconhecível.",
                    "Foi o último 'Cartoon Cartoon' original.",
                    "O criador, Danny Antonucci, é canadense."
                ],
            },
        ],
    },
    {
        era: "ERA CITY / PRIMEIRA GRANDE CRISE",
        years: "2004–2010",
        color: "#00BCD4", // Ciano
        description: "Período de transição com desenhos mais variados e experimentais, marcados pela perda de identidade visual.",
        content: [
            { type: "title", text: "Renovação e Animações Modernas" },
            {
                type: "detail",
                title: "Ben 10 (2005)",
                creator: "Man of Action",
                sinopse: "Ben 10 acompanha Ben Tennyson, um garoto de 10 anos que, durante uma viagem de férias com sua prima Gwen e seu avô Max, encontra o Omnitrix, um dispositivo alienígena que se prende ao seu pulso. O relógio permite que Ben se transforme em diferentes espécies alienígenas, cada uma com poderes únicos, como força extrema, fogo, velocidade, invisibilidade e muito mais. Ao longo da jornada, Ben precisa aprender a usar o Omnitrix com responsabilidade enquanto enfrenta vilões como Vilgax e outros seres intergalácticos, além de lidar com a própria imaturidade e impulsividade. A série mistura ação, humor e ficção científica, mostrando a evolução de Ben como herói e como pessoa.",
                imageSource: imgben10,
                curiosities: [
                    "O Omnitrix foi inspirado em relógios de merchandising dos anos 90. Os criadores queriam um objeto simples que crianças imaginassem usar — e virou um dos itens mais vendidos do Cartoon Network.",
                    "O Ben originalmente teria 11 alienígenas. No começo do projeto, o nome seria Ben 11, mas a equipe decidiu reduzir para 10 para ficar mais marcante.",
                    "A série foi ao ar com o canal passando pela crise de identidade da 'Era City'."
                ],
            },
            {
                type: "detail",
                title: "A Mansão Foster para Amigos Imaginários (2004)",
                creator: "Craig McCracken",
                sinopse: "Mansão Foster para Amigos Imaginários se passa em um mundo onde amigos imaginários ganham forma física quando uma criança os cria. Quando a criança cresce e não pode mais cuidar deles, esses amigos são levados para a Mansão Foster, um enorme orfanato comandado pela bondosa Madame Foster. O protagonista, Mac, é um garoto de 8 anos que visita a mansão todos os dias para ver seu amigo imaginário Blooregard Q. Kazoo (Bloo), uma criatura azul travessa e egoísta. Lá, eles convivem com dezenas de amigos imaginários bizarros, divertidos e únicos, vivendo aventuras caóticas, disputas internas e desafios emocionantes ligados a amizade, mudança e responsabilidade.",
                imageSource: imgFostersHomeforImaginaryFriends,
                curiosities: [
                    "Foi a primeira série de McCracken após 'As Meninas Superpoderosas'.",
                    "A Mansão é inspirada na arquitetura vitoriana e no art nouveau.",
                    "Foi um dos primeiros desenhos do CN a ser totalmente animado digitalmente."
                ],
            },
            {
                type: "detail",
                title: "As Terríveis Aventuras de Billy e Mandy (2001 – seguiu forte até 2007)",
                creator: "Maxwell Atoms",
                sinopse: "As Terríveis Aventuras de Billy e Mandy acompanha Billy, um garoto extremamente ingênuo e bobalhão, e Mandy, uma menina fria, sombria e sempre séria. Depois de vencerem uma aposta contra o Puro Osso (Grim) — a própria Morte — os dois obrigam Grim a ser seu melhor amigo para sempre. A partir daí, o trio vive aventuras absurdas envolvendo criaturas sobrenaturais, monstros, deuses antigos, invasões dimensionais e muito humor macabro. A série brinca com terror, fantasia e nonsense, misturando caos, sarcasmo e situações completamente imprevisíveis.",
                imageSource: imgthegrimadventuresofbillymandy,
                curiosities: [
                    "Billy & Mandy surgiu de um curta chamado “Grim & Evil”. No início, a série era dividida com outro desenho chamado Mau e o Mal Encarnado, mas Billy & Mandy foi tão popular que ganhou série própria.",
                    "Maxwell Atoms buscou inspiração em desenhos macabros de sua infância.",
                    "O Puro Osso tem sotaque jamaicano por acaso. O dublador original improvisou o sotaque em um teste, e o criador achou tão engraçado que virou oficial."
                ],
            },
            {
                type: "detail",
                title: "Chowder (2007)",
                creator: "C. H. Greenblatt",
                sinopse: "Chowder se passa na colorida e caótica cidade de Marmalandia, onde o jovem aprendiz de chef Chowder vive trabalhando na cozinha do mestre Mung Daal. Chowder é curioso, guloso e sempre atrapalhado, e por isso acaba transformando qualquer receita em uma aventura absurda. Junto de personagens excêntricos como Shnitzel, Trufas e a apaixonada Panini, ele enfrenta criaturas culinárias, ingredientes vivos e situações totalmente surreais. A série mistura humor pastelão, designs estranhos e muita criatividade visual, sempre brincando com comida, fantasia e quebra da lógica.",
                imageSource: imgChowder,
                curiosities: [
                    "C. H. Greenblatt trabalhou anteriormente em *Bob Esponja Calça Quadrada* e *Billy e Mandy*.",
                    "O desenho é famoso por quebrar a 'quarta parede' constantemente.",
                    "Cada episódio apresenta um estilo visual único, com texturas e padrões incomuns."
                ],
            },
        ],
    },
    {
        era: "ERA CHECK IT",
        years: "2010–2018",
        color: "#FF8C00", // Laranja
        description: "Uma das eras mais influentes, marcada por criatividade, grandes fandoms e o renascimento do CN com grandes sucessos globais.",
        content: [
            { type: "title", text: "Grandes Sucessos da Era Moderna" },
            {
                type: "detail",
                title: "Hora de Aventura (2010)",
                creator: "Pendleton Ward",
                sinopse: "Hora de Aventura acompanha Finn, o último garoto humano conhecido, e seu melhor amigo Jake, um cão mágico capaz de esticar e moldar o corpo de qualquer forma. Os dois vivem na Terra de Ooo, um mundo pós-apocalíptico colorido, cheio de reinos bizarros, criaturas mágicas e personagens excêntricos como a Princesa Jujuba, a Marceline, o Rei Gelado e muitos outros. A série combina humor, fantasia e momentos emocionais, explorando amadurecimento, identidade e a evolução das relações ao longo dos anos. As aventuras começam simples, mas o universo cresce até revelar segredos profundos sobre Ooo, a humanidade e o próprio Finn.",
                imageSource: imgAdventureTime,
                curiosities: [
                    "A série que definiu a nova era do CN.",
                    "Foi inicialmente rejeitada pela Nickelodeon.",
                    "É aclamada por equilibrar humor surreal e temas complexos de maturidade."
                ],
            },
            {
                type: "detail",
                title: "O Incrível Mundo de Gumball (2011)",
                creator: "Ben Bocquelet",
                sinopse: "O Incrível Mundo de Gumball acompanha o dia a dia de Gumball Watterson, um gato azul de 12 anos, e sua família completamente caótica: o peixe adotado Darwin, a irmã gênio Anais, a mãe rígida Nicole e o pai preguiçoso Ricardo. Eles vivem na cidade de Elmore, onde absolutamente tudo pode ganhar vida — de objetos a criaturas de diferentes estilos de animação. As aventuras começam de forma comum, como problemas escolares ou brigas familiares, mas sempre evoluem para situações absurdas, surreais e hilárias. A série mistura humor rápido, crítica social, referências pop e muita criatividade visual.",
                imageSource: imgGumball,
                curiosities: [
                    "É uma produção britânico-americana.",
                    "É notável por usar múltiplos estilos de animação (2D, 3D, fantoche, etc.) em um único episódio.",
                    "Os personagens principais são baseados em desenhos rejeitados de projetos anteriores do criador."
                ],
            },
            {
                type: "detail",
                title: "Steven Universe (2013)",
                creator: "Rebecca Sugar",
                sinopse: "Steven Universo acompanha Steven, o único híbrido entre humano e Gem, vivendo ao lado das Crystal Gems — Garnet, Ametista e Pérola — na cidade litorânea de Beach City. Enquanto aprende a controlar seus poderes herdados de sua mãe, Rose Quartz, Steven precisa ajudar as Gems a proteger a Terra de ameaças vindas do espaço e de guerras antigas entre sua espécie. A série mistura aventura, humor e drama, explorando temas como identidade, família, traumas, empatia e crescimento emocional, enquanto Steven descobre o legado complexo que herdou.",
                imageSource: imgStevenUniverse,
                curiosities: [
                    "Primeira série animada do CN criada exclusivamente por uma mulher.",
                    "É celebrada por sua representação positiva de relacionamentos LGBTQ+ e temas de empatia.",
                    "Rebecca Sugar foi roteirista e artista de *storyboard* em *Hora de Aventura*."
                ],
            },
            {
                type: "detail",
                title: "Regular Show / Apenas um Show (2010)",
                creator: "J. G. Quintel",
                sinopse: "Apenas um Show segue Mordecai, um gaio-azul responsável e tranquilo, e Rigby, um guaxinim preguiçoso e imaturo que adora evitar trabalho. Os dois são funcionários de um parque público e vivem causando confusão enquanto tentam fugir das tarefas que o chefe Benson lhes dá. Situações simples — como arrumar o gramado, jogar videogame ou fazer um lanche — rapidamente se transformam em batalhas cósmicas, monstros gigantes, viagens no tempo e caos absoluto. A série mistura humor absurdo, ação inesperada e elementos sobrenaturais, sempre mostrando a amizade caótica da dupla.",
                imageSource: imgRegularShow,
                curiosities: [
                    "O desenho começou como um curta-metragem de estudante de Quintel na CalArts.",
                    "A série se inspira fortemente na cultura pop dos anos 80 e 90.",
                    "J. G. Quintel deu a voz original a Mordecai e o desenho é parcialmente baseado em seu tempo trabalhando em um cinema."
                ],
            },
        ],
    },
    {
        era: "ERA Dimensional / FASE ATUAL",
        years: "2019–presente",
        color: "#C2185B", // Rosa escuro
        description: "Com foco em *reboots*, séries digitais e híbridos de comédia. Mantém a identidade visual modernizada do canal.",
        content: [
            { type: "title", text: "Fase Recente / Atual" },
            {
                type: "detail",
                title: "O Mundo de Greg (Craig of the Creek) (2018–presente)",
                creator: "Matt Burnett e Ben Levin",
                sinopse: "Craig Williams explora as aventuras selvagens de um riacho em sua cidade, um lugar utópico e cheio de crianças, com seus melhores amigos.",
                imageSource: imgGreg,
                curiosities: [
                    "Os criadores foram roteiristas e editores de storyboard em Steven Universe.",
                    "A série é elogiada por sua diversidade de personagens e temas de comunidade.",
                    "O cenário do riacho é um lugar onde as crianças criam suas próprias regras."
                ],
            },
            {
                type: "detail",
                title: "Os Jovens Titãs em Ação! (Teen Titans Go!) (2013–forte até hoje)",
                creator: "Michael Jelenic e Aaron Horvath",
                sinopse: "Versão cômica e estilizada das vidas de Robin, Estelar, Ravena, Mutano e Ciborgue, focada em comédia e pizza.",
                imageSource: imgteentitans,
                
                curiosities: [
                    "É um spin-off da série Teen Titans (2003-2006).",
                    "É um dos desenhos mais polarizadores do Cartoon Network (amado por crianças, criticado por fãs antigos).",
                    "Apesar das críticas, é um dos maiores sucessos de audiência da última década do CN."
                ],
            },
            {
                type: "detail",
                title: "Victor e Valentino (2019)",
                creator: "Diego Molano",
                sinopse: "Dois meio-irmãos muito diferentes exploram Monte Macabro, uma pequena e misteriosa cidade onde mitos e lendas mesoamericanas ganham vida.",
                imageSource: imgvictor,
                curiosities: [
                    "O criador, Diego Molano, inspirou-se em seu próprio tempo visitando o México com sua avó.",
                    "A série se destaca por usar folclore asteca, maia e olmeca.",
                    "Começou como um curta para o programa de desenvolvimento de talentos do Cartoon Network."
                ],
            },
            {
                type: "detail",
                title: "We Baby Bears (2022)",
                creator: "Manny Hernandez",
                sinopse: "Um *spin-off* de *Urso Sem Curso*, focado nas aventuras de Pardo, Panda e Polar enquanto bebês, viajando pelo mundo em uma caixa mágica.",
                imageSource: imgbear,
                curiosities: [
                    "O estilo de animação é mais vibrante e estilizado do que a série original, *Urso Sem Curso*.",
                    "Cada episódio da série se passa em um local diferente, dando ao programa uma estrutura de 'road trip' mágica.",
                    "Manny Hernandez, o criador, foi diretor de episódios na série original."
                ],
            },
        ],
    },
];


// COMPONENTES DE ESTRUTURA

const CartoonDetail = ({ title, sinopse, creator, curiosities, imageSource }) => (
    <View style={innerStylesCustom.detailCard}>
        {imageSource && (
            <View style={innerStylesCustom.imageContainer}>
                <Image
                    source={imageSource} 
                    style={innerStylesCustom.cartoonImage}
                    resizeMode="cover" 
                />
            </View>
        )}
        <Text style={innerStylesCustom.detailTitle}>{title}</Text>
        <Text style={innerStylesCustom.detailText}><Text style={{ fontWeight: 'bold' }}>Autor:</Text> {creator}</Text>
        <Text style={innerStylesCustom.detailText}><Text style={{ fontWeight: 'bold' }}>Sinopse:</Text> {sinopse}</Text>
        <Text style={innerStylesCustom.detailCuriosityHeader}><Text style={{ fontWeight: 'bold' }}>Curiosidades:</Text></Text>
        <View style={innerStylesCustom.curiosityList}>
            {curiosities.map((c, i) => (
                <Text key={i} style={innerStylesCustom.curiosityItem}>• {c}</Text>
            ))}
        </View>
    </View>
);

const CartoonListItem = ({ items }) => (
    <View style={innerStylesCustom.listCard}>
        {items.map((item, index) => (
            <Text key={index} style={innerStylesCustom.listItemText}>⭐ {item}</Text>
        ))}
    </View>
);

const EraSectionTitle = ({ text }) => (
    <View style={innerStylesCustom.sectionTitleContainer}>
        <Text style={innerStylesCustom.sectionTitleText}>{text}</Text>
    </View>
);

const CartoonEra = ({ era, years, color, description, content }) => (
    <View style={[innerStylesCustom.eraContainer, { borderColor: color }, 
        // Sombra na Web que usa a cor dinâmica da Era
        Platform.OS === 'web' && { boxShadow: `5px 5px 0px ${color}` } 
    ]}>
        <View style={innerStylesCustom.eraHeaderRow}>
            <Text style={[innerStylesCustom.eraTitle, { color: color }]}>{era}</Text>
            <View style={innerStyles.yearBadge}>
                <Text style={innerStyles.yearText}>{years}</Text>
            </View>
        </View>
        <View style={innerStyles.divider} />
        <Text style={innerStylesCustom.eraDescription}>{description}</Text>
        {content.map((item, index) => {
            if (item.type === "detail") {
                return <CartoonDetail key={index} {...item} />;
            }
            if (item.type === "simple") {
                return <CartoonListItem key={index} items={item.items} />;
            }
            if (item.type === "title") {
                return <EraSectionTitle key={index} text={item.text} />;
            }
            return null;
        })}
    </View>
);

// Novo componente wrapper para aplicar o fundo expandido na Web
const WebBackground = ({ children }) => (
    <View style={styles.webContainerWrapper}>
      {children}
    </View>
);


// COMPONENTE PRINCIPAL

export default function Page() {
    
    const PageContent = (
        <View style={styles.mainContainer}>
            {/* Oculta a Status Bar na Web e em dispositivos nativos */}
            {Platform.OS !== 'web' && <StatusBar hidden={true} />}

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={[styles.headerContainer, Platform.OS === 'web' && styles.headerContainerWeb]}>
                    <View style={[styles.headerBadge, 
                        // Sombra do Badge na Web
                        Platform.OS === 'web' && { boxShadow: '3px 3px 0px #303030' } 
                    ]}>
                        <Text style={styles.headerBadgeText}>CN HISTORY</Text>
                    </View>
                    <Text style={styles.mainTitle}>LINHA DO TEMPO DA ANIMAÇÃO</Text>
                    <Text style={styles.subHeader}>DESENHOS E ERAS</Text>
                </View>

                {CARTOON_NETWORK_ERAS.map((era, index) => (
                    <CartoonEra key={index} {...era} />
                ))}

                <View style={innerStyles.footer}>
                    <Text style={innerStyles.footerText}>FIM DA ANÁLISE</Text>
                </View>
            </ScrollView>
        </View>
    );

    // Retorna o conteúdo dentro do WebBackground APENAS se for Web
    if (Platform.OS === 'web') {
      return <WebBackground>{PageContent}</WebBackground>;
    }

    // Retorna o conteúdo diretamente para Mobile/App
    return PageContent;
}


// ESTILOS GLOBAIS E DE LAYOUT

const styles = StyleSheet.create({
   
    // ESTILOS DE CENTRALIZAÇÃO E BACKGROUND EXPANDIDO (WEB)

    webContainerWrapper: {
        // Garante que o container ocupe toda a largura e altura da viewport
        width: '100vw',
        height: '100vh', 
        // *** ALTERADO: Fundo expandido para Amarelo (#FFD700) ***
        backgroundColor: "#FFD700", 

        // Centraliza o conteúdo (mainContainer)
        alignItems: 'center', 
        justifyContent: 'center', 
        overflow: 'auto',
        paddingVertical: 20, // Respiro vertical
    },

    mainContainer: { 
        // flex: 1 é mantido para Mobile
        flex: Platform.OS !== 'web' ? 1 : null,
        backgroundColor: "#FFD700", // Cor de fundo do app (Amarelo)

        // Largura máxima do app centralizado na Web
        maxWidth: Platform.OS === 'web' ? 768 : null,
        
        // Altura na web
        height: Platform.OS === 'web' ? '100%' : 'auto',
    },
    
    // Ajusta o padding do ScrollView
    scrollContent: { 
        padding: 20, 
        paddingBottom: 60, 
        alignItems: "center",
        // Ajusta padding top para Mobile (onde a StatusBar foi escondida)
        paddingTop: Platform.OS === 'web' ? 20 : 0, 
    },
    
    headerContainer: { 
        alignItems: "center", 
        marginBottom: 20, 
        marginTop: 15, 
        width: "100%", 
    },
    
    headerBadge: {
        backgroundColor: "#E30B5C",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 3,
        borderColor: "#FFFFFF",
        // Sombras nativas Android/iOS
        shadowColor: "#303030",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },
    headerBadgeText: { color: "#FFEB3B", fontSize: 14, fontWeight: FONT_TITLE_WEIGHT, letterSpacing: 2 },
    mainTitle: {
        fontSize: 34,
        fontWeight: FONT_TITLE_WEIGHT,
        color: "#C2185B",
        textAlign: 'center',
        marginBottom: 4,
        textShadowColor: 'rgba(255, 255, 255, 0.9)',
        textShadowOffset: { width: 2.5, height: 2.5 },
        textShadowRadius: 0,
        letterSpacing: 1.5,
    },
    subHeader: {
        fontSize: 20,
        color: "#303030",
        fontWeight: FONT_SUBTITLE_WEIGHT,
        textShadowColor: 'rgba(255, 255, 255, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
});

// =================================================================
// ESTILOS DE COMPONENTES INTERNOS
// =================================================================
const innerStyles = StyleSheet.create({
    divider: { height: 4, backgroundColor: "#F06292", marginBottom: 15, marginHorizontal: 15 },
    yearBadge: {
        backgroundColor: "#FFEB3B",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#E30B5C",
        alignSelf: 'flex-start',
        // Sombras nativas Android/iOS
        shadowColor: "#303030",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 3,
        // BOX SHADOW NA WEB
        ...(Platform.OS === 'web' && {
            boxShadow: '1px 1px 0px #303030',
        }),
    },
    yearText: { fontSize: 13, fontWeight: FONT_TITLE_WEIGHT, color: "#E30B5C" },
    footer: { alignItems: "center", marginTop: 15, marginBottom: 20 },
    footerText: { color: "#E30B5C", fontSize: 16, fontWeight: FONT_TITLE_WEIGHT, letterSpacing: 2 },
});

const innerStylesCustom = StyleSheet.create({
    eraContainer: {
        width: "100%",
        maxWidth: 700, // Mantido para que as Eras não se estiquem demais dentro do app
        marginVertical: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        borderWidth: 5,
        
        // Sombra com hardcode para nativo (web é definido na função CartoonEra)
        shadowColor: "#E30B5C",
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 8,
        
        overflow: 'hidden',
        paddingBottom: 5,
    },
    eraHeaderRow: { flexDirection: "row", justifyContent: 'space-between', alignItems: "flex-start", padding: 15, paddingBottom: 10 },
    eraTitle: { fontWeight: FONT_TITLE_WEIGHT, fontSize: 24, flex: 1, marginRight: 10, letterSpacing: 0.5 },
    eraDescription: { fontWeight: FONT_SUBTITLE_WEIGHT, fontSize: 16, textAlign: "left", marginBottom: 15, paddingHorizontal: 15, color: "#555", lineHeight: 22 },
    detailCard: {
        backgroundColor: "#FFF9C4",
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderLeftWidth: 8,
        borderColor: "#F06292",
        borderWidth: 2,
        borderColor: '#FFECB3',
    },
    detailTitle: { fontWeight: FONT_TITLE_WEIGHT, fontSize: 20, color: "#C2185B", marginBottom: 5, marginTop: 5 },
    detailText: { fontSize: 14, lineHeight: 20, color: "#333", marginBottom: 5 },
    detailCuriosityHeader: { fontSize: 14, lineHeight: 20, color: "#C2185B", marginTop: 5 },
    curiosityList: { paddingLeft: 10, marginTop: 5 },
    curiosityItem: { fontSize: 14, color: "#555", lineHeight: 20 },
    listCard: {
        backgroundColor: "#FFEBEE",
        padding: 15,
        marginHorizontal: 15,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFD700',
    },
    listItemText: { fontSize: 16, lineHeight: 24, color: "#303030", fontWeight: FONT_SUBTITLE_WEIGHT },
    sectionTitleContainer: {
        borderBottomWidth: 3,
        borderBottomColor: '#FF69B4',
        marginHorizontal: 15,
        marginBottom: 10,
        paddingBottom: 5,
        alignItems: 'flex-start',
    },
    sectionTitleText: { fontWeight: FONT_TITLE_WEIGHT, fontSize: 18, color: "#C2185B" },
    imageContainer: { alignItems: 'center', marginBottom: 12 },
    cartoonImage: { 
        width: 210, 
        height: 320,
        borderRadius: 9, 
        borderWidth: 7, 
        borderColor: '#C2185B' 
    },
});