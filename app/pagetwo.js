import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import imgDexter from "../assets/dexter.png";
import imgAsPowerpuffGirls from "../assets/As Powerpuff Girls.png";
import imgjohnnybravo from "../assets/johnny bravo.png";
import imgEdEddnEddy from "../assets/EdEddnEddy.png";
import imgben10 from "../assets/ben10.jpg";
import imgFostersHomeforImaginaryFriends from "../assets/FostersHomeforImaginaryFriends.jpg";
import imgthegrimadventuresofbillymandy from "../assets/thegrimadventuresofbilly&mandy.png";

const FONT_TITLE_WEIGHT = '900';
const FONT_SUBTITLE_WEIGHT = '700';

const CARTOON_NETWORK_ERAS = [
    {
        era: "ERA BLOCK / PRÉ-CHECKERBOARD",
        years: "1992–1996",
        color: "#9C27B0",
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
        color: "#1B9C46",
        description: "Nascimento dos Cartoon Cartoons; explosão de originais como Dexter, Meninas Superpoderosas, Johnny Bravo e Coragem.",
        content: [
            { type: "title", text: "Desenhos Originais Principais" },
            {
                type: "detail",
                title: "O Laboratório de Dexter (1996)",
                creator: "Genndy Tartakovsky",
                sinopse: "é uma série de animação sobre um menino gênio, Dexter, que constrói um laboratório secreto atrás de uma estante em seu quarto para realizar experimentos científicos. A série acompanha as aventuras e problemas que surgem quando sua irmã mais velha, Dee Dee, descobre o local e atrapalha seus inventos, além dos confrontos com seu arqui-inimigo, Mandark. ",
                imageSource: imgDexter,
                curiosities: [
                    "Foi um dos primeiros 'Cartoon Cartoons' completos, nascido do bloco 'What a Cartoon!'.",
                    "O conceito original surgiu enquanto Tartakovsky estudava no CalArts.",
                    "A voz de Dexter na dublagem original (EUA) era feita por uma mulher, Christine Cavanaugh."
                ],
            },
            {
                type: "detail",
                title: "As Meninas Superpoderosas (1998)",
                creator: "Craig McCracken",
                sinopse: "Três meninas super-heroínas usam seus superpoderes para salvar a cidade de Townsville.",
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
                sinopse: "Um fortão musculoso, auto-proclamado 'sedutor', mas ingênuo, tenta (e falha miseravelmente) em conseguir encontros.",
                imageSource: imgjohnnybravo,
                curiosities: [
                    "Johnny Bravo foi inspirado em Elvis Presley e James Dean.",
                    "O desenho foi cancelado e depois revivido para uma terceira e quarta temporada.",
                    "Van Partible começou com um curta-metragem sobre Johnny Bravo enquanto estava na universidade."
                ],
            },
            {
                type: "detail",
                title: "Du, Dudu e Edu (Ed, Edd n’ Eddy) (1999)",
                creator: "Danny Antonucci",
                sinopse: "Três amigos com o mesmo nome fazem planos mirabolantes para conseguir dinheiro e comprar seu doce favorito: 'sazone' (jujubas grandes).",
                imageSource: imgEdEddnEddy,
                curiosities: [
                    "É famoso pela sua animação 'nervosa' ou 'oscilante', que foi intencional.",
                    "Foi o último 'Cartoon Cartoon' original.",
                    "O criador, Danny Antonucci, é canadense."
                ],
            },
        ],
    },
    {
        era: "ERA CITY / PRIMEIRA GRANDE CRISE",
        years: "2004–2010",
        color: "#00BCD4",
        description: "Período de transição com desenhos mais variados e experimentais, marcados pela perda de identidade visual.",
        content: [
            { type: "title", text: "Renovação e Animações Modernas" },
            {
                type: "detail",
                title: "Ben 10 (2005)",
                creator: "Man of Action",
                sinopse: "O jovem Ben Tennyson encontra o Omnitrix, que lhe permite se transformar em dez heróis alienígenas diferentes para combater o mal.",
                imageSource: imgben10,
                curiosities: [
                    "A equipe 'Man of Action' é um coletivo de quatro criadores de quadrinhos.",
                    "Ben 10 foi um sucesso comercial tão grande que gerou quatro séries originais e três reboots.",
                    "A série foi ao ar com o canal passando pela crise de identidade da 'Era City'."
                ],
            },
            {
                type: "detail",
                title: "A Mansão Foster para Amigos Imaginários (2004)",
                creator: "Craig McCracken",
                sinopse: "Mac visita diariamente a Mansão Foster, um lar para amigos imaginários abandonados, para passar tempo com seu amigo Bloo.",
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
                sinopse: "Duas crianças, o ingênuo Billy e a cínica Mandy, forçam o Ceifador (Grim) a ser seu melhor amigo.",
                imageSource: imgthegrimadventuresofbillymandy,
                curiosities: [
                    "O desenho começou como um segmento do 'Grim & Evil'.",
                    "Maxwell Atoms buscou inspiração em desenhos macabros de sua infância.",
                    "O Ceifador é frequentemente humilhado e tratado como servo pelas crianças."
                ],
            },
            {
                type: "detail",
                title: "Chowder (2007)",
                creator: "C. H. Greenblatt",
                sinopse: "As aventuras de Chowder, um jovem aprendiz de chef fofo, mas desastrado, que trabalha na empresa de catering Mung Daal.",
                curiosities: [
                    "C. H. Greenblatt trabalhou anteriormente em *Bob Esponja Calça Quadrada* e *Billy e Mandy*.",
                    "O desenho é famoso por quebrar a 'quarta parede' constantemente.",
                    "Cada episódio apresenta um estilo visual único, com texturas e padrões incomuns."
                ],
            },
        ],
    },
    {
        era: "ERA TOONIX / NOVA ONDA CN",
        years: "2010–2018",
        color: "#FF8C00",
        description: "Uma das eras mais influentes, marcada por criatividade, grandes fandoms e o renascimento do CN com grandes sucessos globais.",
        content: [
            { type: "title", text: "Grandes Sucessos da Era Moderna" },
            {
                type: "detail",
                title: "Hora de Aventura (2010)",
                creator: "Pendleton Ward",
                sinopse: "Finn, o humano, e Jake, o cão, exploram a terra pós-apocalíptica e mágica de Ooo.",
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
                sinopse: "Acompanha Gumball Watterson (gato azul) e seu irmão adotivo Darwin (peixe dourado) em suas vidas caóticas em Elmore.",
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
                sinopse: "Steven Universe, um garoto meio-humano/meio-Gem, vive com as Crystal Gems, aprendendo a usar seus poderes.",
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
                sinopse: "Mordecai (gaio-azul) e Rigby (guaxinim) transformam tarefas mundanas de zeladoria em aventuras surreais e perigosas.",
                curiosities: [
                    "O desenho começou como um curta-metragem de estudante de Quintel na CalArts.",
                    "A série se inspira fortemente na cultura pop dos anos 80 e 90.",
                    "J. G. Quintel deu a voz original a Mordecai e o desenho é parcialmente baseado em seu tempo trabalhando em um cinema."
                ],
            },
        ],
    },
    {
        era: "ERA CHECK IT / FASE ATUAL",
        years: "2019–presente",
        color: "#C2185B",
        description: "Com foco em *reboots*, séries digitais e híbridos de comédia. Mantém a identidade visual modernizada do canal.",
        content: [
            { type: "title", text: "Fase Recente / Atual" },
            {
                type: "detail",
                title: "O Mundo de Greg (Craig of the Creek) (2018–presente)",
                creator: "Matt Burnett e Ben Levin",
                sinopse: "Craig Williams explora as aventuras selvagens de um riacho em sua cidade, um lugar utópico e cheio de crianças, com seus melhores amigos.",
                curiosities: [
                    "Os criadores foram roteiristas e editores de *storyboard* em *Steven Universe*.",
                    "A série é elogiada por sua diversidade de personagens e temas de comunidade.",
                    "O cenário do riacho é um lugar onde as crianças criam suas próprias regras."
                ],
            },
            {
                type: "detail",
                title: "Os Jovens Titãs em Ação! (Teen Titans Go!) (2013–forte até hoje)",
                creator: "Michael Jelenic e Aaron Horvath",
                sinopse: "Versão cômica e estilizada das vidas de Robin, Estelar, Ravena, Mutano e Ciborgue, focada em comédia e pizza.",
                curiosities: [
                    "É um *spin-off* da série *Teen Titans* (2003-2006).",
                    "É um dos desenhos mais polarizadores do Cartoon Network (amado por crianças, criticado por fãs antigos).",
                    "Apesar das críticas, é um dos maiores sucessos de audiência da última década do CN."
                ],
            },
            {
                type: "detail",
                title: "Victor e Valentino (2019)",
                creator: "Diego Molano",
                sinopse: "Dois meio-irmãos muito diferentes exploram Monte Macabro, uma pequena e misteriosa cidade onde mitos e lendas mesoamericanas ganham vida.",
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
                curiosities: [
                    "O estilo de animação é mais vibrante e estilizado do que a série original, *Urso Sem Curso*.",
                    "Cada episódio da série se passa em um local diferente, dando ao programa uma estrutura de 'road trip' mágica.",
                    "Manny Hernandez, o criador, foi diretor de episódios na série original."
                ],
            },
        ],
    },
];

