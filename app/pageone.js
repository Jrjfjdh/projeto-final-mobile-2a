import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

// Dados atualizados com Resumo (description) e Texto Completo (fullDescription)
const historyData = [
  {
    id: 1,
    title: "1986–1992: Desenvolvimento",
    years: "1986–1992",
    image: "https://images.unsplash.com/photo-1593305841991-05c29736ce07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Ted Turner adquire o acervo da MGM/UA em 1986, formando a Turner Entertainment Co. Em 1991, compra o catálogo da Hanna-Barbera por US$ 320 milhões, consolidando 8.500 horas de animações clássicas (Looney Tunes, Popeye, MGM). Betty Cohen é selecionada para desenvolver a nova rede, que é anunciada em fevereiro de 1992.",
    fullDescription: "Em 25 de março de 1986, a Turner Broadcasting System de Ted Turner adquiriu a Metro-Goldwyn-Mayer / United Artists de Kirk Kerkorian. No entanto, devido a preocupações com o endividamento de suas empresas, Turner foi forçado a vender a MGM/UA de volta para Kerkorian em 26 de agosto de 1986, após apenas 75 dias de propriedade. Contudo, Turner manteve grande parte do acervo de filmes e programas de televisão da MGM produzidos antes de maio de 1986 (bem como parte do acervo da United Artists) e formou a Turner Entertainment Co. , criando a Turner Network Television a partir dela [ 1 ]. O acervo da MGM anterior a maio de 1986 também incluía curtas de animação da Associated Artists Productions , adquirida pela United Artists .\n\nEm 1991, a Turner adquiriu o catálogo de animações da Hanna-Barbera por US$ 320 milhões, superando a oferta da MCA Inc. ( Universal Studios ) e da Hallmark Cards. Com isso, a Turner passou a ter um catálogo de 8.500 horas de desenhos animados, incluindo os da Warner Bros. (Looney Tunes e Merrie Melodies anteriores a 1948), os desenhos do Popeye de 1933 a 1957, os da MGM e as produções da Hanna-Barbera. Essa aquisição permitiu que a Turner estabelecesse seu próprio canal no mercado de vídeos infantis, baseado em seu vasto catálogo de animações. A Hanna-Barbera também continuava produzindo ativamente novos conteúdos animados, o que dava à Turner a vantagem de não depender de licenças de programação como outros canais infantis, além de contar com uma marca consolidada para construir seu negócio.\n\nTed Turner selecionou Betty Cohen , então vice-presidente sênior da TNT , para desenvolver uma nova rede para exibir esses programas animados. Vários nomes potenciais, como Toon City e Cartoonia, foram considerados antes da decisão de chamá-la de Cartoon Network. Em 18 de fevereiro de 1992, a Turner Broadcasting anunciou planos para lançar o Cartoon Network como uma plataforma para seu catálogo de animações."
  },
  {
    id: 2,
    title: "1992–1997: Era do lançamento e do tabuleiro de xadrez",
    years: "1992–1997",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cartoon_Network_2010_logo.svg/2560px-Cartoon_Network_2010_logo.svg.png", 
    description: "Lançado em 1º de outubro de 1992, foi o primeiro canal 24 horas dedicado à animação. Inicialmente, exibia blocos temáticos com clássicos do acervo (Looney Tunes, Tom and Jerry). O sucesso levou a pacotes promocionais, aumentando a audiência. Estreia de 'Space Ghost Coast to Coast' (1994) e lançamento do 'What a Cartoon!' (1995), que gerou o primeiro spin-off, 'O Laboratório de Dexter' (1996).",
    fullDescription: "O logotipo original do Cartoon Network, usado de 1º de outubro de 1992 a 13 de junho de 2004.\n\nEm 12 de março de 1992, a Cartoon Network, Inc. foi fundada. Sete meses depois, em 1º de outubro de 1992, seu canal de televisão homônimo foi lançado, com o primeiro programa sendo Droopy's Guide to the Cartoon Network , apresentado pelo personagem de desenho animado da MGM, Droopy , apresentando o primeiro desenho animado a ser exibido na rede, Rhapsody Rabbit. Inicialmente, provedores de TV a cabo em Atlanta , Boston , Chicago , Cincinnati , Columbus, Ohio , Los Angeles , Miami , Nova York , Filadélfia , Washington, DC , Dallas e Detroit transmitiam o canal. [ 8 ]\n\nO Cartoon Network não foi o primeiro canal a cabo a usar desenhos animados para atrair público; no entanto, foi o primeiro canal 24 horas dedicado exclusivamente à animação. Na época, o Nickelodeon era a principal opção de programação infantil na TV a cabo básica, mas mesmo com seu novo bloco de desenhos animados, o Nicktoons , representava apenas uma parcela da audiência total de desenhos animados, dando ao Cartoon Network a vantagem por se concentrar exclusivamente em animação. A Turner Broadcasting modelou o Cartoon Network a partir da CNN, visando um canal lucrativo de gênero único. Inicialmente, acreditava-se que o conceito não atrairia público suficiente, mas as conquistas da CNN e o amplo apelo da animação levaram a Turner a acreditar que o Cartoon Network também poderia alcançar destaque. [ 11 ] Cohen, a primeira presidente da emissora, também enxergou seu potencial não apenas como um canal para o catálogo de animações da Turner, mas como uma marca que poderia apresentar a animação como uma plataforma por si só. Nos anos seguintes, ela direcionou o apelo do Cartoon Network para um perfil mais psicográfico , em vez de um perfil demográfico padrão , como na maioria dos canais básicos de TV a cabo.\n\nInicialmente, o canal exibia uma programação contínua de desenhos animados clássicos, organizados em blocos temáticos como Down Wit' Droopy D ( curtas do Droopy Dog ), The Tom and Jerry Show , Bugs and Daffy Tonight ( clássicos dos Looney Tunes ), Late Night Black and White (desenhos animados em preto e branco da década de 1930) e ToonHeads (curtas com temas semelhantes e curiosidades). [ 12 ] A maioria das animações clássicas exibidas no Cartoon Network não é mais transmitida regularmente, mas Tom and Jerry e Looney Tunes continuaram sendo exibidos até 2017. O Cartoon Network também promoveu vários aspectos da animação, como o apoio à ASIFA-Hollywood e a defesa da preservação da história da animação. Eles recrutaram historiadores da animação como Jerry Beck para integrar seu conselho consultivo e exibiram animações internacionais, incluindo curtas de animação canadenses no bloco O Canada , bem como filmes estudantis independentes do Festival de Animação ASIFA-East. Um desafio para o Cartoon Network era superar sua baixa penetração nos sistemas de TV a cabo existentes. Quando foi lançado em 1º de outubro de 1992, o canal era transmitido por apenas 233 sistemas de TV a cabo. Para aumentar sua audiência, a rede utilizou pacotes promocionais , oferecendo acesso juntamente com os canais irmãos TNT e TBS . Em 1994, a audiência aumentou significativamente e o canal se classificou como a quinta rede de TV a cabo mais distribuída dos EUA. [ 11 ] Inicialmente, programas inéditos do Cartoon Network, incluindo The Real Adventures of Jonny Quest , Cartoon Planet , SWAT Kats: The Radical Squadron e 2 Stupid Dogs , também eram exibidos na TBS e na TNT para aumentar a visibilidade.\n\nO primeiro programa original exclusivo do Cartoon Network foi The Moxy Show , uma série de antologia de animação que estreou em 1993, usada como uma tentativa de criar um mascote para o Cartoon Network. [ 13 ] Sua primeira série produzida, Space Ghost Coast to Coast, em 1994, reutilizou animações recicladas da Hanna-Barbera para parodiar um talk show , apresentando convidados em carne e osso, frequentemente figuras de nicho ou da contracultura. [ 14 ] Essa abordagem ajudou a atrair um público jovem adulto e expandiu o apelo do canal para além das crianças. [ 15 ] Isso marcou um dos primeiros exemplos do canal de reviver um 'ícone clássico da animação' em um novo contexto cômico. O primeiro sinal internacional do Cartoon Network foi lançado em 30 de abril de 1993, na América Latina . Sinais adicionais foram lançados na Europa e em outras regiões em 17 de setembro de 1993, como parte do Cartoon Network Europe , fundando assim o Cartoon Network Worldwide no ano seguinte, para impulsionar ainda mais o crescimento da marca.\n\nEm 1994, a Hanna-Barbera fundou uma nova divisão para produzir programação exclusiva para o Cartoon Network, chamada Cartoon Network Studios , e iniciou a produção de What a Cartoon! (também conhecido como World Premiere Toons e Cartoon Cartoons ). Este programa estreou em 1995, oferecendo curtas de animação originais encomendados à Hanna-Barbera e a vários animadores independentes. A emissora comercializou a série como uma forma de oferecer mais controle criativo aos animadores, orçamentos maiores e uma pausa na animação tradicional . [ 15 ] [ 16 ] O Cartoon Network pôde avaliar o potencial de certos curtas para servirem como pilotos para séries derivadas e assinou contratos com seus criadores para criar séries contínuas. [ 15 ] O Laboratório de Dexter foi o primeiro spin-off de What a Cartoon! em 1996, após vencer uma votação do público em 1995."
  },
  {
    id: 3,
    title: "1997–2004: Eras Starburst e Powerhouse",
    years: "1997–2004",
    image: "https://images.unsplash.com/photo-1614726365723-49dc46e7e797?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Período de ouro dos 'Cartoon Cartoons' (Johnny Bravo, Powerpuff Girls, Ed, Edd n Eddy). O bloco de ação Toonami é lançado (1997), popularizando animes como Dragon Ball Z. Em 1996, a fusão com a Time Warner consolida o acervo da Warner Bros. (Liga da Justiça). O canal digital Boomerang é lançado em 2000. O bloco noturno Adult Swim estreia em 2001, voltado para o público adulto.",
    fullDescription: "Entre 1997 e 1999, mais séries originais estrearam baseadas em pilotos do What a Cartoon!, incluindo Johnny Bravo , Cow and Chicken e seu spin-off I Am Weasel , The Powerpuff Girls , Courage the Cowardly Dog e Mike, Lu & Og . [ 15 ] [ 16 ] [ 17 ] A série Ed, Edd n Eddy , que não teve um piloto no What a Cartoon!, também estreou em 1999. [ 11 ] Muitas dessas séries estrearam com a marca ' Cartoon Cartoons ', sendo exibidas ao longo da programação do canal e apresentadas durante o Cartoon Cartoon Fridays , que estreou em 11 de junho de 1999 como a principal noite de estreias. Em 1995, o Cartoon Network lançou o 'Cartoon Network Online' como um site exclusivo da AOL, posteriormente renomeado para CartoonNetwork.com. O site oferecia jogos, vídeos, compras, o Cartoon Orbit (lançado em 2000) e promoções de filmes, videogames, brinquedos e muito mais. Também apresentava a primeira série original online do canal, Web Premiere Toons, que exibia desenhos animados interativos na web de 1999 a 2002. A partir de 1996, o Cartoon Network exibiu dois programas infantis nas manhãs de domingo: Big Bag (programa com atores reais e fantoches, com curtas de animação produzidos pela Children's Television Workshop) até 2001, e Small World (série de animação internacional) até 2002.\n\nEm 1997, o Cartoon Network lançou um novo bloco de ação intitulado Toonami . Sua programação inicial consistia em reprises dos anos 80 de Robotech e ThunderCats . No entanto, conforme sua exibição progrediu, animes como Sailor Moon , Tenchi Muyo!, Mobile Suit Gundam Wing e Dragon Ball Z passaram a dominar o bloco. [ 18 ] O Toonami foi apresentado por Moltar , da franquia Space Ghost, até 1999, quando passou a ser apresentado por seu próprio personagem original, um robô adolescente musculoso chamado TOM. Em 2 de março de 1998, o canal passou por sua primeira reformulação visual, com a introdução da música instrumental Powerhouse . Esses bumpers foram exibidos de 1998 a 2004. [ 19 ]\n\nEm 1996, a Turner Broadcasting fundiu-se com a Time Warner , [ 20 ] consolidando o acesso do Cartoon Network aos desenhos animados da Warner Bros., incluindo os desenhos animados posteriores a julho de 1948 e os desenhos animados em preto e branco. [ 21 ] Esses desenhos animados ainda eram licenciados para a Nickelodeon, ABC e The WB , mas começaram a migrar para o Cartoon Network entre 1997 e 2000. Novas produções animadas da Warner Bros. Animation também começaram a aparecer na emissora – principalmente reprises de programas que haviam sido exibidos no bloco irmão Kids' WB e alguns da Fox Kids , juntamente com novos programas como Liga da Justiça [ 22 ] e Jovens Titãs . [ 23 ]\n\nEntre 1997 e 1998, a audiência do Cartoon Network aumentou de 38 milhões para 54 milhões de domicílios, tornando-se a segunda rede mais popular em sua faixa etária de 6 a 11 anos na TV a cabo básica, atrás apenas da Nickelodeon. [ 24 ] Em 1999, o Cartoon Network introduziu intervalos comerciais sob os selos Groovies e Shorties. Esses segmentos apresentavam personagens tanto da programação original quanto do acervo clássico de animações da Turner, reimaginados por artistas musicais e animadores em estilos distintos dos programas originais. Em 1º de abril de 2000, o Cartoon Network lançou um canal digital a cabo e via satélite conhecido como Boomerang , que foi derivado de um de seus blocos de programação que apresentava séries e curtas animados retrô, à medida que mais programação original e importações de outras produções animadas da Time-Warner começaram a preencher a grade principal do Cartoon Network.\n\nEm 11 de janeiro de 2001, a Time Warner fundiu-se com a provedora de serviços online America Online (AOL) por US$ 183 bilhões. Entre as mudanças executivas resultantes da fusão, Jamie Kellner substituiu Ted Turner como chefe da Turner Broadcasting System. Em 18 de junho de 2001, Betty Cohen, que atuava como presidente do Cartoon Network desde sua fundação, deixou o cargo devido a divergências criativas com Jamie Kellner . [ 25 ] Em 22 de agosto de 2001, Jim Samples foi nomeado gerente geral e vice-presidente executivo da emissora, substituindo Cohen. O Cartoon Network decidiu criar um bloco totalmente voltado para o público adulto devido ao sucesso anterior com esse público. O Adult Swim estreou em 2 de setembro de 2001 com um episódio de Home Movies ; o bloco foi inicialmente exibido nas noites de domingo, com reprise às quintas-feiras. A programação inicial consistia em Harvey Birdman, Attorney at Law , Sealab 2021 , Cowboy Bebop , The Brak Show , Aqua Teen Hunger Force e Space Ghost Coast to Coast . Com o Adult Swim agora detendo metade da audiência do Cartoon Network, o canal diurno passou a buscar um público mais jovem, e foi aí que a abordagem psicográfica do Cartoon Network começou a divergir. Também naquele ano, a Warner Bros. Animation absorveu a Hanna-Barbera . Por conta disso, a Turner teria que comprar licenças adicionais para exibir a programação do estúdio na emissora, e passaria a ser proprietária apenas do Cartoon Network Studios.\n\nO primeiro filme para cinema baseado em uma série original do Cartoon Network, As Meninas Superpoderosas: O Filme , foi lançado em 3 de julho de 2002. Recebeu críticas mistas a positivas, mas foi um fracasso comercial na época de seu lançamento, arrecadando US$ 16,4 milhões em todo o mundo com um orçamento de US$ 11 milhões. [ 26 ] O Cartoon Network e o Boomerang seriam reorganizados, após a substituição de Jamie Kellner por Philip Kent no cargo de diretor executivo da Turner, em uma única unidade de animação. A emissora começou a abandonar a marca 'Cartoon Cartoons' de sua programação original e encerrou o bloco Cartoon Cartoon Fridays em 16 de maio de 2003. Em 3 de outubro de 2003, o bloco Cartoon Cartoon Fridays foi reiniciado em formato live-action como 'Fridays', apresentado por Tommy Snider e Nzinga Blake, esta última posteriormente substituída por Tara Sands em 2005. Exibia episódios de séries originais do Cartoon Network e programas adquiridos, além de filmes e especiais."
  },
  {
    id: 4,
    title: "2004–2007: Eras CN City e Yes!",
    years: "2004–2007",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "O canal adota o novo logo e identidade visual 'CN City' (2004), com personagens interagindo em CGI. A programação clássica migra para o Boomerang. Estreia 'A Mansão Foster' (2004), que se torna um sucesso. O Toonami é movido para os sábados à noite. Em 2006, o canal faz sua primeira incursão em live-action com 'Re-Animated'. Jim Samples renuncia após a polêmica do marketing de 'Aqua Teen Hunger Force' (2007).",
    fullDescription: "Segundo logotipo do Cartoon Network, usado de 14 de junho de 2004 a 28 de maio de 2010.\n\nEm 14 de junho de 2004, o Cartoon Network reformulou sua marca, que incluiu um logotipo atualizado (mantendo o motivo quadriculado) e um novo slogan: 'This is Cartoon Network!' [ 27 ] Novos bumpers e identidade visual para a programação, acompanhando a reformulação, foram produzidos pela Animal Logic , mostrando personagens interagindo em uma cidade em CGI construída a partir de locais e ícones de vários programas. A maior parte da programação clássica foi transferida para o Boomerang para dar espaço a novos conteúdos, já que os programas originais mais antigos do Cartoon Cartoons podiam ser assistidos em segmentos em um bloco de meia hora conhecido como The Cartoon Cartoon Show . Em abril daquele ano, o Toonami passou a ser exibido nas noites de sábado, depois que os programas do bloco começaram a conter material considerado menos apropriado para o público principal do Cartoon Network. Uma nova franquia de programação para preencher o horário original das tardes de dias úteis, Miguzi, foi lançada naquele mês.\n\nEm agosto, o Cartoon Network estreou A Mansão Foster para Amigos Imaginários , que se tornou a estreia de série original mais assistida do canal (até Class of 3000 em 2006). Consistentemente em primeiro lugar entre o público de 6 a 11 anos, a série levou à encomenda de mais 26 episódios e rapidamente se tornou um programa de destaque. Ao lado de As Terríveis Aventuras de Billy e Mandy , Ed, Edd e Eddy e Codename: Kids Next Door , estabeleceu um alto padrão para futuras programações voltadas para o público jovem. Enquanto os programas de comédia prosperavam, os programas de ação ou aqueles que atingiam a classificação indicativa TV-Y7 foram sendo cada vez mais transferidos para o Toonami ou cancelados, embora os populares permanecessem se tivessem bom desempenho nas principais faixas demográficas. O Cartoon Network também lançaria a iniciativa Get Animated no ano seguinte, que incentivava estilos de vida saudáveis ​​para crianças.\n\nEm 2005, a Nielsen começou a registrar a audiência do Adult Swim separadamente da do Cartoon Network, devido às diferenças demográficas entre os dois horários. Por causa disso, o Adult Swim passou a ser promovido como uma rede separada que compartilha o mesmo espaço de programação que o Cartoon Network. Em 22 de agosto de 2005, o Cartoon Network lançou um bloco voltado para o público pré-escolar, conhecido como Tickle-U , que não obteve grande sucesso e foi descontinuado em 13 de janeiro de 2006. [ 28 ] Em outubro de 2005, o Cartoon Network lançou Sunday Pants , uma série antológica de curta duração que apresentava uma mistura de curtas de animação de vários criadores e países, criada pelos criativos Stuart Hill e Craig Sven-Gordon. A série apresentava curtas de 1 a 3 minutos em diferentes estilos, como desenho à mão, Flash e CGI, e continha material mais adulto do que a maioria das séries do Cartoon Network. O programa incluía segmentos com atores reais com a banda The Slacks e transições animadas da WeFail. A série Sunday Pants foi exibida por menos de um mês, terminando em 30 de outubro de 2005. Planos para um retorno em 2006 foram anunciados, mas nunca se concretizaram, e a série acabou sendo cancelada.\n\nEm 3 de abril de 2006, estreou a campanha publicitária 'Yes!' para anunciar a crescente programação de comédia animada do Cartoon Network. A marca CN City foi modificada com elementos de design semelhantes aos da campanha. Em dezembro de 2006, estreou o primeiro filme para TV com atores reais do canal, Re-Animated , que misturava atores reais e animação. Este filme tinha como objetivo lançar a incursão do canal em programação com atores reais e roteiro original. Um novo logotipo proposto, com um design de texto verde com longa sombra, foi testado, mas não adotado. [ 29 ] No entanto, Jim Samples renunciou ao cargo em 9 de fevereiro de 2007, após uma ameaça de bomba em Boston causada por pacotes deixados pela cidade que faziam parte de uma campanha de marketing externa para promover a série Aqua Teen Hunger Force, do Adult Swim . [ 30 ] [ 31 ]"
  },
  {
    id: 5,
    title: "2007–2010: Eras do Outono e dos Noods",
    years: "2007–2010",
    image: "https://images.unsplash.com/photo-1515601777675-d308909cc3eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Stuart Snyder assume a liderança (2007), focando na expansão para meninos mais velhos. Estreia de 'Chowder' e 'Flapjack'. 'Star Wars: The Clone Wars' (2008) bate recorde de audiência. Lançamento controverso do bloco CN Real (2009) com reality shows, que foi amplamente rejeitado pelo público e removido por baixa audiência.",
    fullDescription: "Em 14 de fevereiro de 2007, o Cartoon Network anunciou várias das séries restantes aprovadas por Samples: Mask of Santo (posteriormente cancelada), Out of Jimmy's Head (spin-off de Re-Animated ; a primeira série live-action do CN), Chowder , The Marvelous Misadventures of Flapjack e The Secret Saturdays . Em 2 de maio de 2007, Stuart Snyder foi nomeado sucessor de Samples, após a reestruturação da unidade de Animação da Turner para adicionar marcas como GameTap , Super Deluxe e Adult Swim , tornando-se a unidade unificada de Animação, Jovens Adultos e Mídia Infantil. [ 32 ] A emissora continuou a mirar no público mais jovem com a programação e as mudanças iniciadas sob a gestão de Samples. O bloco de sexta-feira foi reformulado e passou a se chamar Fried Dynamite, com apresentadores mais jovens, combinado com uma programação matinal de sábado conhecida como Dynamite Action Squad , que foi rapidamente substituída no ano seguinte. Em maio de 2007, a programação da emissora foi alterada sazonalmente durante o verão e o outono, com músicas de Cee-Lo Green e The Hives , respectivamente. No entanto, a programação de outono continuou após o término previsto para julho do ano seguinte, em consonância com a nova estratégia de programação de Snyder para a emissora.\n\nSynder pretendia expandir o público do Cartoon Network para incluir espectadores mais velhos, particularmente meninos de 9 a 14 anos, e reduzir a dependência da emissora em animações cômicas. A partir de 2008, a estratégia levou ao lançamento de blocos de programação temáticos para séries de comédia, ação e fantasia, bem como filmes adequados para serem assistidos em família. Também foi anunciada uma nova iniciativa conhecida como The Cartoonstitute , que visava criar até 150 peças de programação em 20 meses. [ 33 ] Essa iniciativa foi liderada pelos veteranos animadores Craig McCracken e Rob Renzetti, que criaram conteúdo para programas de desenvolvimento semelhantes no passado. O Cartoonstitute acabou sendo encerrado depois que os planos para o programa se tornaram difíceis, [ 34 ] e apenas três curtas — Regular Show , Secret Mountain Fort Awesome e, posteriormente, Uncle Grandpa — foram selecionados para produção de séries completas.\n\nEm julho de 2008, um estilo de marca renovado, apresentando 'Noods' — figuras arredondadas e em branco que se transformam em personagens de programas do Cartoon Network — foi introduzido, em colaboração com Tristan Eaton, da Kidrobot . Os bumpers foram produzidos pelo estúdio de motion design Capacity, animados pela Crew972 , e concebidos para serem usados ​​temporariamente até que uma imagem de marca mais permanente fosse implementada. Em 20 de setembro de 2008, o Cartoon Network encerrou o Toonami após 11 anos de exibição para dar lugar à nova programação You Are Here . [ 35 ] De 2008 a 2011, o Cartoon Network exibiu curtas animados que serviam como interlúdios entre os programas, chamados Wedgies , que incluíam Big Baby , The Bremen Avenue Experience , Calling Cat-22 , Nacho Bear , Roller Squirrels e The Talented Mr. Bixby .\n\nA programação do Cartoon Network recebeu um significativo apoio de marketing, ancorada pelas estreias das séries The Secret Saturdays e Star Wars: The Clone Wars . Segundo Snyder, Star Wars: The Clone Wars alinhou-se bem com o público do canal e aproveitou o forte reconhecimento da marca. A série estabeleceu um novo recorde de audiência, superando Class of 3000 como a estreia mais assistida da história do Cartoon Network. O Cartoon Network começou a aprovar mais projetos baseados em diversas propriedades intelectuais que agradavam ao seu público. Exemplos notáveis ​​incluem um filme prelúdio de Scooby-Doo e Firebreather , uma adaptação da graphic novel de mesmo nome . Durante esse período, o Cartoon Network aumentou o engajamento dos fãs lançando uma comunidade online com fóruns de discussão, placares de jogos e distintivos virtuais.\n\nO ano de 2009 foi marcante porque o Cartoon Network não estreou nenhuma animação original. Em vez disso, o canal lançou o CN Real , um bloco de reality shows 'alternativos' com atores reais , após o desenvolvimento de séries com atores reais ter sido interrompido durante a greve dos roteiristas de 2007. Paralelamente, foi introduzida uma programação esportiva limitada, incluindo resumos de jogos de basquete e partidas de SlamBall durante os intervalos comerciais. Embora a programação com atores reais tenha retornado no ano seguinte com as estreias de Tower Prep e Unnatural History , a mudança para séries com atores reais enfrentou críticas do público, que considerou que ela se distanciava demais da identidade inicial do canal, centrada em desenhos animados. Isso, combinado com a baixa audiência, resultou na remoção da maior parte da programação do CN Real ainda naquele ano, com exceção de Dude, What Would Happen e Destroy Build Destroy ."
  },
  {
    id: 6,
    title: "2010–2016: Era Check It",
    years: "2010–2016",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Nova reformulação de marca ('CHECK it') em 2010, baseada no tabuleiro de xadrez preto e branco. Estreia de grandes sucessos como 'Adventure Time', 'Regular Show' e 'The Amazing World of Gumball', gerando uma nova onda de popularidade. O Adult Swim expande seu horário para começar às 21h (2010). Christina Miller é nomeada presidente em 2014, após a saída de Stuart Snyder.",
    fullDescription: "Versão principal do logotipo, utilizada desde 29 de maio de 2010.\n\nEm 22 de março de 2010, um novo logotipo para a rede foi registrado no USPTO . [ 36 ] Após ser revelado publicamente na apresentação da programação da rede em 21 de abril, ele foi introduzido no ar em 29 de maio, juntamente com uma nova identidade de marca e slogan, 'CHECK it'. O novo logotipo e a marca homenageavam o tabuleiro de xadrez preto e branco que formava o primeiro logotipo da rede (e foi mantido em uma forma minimizada no segundo logotipo), acompanhado por várias variações e padrões de cores CMYK . [ 37 ] A reformulação da marca foi inicialmente desenvolvida pela Qube Konstrukt, mas o canal posteriormente optou pela Brand New School para a versão final.\n\nNaquele ano, duas séries animadas originais, Adventure Time e Regular Show, estrearam com aclamação unânime e alcançaram alta audiência entre o público-alvo principal do Cartoon Network. O Cartoon Network também estreou as séries de ação Generator Rex , Ben 10: Ultimate Alien e Sym-Bionic Titan, com recepção igualmente positiva. Apesar das críticas positivas, Tower Prep e Unnatural History tiveram dificuldades com a audiência e atingiram um público fora do núcleo da emissora, o que levou ao seu cancelamento após uma temporada. A emissora estreou mais projetos com atores reais, como Level Up e a série de TV Annoying Orange , que foram direcionados para se alinharem com as animações da emissora. [ 38 ] Em 27 de dezembro de 2010, o Adult Swim expandiu sua programação em uma hora, mudando seu horário de início das 22h para as 21h (horário do leste dos EUA). [ 39 ] Em 2011, o Cartoon Network estreou uma infinidade de séries, entre elas The Looney Tunes Show , The Amazing World of Gumball , Ninjago (anteriormente conhecido como Ninjago: Masters of Spinjitzu até 2019) e ThunderCats . A emissora também aderiu ao modelo TV Everywhere para seu site e aplicativo e, no ano seguinte, introduziu uma transmissão simultânea ao vivo na TV . [ 40 ] [ 41 ] [ 42 ] [ 43 ]\n\nEm outubro de 2012, o Cartoon Network comemorou seu 20º aniversário, exibindo reprises temáticas de aniversário e festa de seus programas todos os fins de semana até 4 de novembro. No início do ano, em 30 de março de 2012, o bloco Cartoon Planet foi reativado para exibir a programação original do canal do final da década de 1990 até meados da década de 2000. [ 44 ] Nesse mesmo ano, o Cartoon Network lançou o Cartoon Network Shorts Department , um sucessor da fracassada iniciativa Cartoonstitute , para aprovar mais programas de animação de comédia. Além disso, o canal aderiu à iniciativa anti-bullying Stop Bullying Speak Up , criada por seu canal irmão, a CNN, em 2010. A emissora exibiu o documentário Speak Up (com participação especial do então presidente Barack Obama ) em 2012 e The Bully Effect no ano seguinte. [ 45 ] [ 46 ] Em 20 de maio de 2013, o Cartoon Network atualizou sua identidade, adicionando novas vinhetas, gráficos e sons. Uma curta animação (formatada como um GIF) foi criada para cada programa, e essas animações foram usadas quando o programa era apresentado nos bumpers 'Next'. O fundo usado em suas promos e bumpers também foi alterado de preto para branco. [ 47 ] Durante este ano, o Cartoon Network lançou vários pilotos animados de seu programa Cartoon Network Shorts Department , como Clarence , Lakewood Plaza Turbo , Steven Universe e Tome of the Unknown . Todos os mencionados foram aprovados, com Tome of the Unknown se tornando Over the Garden Wall e sendo a primeira série formatada como uma minissérie limitada na emissora, o que se provou benéfico, já que cada estreia de um novo episódio do programa aumentava a audiência.\n\nDuração: 31 segundos.\n0:31\nUma das muitas trilhas sonoras da era CHECK It 4.0 do Cartoon Network.\n\nEm 6 de março de 2014, Stuart Snyder foi removido do cargo de presidente e diretor de operações (COO) da divisão de Animação, Jovens Adultos e Mídia Infantil da Turner, após uma reestruturação. [ 48 ] Em 16 de julho, Christina Miller foi nomeada sua sucessora como presidente e gerente geral do Cartoon Network, Adult Swim e Boomerang. [ 49 ] No final do mês, o horário das 20h do Cartoon Network foi transferido para o Adult Swim, fazendo com que os novos episódios da programação do canal mudassem de horário. [ 50 ] Em 21 de outubro de 2014, o Cartoon Network, juntamente com a CNN e o Boomerang , foram retirados do ar pela provedora de TV americana Dish Network , devido a divergências contratuais. [ 51 ] No entanto, os canais foram restaurados um mês depois."
  },
  {
    id: 7,
    title: "2016–2020: Era Dimensional",
    years: "2016–2020",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Sob Christina Miller, o foco muda para o crescimento digital e o lançamento de reboots de clássicos ('Ben 10', 'Powerpuff Girls'). Nova identidade visual 'Dimensional' em 2016, com uso de CGI 3D e stop-motion. A Turner se funde com a AT&T, tornando-se WarnerMedia (2018). Conteúdo começa a ser transferido para o novo serviço de streaming HBO Max.",
    fullDescription: "Sob a liderança de Christina Miller, o Cartoon Network focou no crescimento digital, lançando aplicativos interativos e atualizando sua plataforma de vídeo sob demanda (VOD) para oferecer recursos como listas de reprodução personalizadas e acesso antecipado a episódios. Ela priorizou a promoção de novas séries em plataformas digitais antes de exibi-las na TV e buscou reviver propriedades clássicas para atrair diversas gerações, o que levou a reboots como as séries de Ben 10 e As Meninas Superpoderosas de 2016 e ThunderCats Roar . Essa estratégia já havia começado com seu antecessor, que aprovou revivals anteriores como The Looney Tunes Show e um prelúdio de ThunderCats . O canal também experimentou novos formatos de lançamento, incluindo a exibição de novos episódios diariamente ao longo de uma semana.\n\nEm 30 de maio de 2016, o Cartoon Network renovou sua apresentação na televisão com um novo pacote gráfico baseado em reformulações anteriores da família CHECK It. Conhecida como 'Dimensional', a identidade visual foi desenvolvida pelo Bent Design Lab e apresentava vários personagens do Cartoon Network renderizados em CGI 3D, stop-motion e animação 2D. A agência de branding e marketing Troika desenvolveu o guia de estilo Dimensional , um conjunto de padrões para todo o canal. [ 52 ] Em 22 de outubro de 2016, a AT&T fechou um acordo para adquirir a Time Warner por US$ 108,7 bilhões. A fusão foi aprovada pelos órgãos reguladores federais em 12 de junho de 2018 e concluída dois dias depois, com o nome da Time Warner alterado para WarnerMedia . [ 53 ]\n\nPara celebrar o 25º aniversário da rede, o Cartoon Network anunciou uma exposição chamada 'Cartoon Network: 25 Years of Drawing on Creativity' em parceria com o Paley Center, com exibições de 16 de setembro de 2017 a 8 de outubro de 2017 em sua sede na cidade de Nova York , e transferida para sua sede em Beverly Hills, Califórnia, com exibições de 14 de outubro a 19 de novembro daquele ano. [ 54 ]\n\nEm 29 de outubro de 2018, o Cartoon Network anunciou a construção de seu primeiro hotel temático no Condado de Lancaster, Pensilvânia , que foi inaugurado em 10 de janeiro de 2020. [ 55 ] [ 56 ] Em 4 de março de 2019, a AT&T anunciou uma grande reorganização da divisão Turner Broadcasting da WarnerMedia, que envolve a transferência do Cartoon Network, Boomerang, Adult Swim e Turner Classic Movies para a Warner Bros. Entertainment . Embora a AT&T não tenha especificado nenhum cronograma para a entrada em vigor das mudanças, a WarnerMedia já havia começado a remover todas as referências à Turner em comunicações corporativas e comunicados de imprensa, referindo-se às redes dessa unidade como 'divisões da WarnerMedia'. [ 57 ] [ 58 ] [ 59 ] [ 60 ] Em 27 de novembro de 2019, foi anunciado que Christina Miller deixaria a WarnerMedia no final de 2019. Michael Ouweleen atuou como presidente interino do Cartoon Network, com Miller auxiliando na transição. [ 61 ] Para incluir seu conteúdo na programação original do serviço de streaming HBO Max , o Cartoon Network transferiria vários programas, como temporadas de Summer Camp Island e Infinity Train e programas Tig n' Seek e The Fungies!, que eram originalmente destinados ao canal."
  },
  {
    id: 8,
    title: "2020–presente: Redesenhe Seu Mundo e Eras Prisma",
    years: "2020–Presente",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
    description: "Tom Ascheim assume como presidente (2020), com planos de expandir o alcance demográfico. Lançamento da marca pré-escolar Cartoonito e do bloco familiar ACME Night (2021). O canal foca na nova campanha 'Redraw Your World' em meio à iminente fusão entre WarnerMedia e Discovery Inc. (2021).",
    fullDescription: "Em 7 de abril de 2020, foi anunciado que, a partir de 1º de julho, Tom Ascheim se tornaria presidente da Warner Bros. Global Kids, Young Adults and Classics , supervisionando o Cartoon Network, Boomerang, Adult Swim e Turner Classic Movies. [ 62 ] Em fevereiro de 2021, Ascheim anunciou planos para introduzir novos blocos de programação para o público pré-escolar e familiar, a fim de expandir seu alcance demográfico. [ 63 ] Durante o evento WarnerMedia Upfronts, foi anunciado que a marca pré-escolar Cartoonito seria lançada nos EUA por meio de um bloco no Cartoon Network e um hub da marca no HBO Max . Esperava-se que mais de 20 séries fossem apresentadas em seu lançamento. [ 64 ] O Cartoon Network também revelou uma nova campanha de imagem, 'Redraw Your World'. [ 63 ] [ 65 ] O Cartoonito foi lançado em setembro de 2021, inicialmente com 8 horas de duração nos dias de semana e 2 horas nos fins de semana. Também lançado naquele mês foi o bloco de programação de domingo à noite ACME Night, dedicado à programação familiar com a exibição de filmes e outros conteúdos. Filmes e séries de animação originais foram anunciados para o bloco, embora, desde então, a maioria tenha sido cancelada ou transferida para outras plataformas."
  }
];