const CartoonDetail = ({ title, sinopse, creator, curiosities, imageSource }) => (
    <View style={innerStylesCustom.detailCard}>
        {imageSource && (
            <View style={innerStylesCustom.imageContainer}>
                <Image
                    source={imageSource} 
                    style={innerStylesCustom.cartoonImage}
                    resizeMode="contain"
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
    <View style={[innerStylesCustom.eraContainer, { borderColor: color }]}>
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

export default function Page() {
    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerBadge}>
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
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: "#FFD700" },
    scrollContent: { padding: 20, paddingBottom: 60, alignItems: "center" },
    headerContainer: { alignItems: "center", marginBottom: 20, marginTop: 15, width: "100%", maxWidth: 700 },
    headerBadge: {
        backgroundColor: "#E30B5C",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 3,
        borderColor: "#FFFFFF",
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
        shadowColor: "#303030",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    yearText: { fontSize: 13, fontWeight: FONT_TITLE_WEIGHT, color: "#E30B5C" },
    footer: { alignItems: "center", marginTop: 15, marginBottom: 20 },
    footerText: { color: "#E30B5C", fontSize: 16, fontWeight: FONT_TITLE_WEIGHT, letterSpacing: 2 },
});

const innerStylesCustom = StyleSheet.create({
    eraContainer: {
        width: "100%",
        maxWidth: 700,
        marginVertical: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        borderWidth: 5,
        borderColor: "#9C27B0",
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
    cartoonImage: { width: 160, height: 160, borderRadius: 8, borderWidth: 1, borderColor: '#FFD700' },
});