export default function PageOne() {
  // Estado para controlar qual card está expandido. 
  // Armazena o ID do card aberto ou null se nenhum estiver aberto.
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#E0F7FA" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho */}
        <View style={styles.headerContainer}>
          <View style={styles.headerBadge}>
            <Text style={styles.headerBadgeText}>HISTÓRIA OFICIAL</Text>
          </View>
          <Text style={styles.mainTitle}>Evolução Completa do CN</Text>
          <Text style={styles.subHeader}>Linha do Tempo Resumida</Text>
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

              {/* Divisor sutil */}
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
                  {expandedCard === item.id ? 'Ler Menos ▲' : 'Ler Mais ▼'}
                </Text>
              </TouchableOpacity>
              
            </View>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerText}>Fim da Linha do Tempo</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#E0F7FA", // Fundo Azul Claro (Ciano Suave)
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 60,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 15,
  },
  headerBadge: {
    backgroundColor: "#B3E5FC",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 10,
  },
  headerBadgeText: {
    color: "#0277BD",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.2,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: "800",
    color: "#01579B", // Azul Profundo
    textAlign: 'center',
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 18,
    color: "#4FC3F7", // Azul mais vibrante para o subtítulo
    fontWeight: "600",
  },
  
  // Estilos do Card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    marginBottom: 25,
    shadowColor: "#0288D1", // Sombra azulada
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 5,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    opacity: 0.95,
  },
  cardContent: {
    padding: 22,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#0277BD",
    marginBottom: 5,
  },
  yearBadge: {
    backgroundColor: "#E1F5FE",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B3E5FC",
    alignSelf: 'flex-start', 
  },
  yearText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#0277BD",
  },
  divider: {
    height: 1,
    backgroundColor: "#F0F0F0",
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 15, 
    lineHeight: 24,
    color: "#546E7A", 
    textAlign: "justify", 
    fontWeight: "400",
    marginBottom: 15, // Adicionado espaço antes do botão
  },
  // Estilos do Botão "Ler Mais"
  readMoreButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 0, 
  },
  readMoreText: {
    color: '#0277BD', // Azul principal para o link
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  footerText: {
    color: "#B0BEC5",
    fontSize: 12,
    fontWeight: "600",
  }
});