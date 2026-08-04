    const CASAS = [
      'renovavel', 'transformacao', 'naorenovavel', 'sorte', 'estacao', 'impacto',
      'renovavel', 'naorenovavel', 'transformacao', 'sorte', 'impacto', 'estacao',
      'renovavel', 'sorte', 'naorenovavel', 'transformacao', 'estacao', 'impacto',
      'renovavel', 'naorenovavel', 'sorte', 'transformacao', 'impacto', 'estacao',
      'renovavel', 'naorenovavel'
    ];

    const ICONES = { renovavel: '☀', naorenovavel: '⛽', transformacao: '⚡', impacto: '⚠', estacao: '◈', sorte: '★' };
    const NOMES_CASA = {
      renovavel: 'Fonte renovável', naorenovavel: 'Fonte não renovável', transformacao: 'Transformação',
      impacto: 'Impacto', estacao: 'Estação', sorte: 'Sorte'
    };

    const PERSONAGENS = [
      {
        icone: '💧', nome: 'Bia da Represa', cargo: 'entende tudo de hidrelétrica', especialidade: 'renovavel',
        bio: 'Cresceu perto de uma represa e desde pequena vive perguntando pra onde vai a água que passa pela turbina.'
      },
      {
        icone: '⛏', nome: 'Seu Carvalho', cargo: 'trabalhou a vida toda com petróleo', especialidade: 'naorenovavel',
        bio: 'Passou décadas em plataformas e refinarias — hoje conta os bastidores (e os problemas) dos combustíveis fósseis.'
      },
      {
        icone: '⚡', nome: 'Dínamo', cargo: 'vive desmontando motor e gerador', especialidade: 'transformacao',
        bio: 'Não descansa enquanto não entende como uma energia vira outra dentro de qualquer máquina.'
      },
      {
        icone: '🌱', nome: 'Fernanda Verde', cargo: 'ativista socioambiental', especialidade: 'impacto',
        bio: 'Anda pela cidade toda de bicicleta avaliando os efeitos que cada usina deixa pra trás.'
      },
      {
        icone: '🗺️', nome: 'Tio Mapa', cargo: 'professor de geografia aposentado', especialidade: 'estacao',
        bio: 'Tem um mapa-múndi pendurado na sala e sabe de cabeça de onde vem a energia de cada continente.'
      },
      {
        icone: '🌪️', nome: 'Ventania', cargo: 'meio maluca, meio genial', especialidade: 'sorte',
        bio: 'Aparece do nada, sempre com uma novidade — boa ou ruim — debaixo do braço.'
      }
    ];

    const BARALHOS = {
      renovavel: [
        {
          p: "Qual transformação de energia ocorre em uma usina hidrelétrica?",
          o: ["Energia química em energia elétrica", "Energia mecânica (da água em movimento) em energia elétrica", "Energia térmica em energia elétrica", "Energia luminosa em energia elétrica"],
          c: 1, e: "A água represada tem energia potencial gravitacional, que vira cinética ao cair e movimenta as turbinas, gerando eletricidade."
        },
        {
          p: "Qual princípio físico permite que painéis solares gerem eletricidade direto da luz?",
          o: ["Efeito fotovoltaico", "Efeito Joule", "Indução eletromagnética por atrito", "Fissão nuclear"],
          c: 0, e: "O efeito fotovoltaico converte a luz diretamente em eletricidade, sem passar por etapas térmicas ou mecânicas."
        },
        {
          p: "De onde vem a energia aproveitada pelas turbinas eólicas?",
          o: ["Da energia cinética do vento", "Da energia química do ar", "Da energia potencial das nuvens", "Da energia nuclear da atmosfera"],
          c: 0, e: "O vento em movimento tem energia cinética, que gira as pás da turbina e vira eletricidade no gerador."
        },
        {
          p: "O que caracteriza a energia de biomassa?",
          o: ["Uso de matéria orgânica, como cana, madeira ou resíduos agrícolas", "Uso de urânio enriquecido", "Uso de gás natural extraído do subsolo", "Uso da força das águas represadas"],
          c: 0, e: "A biomassa transforma a energia química guardada em matéria orgânica em energia térmica ou elétrica, pela queima ou fermentação."
        },
        {
          p: "Qual é uma vantagem da hidrelétrica em relação aos combustíveis fósseis?",
          o: ["Não emite gases de efeito estufa diretamente na geração", "Não precisa de nenhuma infraestrutura", "Gera resíduo radioativo", "Depende só do vento"],
          c: 0, e: "Diferente de termelétricas a carvão ou gás, a hidrelétrica não queima combustível — não há emissão direta de CO2."
        },
        {
          p: "O Brasil tem grande potencial solar principalmente por quê?",
          o: ["Alta incidência de radiação solar o ano todo, principalmente no Nordeste", "Clima frio e nublado", "Baixíssima insolação no território", "Relevo bem montanhoso"],
          c: 0, e: "A posição tropical do Brasil garante altos índices de radiação solar durante boa parte do ano."
        },
        {
          p: "Qual região brasileira se destaca na geração eólica, com ventos vindos do oceano?",
          o: ["O litoral do Nordeste", "O interior da Região Norte", "O Pantanal", "O planalto central"],
          c: 0, e: "Os ventos que sopram sobre o litoral nordestino tornam a região uma das mais competitivas do mundo em energia eólica."
        },
        {
          p: "Além de água, vento e sol, qual destas também é uma fonte renovável?",
          o: ["Biomassa", "Carvão mineral", "Petróleo", "Gás natural"],
          c: 0, e: "A biomassa é renovável porque sua matéria-prima pode ser reposta em ciclos relativamente curtos."
        }
      ],
      naorenovavel: [
        {
          p: "A queima do carvão mineral em termelétricas transforma qual energia em térmica?",
          o: ["Energia química", "Energia nuclear", "Energia potencial gravitacional", "Energia eólica"],
          c: 0, e: "O carvão guarda energia química, que ao ser queimada vira térmica, usada para gerar vapor e mover turbinas."
        },
        {
          p: "O petróleo é uma fonte não renovável porque...",
          o: ["Sua formação leva milhões de anos, bem mais devagar do que é consumido", "Ele nunca se esgota", "É feito em laboratório", "É uma fonte limpa"],
          c: 0, e: "Sua formação geológica é muito mais lenta do que o ritmo de consumo humano — por isso é considerado não renovável."
        },
        {
          p: "Comparado ao carvão, o gás natural geralmente...",
          o: ["Polui menos na queima, mas ainda é um combustível fóssil", "É totalmente renovável", "Não emite gás nenhum", "É usado só em energia solar"],
          c: 0, e: "O gás natural queima de forma mais limpa que o carvão, mas continua sendo uma fonte fóssil finita."
        },
        {
          p: "A energia nuclear é obtida principalmente por qual processo?",
          o: ["Fissão nuclear do urânio", "Fusão do hidrogênio, como no Sol", "Queima de biomassa", "Efeito fotovoltaico"],
          c: 0, e: "Nas usinas atuais, o núcleo do urânio é dividido (fissão), liberando bastante energia térmica."
        },
        {
          p: "Qual é um dos principais desafios da energia nuclear?",
          o: ["Armazenar com segurança os rejeitos radioativos por muito tempo", "Emitir muito CO2 na geração", "Depender totalmente do vento", "Não conseguir gerar eletricidade em larga escala"],
          c: 0, e: "Mesmo com baixa emissão de carbono, a energia nuclear produz rejeitos radioativos que precisam de armazenamento seguro por anos."
        },
        {
          p: "Qual destas fontes ainda é muito usada no mundo, apesar de ser bem poluente?",
          o: ["Carvão mineral", "Energia eólica", "Energia solar", "Biomassa"],
          c: 0, e: "O carvão mineral, mesmo poluente, ainda representa uma fatia grande da matriz energética mundial."
        },
        {
          p: "Historicamente, qual região concentra boa parte das reservas mundiais de petróleo?",
          o: ["Oriente Médio", "Escandinávia", "Oceania", "Antártida"],
          c: 0, e: "O Oriente Médio concentra historicamente grandes reservas de petróleo, o que influencia a geopolítica da energia."
        },
        {
          p: "Comparada à matriz mundial, a matriz elétrica brasileira se destaca por...",
          o: ["Ter forte participação de renováveis, principalmente hidrelétrica", "Depender quase só do carvão", "Ser praticamente 100% nuclear", "Não usar nenhuma renovável"],
          c: 0, e: "Diferente da média mundial, a matriz brasileira tem uma das maiores participações de renováveis do mundo."
        }
      ],
      transformacao: [
        {
          p: "Numa termelétrica a carvão, qual é a sequência de transformação de energia?",
          o: ["Química → térmica → mecânica → elétrica", "Elétrica → química → térmica", "Luminosa → sonora → elétrica", "Nuclear → química → térmica"],
          c: 0, e: "A energia química do carvão vira térmica ao queimar, aquece a água, gera vapor, move as turbinas (mecânica) e vira elétrica."
        },
        {
          p: "Num painel fotovoltaico, a energia é transformada direto de qual forma pra qual?",
          o: ["Luminosa para elétrica", "Química para elétrica", "Mecânica para elétrica", "Térmica para elétrica"],
          c: 0, e: "O efeito fotovoltaico converte a luz do sol direto em eletricidade, sem etapas no meio."
        },
        {
          p: "Numa hidrelétrica, qual é a sequência de transformação de energia?",
          o: ["Potencial → cinética → mecânica → elétrica", "Química → elétrica direto", "Nuclear → térmica → elétrica", "Luminosa → química"],
          c: 0, e: "A água armazenada tem energia potencial, que vira cinética ao cair, gira as turbinas (mecânica) e vira eletricidade."
        },
        {
          p: "Quando uma pilha acende uma lanterna, a energia passa por qual transformação?",
          o: ["Química em elétrica e depois em luminosa", "Nuclear em térmica", "Mecânica em química", "Sonora em elétrica"],
          c: 0, e: "As reações químicas da pilha geram corrente elétrica, que ao passar pela lâmpada vira luz (e um pouco de calor)."
        },
        {
          p: "Um alto-falante transforma energia elétrica em qual tipo de energia?",
          o: ["Energia sonora", "Energia nuclear", "Energia potencial", "Energia química"],
          c: 0, e: "O sinal elétrico movimenta uma membrana, que produz vibrações no ar percebidas como som."
        },
        {
          p: "Pela Lei da Conservação de Energia, quando ela passa de uma forma pra outra...",
          o: ["A quantidade total se mantém, só muda de forma", "Parte dela é destruída", "Ela é criada do nada", "Ela desaparece"],
          c: 0, e: "A energia não pode ser criada nem destruída — apenas transformada. Esse é o princípio da conservação de energia."
        },
        {
          p: "Numa usina nuclear, a energia da fissão do urânio primeiro vira...",
          o: ["Energia térmica, que gera vapor e move turbinas", "Energia luminosa direto", "Energia química", "Energia sonora"],
          c: 0, e: "A fissão libera energia térmica intensa, usada pra gerar vapor que move as turbinas — parecido com uma termelétrica."
        },
        {
          p: "Pedalando uma bicicleta com dínamo pra acender uma luz, a energia segue qual ordem?",
          o: ["Mecânica → elétrica → luminosa", "Química → nuclear", "Térmica → sonora", "Luminosa → mecânica"],
          c: 0, e: "O movimento das pernas gira o dínamo, que gera eletricidade e acende a lâmpada."
        }
      ],
      impacto: [
        {
          p: "Uma hidrelétrica vai ser construída perto de comunidades ribeirinhas e mata nativa. Qual atitude é mais responsável?",
          o: ["Fazer estudo de impacto ambiental e ouvir as comunidades", "Começar a obra sem estudo nenhum", "Ignorar as comunidades locais", "Desviar o rio sem avisar ninguém"],
          c: 0, e: "Estudos de impacto ambiental e consulta às comunidades são etapas essenciais pra reduzir danos em grandes obras de energia."
        },
        {
          p: "Uma termelétrica a carvão aumentou a produção. Qual consequência ambiental está mais ligada a essa fonte?",
          o: ["Mais emissão de gases de efeito estufa e poluentes", "Menos poluição do ar", "Nenhum impacto relevante", "Mais biodiversidade na região"],
          c: 0, e: "Queimar carvão libera bastante CO2 e outros poluentes, contribuindo pro aquecimento global e problemas respiratórios."
        },
        {
          p: "Houve um vazamento de petróleo perto da costa. Qual é a atitude mais adequada?",
          o: ["Acionar contenção e limpeza de emergência, monitorando fauna e flora", "Esperar a maré levar o óleo embora", "Não fazer nada", "Aumentar a extração no mesmo lugar"],
          c: 0, e: "Vazamentos exigem resposta rápida com contenção, limpeza e monitoramento pra reduzir os danos ao ecossistema."
        },
        {
          p: "Painéis solares em larga escala numa área desértica podem gerar qual discussão socioambiental?",
          o: ["Uso do solo e impacto em ecossistemas locais, mesmo sendo fonte limpa", "Nenhuma, energia solar não tem impacto algum", "Mais poluição do ar", "Resíduo radioativo"],
          c: 0, e: "Mesmo fontes limpas podem gerar debate sobre uso do solo ou impacto em espécies nativas — sustentabilidade tem vários lados."
        },
        {
          p: "Comunidades perto de parques eólicos às vezes reclamam de qual impacto?",
          o: ["Barulho das turbinas e mudança na paisagem", "Vazamento de petróleo", "Poluição do ar por combustível", "Contaminação radioativa"],
          c: 0, e: "Mesmo sem poluir, parques eólicos podem incomodar pelo ruído e pela mudança visual na paisagem."
        },
        {
          p: "Um dos impactos sociais de grandes hidrelétricas é...",
          o: ["A realocação de quem morava na área alagada pelo reservatório", "Aumento da caça em todo o país", "Extinção garantida de espécies aquáticas", "Nenhum impacto social"],
          c: 0, e: "A formação do reservatório pode alagar áreas habitadas, exigindo o reassentamento de famílias."
        },
        {
          p: "Rejeito radioativo de usina nuclear precisa de qual tipo de tratamento?",
          o: ["Armazenamento especial e isolado por muito tempo", "Descarte comum em aterro", "Liberação direta em rio", "Nenhum tratamento"],
          c: 0, e: "O material radioativo continua perigoso por anos e precisa de armazenamento seguro e isolado."
        },
        {
          p: "Ao planejar a matriz energética de um país, o que é uma escolha mais sustentável?",
          o: ["Diversificar fontes, priorizando renováveis e pensando nos impactos", "Depender de uma única fonte não renovável", "Ignorar o impacto ambiental", "Não ouvir as comunidades locais"],
          c: 0, e: "Matrizes mais sustentáveis costumam diversificar as fontes renováveis e considerar os impactos sociais e ambientais."
        }
      ],
      estacao: [
        { texto: "Quase metade da matriz elétrica brasileira vem de hidrelétricas — o país é referência mundial em energia renovável na geração de eletricidade." },
        { texto: "No mundo todo, carvão, petróleo e gás natural ainda respondem pela maior parte da matriz energética global." },
        { texto: "O litoral nordestino é uma das regiões com maior potencial eólico do Brasil, por causa dos ventos constantes vindos do oceano." },
        { texto: "Vários países da Europa investem em energia eólica offshore, instalada no mar, pra ampliar a geração renovável." },
        { texto: "A China é uma das maiores investidoras em energia solar e eólica do mundo, mas ainda depende bastante de carvão." },
        { texto: "O Oriente Médio concentra historicamente grandes reservas de petróleo, o que influencia bastante a geopolítica da energia." },
        { texto: "A construção de grandes hidrelétricas na Amazônia gera debate sobre equilibrar energia limpa e preservação da floresta e dos povos locais." },
        { texto: "Além da hidrelétrica, o Sul do Brasil também vem ampliando a energia eólica em áreas costeiras." }
      ],
      sorte: [
        { texto: "Chuva forte enche os reservatórios! Seu grupo ganha energia limpa extra.", ef: { limpa: 3, convencional: 0, impacto: 0 } },
        { texto: "Uma seca prolongada reduz a geração hidrelétrica do seu grupo.", ef: { limpa: -2, convencional: 0, impacto: 0 } },
        { texto: "Vento forte na costa: as turbinas eólicas do seu grupo geram acima do esperado.", ef: { limpa: 2, convencional: 0, impacto: 0 } },
        { texto: "Vazamento num duto de petróleo afeta a região do seu grupo.", ef: { limpa: 0, convencional: 0, impacto: 3 } },
        { texto: "Uma tecnologia nova deixa os painéis solares do seu grupo mais eficientes.", ef: { limpa: 2, convencional: 0, impacto: 0 } },
        { texto: "Alta demanda liga termelétricas extras pra atender seu grupo.", ef: { limpa: 0, convencional: 2, impacto: 2 } },
        { texto: "Um programa de reflorestamento compensa parte das emissões do seu grupo.", ef: { limpa: 0, convencional: 0, impacto: -2 } },
        { texto: "Manutenção de emergência interrompe uma usina: seu grupo perde a próxima rodada.", ef: { limpa: 0, convencional: 0, impacto: 0, pular: true } },
        { texto: "Investimento externo impulsiona a biomassa do seu grupo.", ef: { limpa: 2, convencional: 0, impacto: 0 } },
        { texto: "Falha de segurança pede inspeção extra numa usina nuclear do seu grupo.", ef: { limpa: 0, convencional: 0, impacto: 2 } }
      ]
    };

    const CORES_GRUPO = ['#e2a63b', '#3f8f82', '#3d6e91', '#b5533f', '#7c5b8e', '#4c7a4a'];

    let jogo = {
      numGrupos: 3,
      numRodadas: 10,
      setup: { nomes: [], personagens: [] },
      grupos: [],
      vezDe: 0,
      rodada: 1,
      esperandoCarta: false
    };

    function mudarTela(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      if (id === 'tela-setup') desenharSetup();
      if (id === 'tela-regras') desenharPersonagensRegras();
      window.scrollTo(0, 0);
    }

    function desenharPersonagensRegras() {
      const grade = document.getElementById('grade-personagens-regras');
      grade.innerHTML = PERSONAGENS.map(p => `
    <div class="personagem">
      <div class="p-nome">${p.icone} ${p.nome}</div>
      <div class="p-cargo">${p.cargo} · especialidade: ${NOMES_CASA[p.especialidade]}</div>
      <p>${p.bio}</p>
    </div>`).join('');
    }


    function garantirListasSetup() {
      const n = jogo.numGrupos;
      while (jogo.setup.nomes.length < n) jogo.setup.nomes.push('Grupo ' + (jogo.setup.nomes.length + 1));
      while (jogo.setup.personagens.length < n) jogo.setup.personagens.push(jogo.setup.personagens.length % PERSONAGENS.length);
      jogo.setup.nomes.length = n;
      jogo.setup.personagens.length = n;
    }

    function desenharSetup() {
      garantirListasSetup();

      const opcoesGrupos = document.getElementById('opcoes-grupos');
      opcoesGrupos.innerHTML = '';
      for (let n = 2; n <= 6; n++) {
        const b = document.createElement('button');
        b.textContent = n + ' grupos';
        if (n === jogo.numGrupos) b.classList.add('marcado');
        b.onclick = () => { jogo.numGrupos = n; desenharSetup(); };
        opcoesGrupos.appendChild(b);
      }

      const lista = document.getElementById('lista-equipes');
      lista.innerHTML = '';
      for (let i = 0; i < jogo.numGrupos; i++) {
        const personagemIdx = jogo.setup.personagens[i];
        const p = PERSONAGENS[personagemIdx];

        const div = document.createElement('div');
        div.className = 'equipe';

        const linha = document.createElement('div');
        linha.className = 'equipe-linha';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Nome do grupo ' + (i + 1);
        input.value = jogo.setup.nomes[i];
        input.oninput = e => { jogo.setup.nomes[i] = e.target.value; };

        const select = document.createElement('select');
        PERSONAGENS.forEach((pers, idx) => {
          const opt = document.createElement('option');
          opt.value = idx;
          opt.textContent = pers.icone + ' ' + pers.nome;
          if (idx === personagemIdx) opt.selected = true;
          select.appendChild(opt);
        });
        select.onchange = e => {
          const novo = parseInt(e.target.value);
          // se alguém já tinha escolhido esse personagem, troca com ele
          const outro = jogo.setup.personagens.findIndex((v, j) => v === novo && j !== i);
          if (outro >= 0) jogo.setup.personagens[outro] = jogo.setup.personagens[i];
          jogo.setup.personagens[i] = novo;
          desenharSetup();
        };

        linha.appendChild(input);
        linha.appendChild(select);
        div.appendChild(linha);

        const info = document.createElement('div');
        info.className = 'info-personagem';
        info.innerHTML = `${p.icone} ${p.cargo} — especialidade em <b>${NOMES_CASA[p.especialidade]}</b>`;
        div.appendChild(info);

        lista.appendChild(div);
      }

      const opcoesRodadas = document.getElementById('opcoes-rodadas');
      opcoesRodadas.innerHTML = '';
      [8, 12, 16].forEach(n => {
        const b = document.createElement('button');
        b.textContent = n + ' rodadas';
        if (n === jogo.numRodadas) b.classList.add('marcado');
        b.onclick = () => { jogo.numRodadas = n; desenharSetup(); };
        opcoesRodadas.appendChild(b);
      });
    }

    function comecarJogo() {
      garantirListasSetup();
      jogo.grupos = [];
      for (let i = 0; i < jogo.numGrupos; i++) {
        const personagem = PERSONAGENS[jogo.setup.personagens[i]];
        jogo.grupos.push({
          nome: jogo.setup.nomes[i].trim() || ('Grupo ' + (i + 1)),
          personagem,
          cor: CORES_GRUPO[i],
          posicao: 0,
          limpa: 0,
          convencional: 0,
          impacto: 0,
          pulaVez: false
        });
      }
      jogo.vezDe = 0;
      jogo.rodada = 1;
      mudarTela('tela-jogo');
      desenharTabuleiro();
      desenharPlacar();
      atualizarPainelDaVez();
      registrar('A partida começou! Boa sorte reconstruindo a energia de Vilanova.');
    }

    function desenharTabuleiro() {
      const tab = document.getElementById('tabuleiro');
      tab.innerHTML = '';
      CASAS.forEach((tipo, idx) => {
        const casa = document.createElement('div');
        casa.className = 'casa ' + tipo;
        casa.id = 'casa-' + idx;
        casa.innerHTML = `<span class="num">${idx + 1}</span>${ICONES[tipo]}<div class="pinos" id="pinos-${idx}"></div>`;
        tab.appendChild(casa);
      });
      posicionarPinos();
    }

    function posicionarPinos() {
      document.querySelectorAll('[id^="pinos-"]').forEach(el => el.innerHTML = '');
      jogo.grupos.forEach(g => {
        const idx = g.posicao % CASAS.length;
        const alvo = document.getElementById('pinos-' + idx);
        if (alvo) {
          const pino = document.createElement('div');
          pino.className = 'pino';
          pino.style.background = g.cor;
          pino.title = g.nome;
          alvo.appendChild(pino);
        }
      });
    }

    function desenharPlacar() {
      const placar = document.getElementById('placar');
      placar.innerHTML = '';
      jogo.grupos.forEach((g, i) => {
        const total = g.limpa + g.convencional;
        const pctLimpa = total ? (g.limpa / total * 100) : 50;
        const pctConv = total ? (g.convencional / total * 100) : 50;

        const linha = document.createElement('div');
        linha.className = 'linha-time' + (i === jogo.vezDe ? ' vez' : '');
        linha.innerHTML = `
      <div class="linha-time-topo">
        <div class="nome-tag">${g.personagem.icone}<span class="nome-txt">${g.nome}</span></div>
        <div style="font-size:11px; color:var(--ink-soft);">casa ${(g.posicao % CASAS.length) + 1}</div>
      </div>
      <div class="barra"><div class="limpa" style="width:${pctLimpa}%"></div><div class="conv" style="width:${pctConv}%"></div></div>
      <div class="mini-info">
        <span>limpa: <b>${g.limpa}</b></span>
        <span>convencional: <b>${g.convencional}</b></span>
        <span>impacto: <b>${g.impacto}</b></span>
      </div>`;
        placar.appendChild(linha);
      });
    }

    function registrar(msg) {
      const reg = document.getElementById('registro');
      const linha = document.createElement('div');
      linha.textContent = msg;
      reg.prepend(linha);
    }

    function atualizarPainelDaVez() {
      const g = jogo.grupos[jogo.vezDe];
      document.getElementById('rotulo-rodada').textContent = `rodada ${jogo.rodada} de ${jogo.numRodadas}`;
      document.getElementById('nome-vez').textContent = g.nome;
      document.getElementById('linha-personagem-vez').textContent =
        `${g.personagem.icone} ${g.personagem.nome} · especialidade em ${NOMES_CASA[g.personagem.especialidade]}`;
      document.getElementById('botao-rolar').disabled = false;
      document.getElementById('dado').textContent = '?';
      document.getElementById('dica-vez').textContent = 'role o dado para andar no tabuleiro.';

      if (g.pulaVez) {
        document.getElementById('dica-vez').textContent = 'esse grupo perde a vez por causa de um evento anterior.';
        document.getElementById('botao-rolar').disabled = true;
        setTimeout(() => {
          g.pulaVez = false;
          registrar(`${g.nome} perdeu a vez nesta rodada.`);
          passarVez();
        }, 1300);
      }
    }

    function rolarDado() {
      if (jogo.esperandoCarta) return;
      document.getElementById('botao-rolar').disabled = true;
      const dado = document.getElementById('dado');
      dado.classList.add('girando');
      let voltas = 0;
      const iv = setInterval(() => {
        dado.textContent = 1 + Math.floor(Math.random() * 6);
        voltas++;
        if (voltas > 6) {
          clearInterval(iv);
          dado.classList.remove('girando');
          const valor = 1 + Math.floor(Math.random() * 6);
          dado.textContent = valor;
          andar(valor);
        }
      }, 70);
    }

    function andar(passos) {
      const g = jogo.grupos[jogo.vezDe];
      g.posicao += passos;
      const idx = g.posicao % CASAS.length;
      posicionarPinos();
      desenharPlacar();
      const casaEl = document.getElementById('casa-' + idx);
      if (casaEl) {
        casaEl.style.outline = '3px solid var(--ink)';
        setTimeout(() => casaEl.style.outline = '', 800);
      }
      registrar(`${g.nome} tirou ${passos} e caiu na casa ${idx + 1} (${NOMES_CASA[CASAS[idx]]}).`);
      abrirCarta(CASAS[idx]);
    }

    function abrirCarta(tipo) {
      jogo.esperandoCarta = true;
      const fundo = document.getElementById('fundo-modal');
      const modal = document.getElementById('carta-modal');
      const g = jogo.grupos[jogo.vezDe];
      const temBonus = g.personagem.especialidade === tipo;
      fundo.classList.remove('escondido');

      if (tipo === 'estacao') {
        const c = sorteia(BARALHOS.estacao);
        const efeito = { limpa: temBonus ? 2 : 1, convencional: 0, impacto: 0 };
        modal.innerHTML = `
      <span class="tag">◈ estação</span>
      <div class="linha-personagem-carta">${g.personagem.icone} ${g.personagem.nome} dá uma olhada na região...</div>
      <h3>Fato sobre a matriz energética</h3>
      <p class="texto-fato">${c.texto}</p>
      <div class="tags-efeito"><span class="tag-efeito">+${efeito.limpa} energia limpa</span></div>
      ${temBonus ? '<div class="bonus">✨ bônus do Tio Mapa</div>' : ''}
      <div class="row" style="margin-top:16px;"><button class="btn" onclick='resolverSemPergunta(${JSON.stringify(efeito)})'>Continuar</button></div>`;
        return;
      }

      if (tipo === 'sorte') {
        const c = sorteia(BARALHOS.sorte);
        const ef = { ...c.ef };
        if (temBonus) {
          if (ef.impacto > 0) ef.impacto = Math.max(0, ef.impacto - 1);
          if (ef.limpa > 0) ef.limpa += 1;
          if (ef.limpa < 0) ef.limpa = Math.min(0, ef.limpa + 1);
        }
        const tags = [];
        if (ef.limpa) tags.push(`<span class="tag-efeito">${ef.limpa > 0 ? '+' : ''}${ef.limpa} limpa</span>`);
        if (ef.convencional) tags.push(`<span class="tag-efeito">${ef.convencional > 0 ? '+' : ''}${ef.convencional} convencional</span>`);
        if (ef.impacto) tags.push(`<span class="tag-efeito">${ef.impacto > 0 ? '+' : ''}${ef.impacto} impacto</span>`);
        if (ef.pular) tags.push(`<span class="tag-efeito">perde a próxima vez</span>`);
        modal.innerHTML = `
      <span class="tag">★ sorte</span>
      <div class="linha-personagem-carta">${g.personagem.icone} ${g.personagem.nome} reage ao imprevisto...</div>
      <h3>Evento inesperado</h3>
      <p class="texto-fato">${c.texto}</p>
      <div class="tags-efeito">${tags.join('')}</div>
      ${temBonus ? '<div class="bonus">✨ bônus da Ventania</div>' : ''}
      <div class="row" style="margin-top:16px;"><button class="btn" onclick='resolverSorte(${JSON.stringify(ef)})'>Continuar</button></div>`;
        return;
      }

      const c = sorteia(BARALHOS[tipo]);
      const opcoes = c.o.map((op, i) => `<button class="opcao" data-i="${i}" onclick="responder(${i})">${op}</button>`).join('');
      modal.innerHTML = `
    <span class="tag">${ICONES[tipo]} ${NOMES_CASA[tipo]}</span>
    <div class="linha-personagem-carta">${g.personagem.icone} ${g.personagem.nome} analisa a situação${temBonus ? ' — essa é a especialidade dele(a)!' : ''}</div>
    <h3>${c.p}</h3>
    <div class="lista-opcoes" id="lista-opcoes">${opcoes}</div>
    <div class="feedback" id="feedback"></div>`;
      modal._cartaAtual = c;
      modal._tipoAtual = tipo;
      modal._bonusAtual = temBonus;
    }

    function sorteia(baralho) {
      return baralho[Math.floor(Math.random() * baralho.length)];
    }

    function responder(i) {
      const modal = document.getElementById('carta-modal');
      const c = modal._cartaAtual;
      const tipo = modal._tipoAtual;
      const temBonus = modal._bonusAtual;
      const opcoes = modal.querySelectorAll('.opcao');
      opcoes.forEach(o => o.disabled = true);

      const acertou = (i === c.c);
      opcoes[c.c].classList.add('certa');
      if (!acertou) opcoes[i].classList.add('errada');

      const fb = document.getElementById('feedback');
      fb.classList.add('mostrar', acertou ? 'ok' : 'erro');
      fb.textContent = (acertou ? '✓ Isso mesmo! ' : '✕ Quase. ') + c.e;

      const efeito = calcularEfeito(tipo, acertou, temBonus);
      aplicarEfeito(efeito);

      const bloco = document.createElement('div');
      bloco.className = 'row';
      bloco.style.marginTop = '12px';
      bloco.innerHTML = tagsDeEfeito(efeito) + (temBonus ? '<div class="bonus">✨ bônus de especialista aplicado</div>' : '') +
        `<button class="btn" style="margin-top:8px;" onclick="fecharCarta()">Continuar</button>`;
      modal.appendChild(bloco);
    }

    function calcularEfeito(tipo, acertou, bonus) {
      let d;
      if (tipo === 'renovavel') {
        d = { limpa: acertou ? 3 : 1, convencional: 0, impacto: 0 };
        if (bonus) d.limpa += 1;
      } else if (tipo === 'naorenovavel') {
        d = acertou ? { limpa: 0, convencional: 2, impacto: 1 } : { limpa: 0, convencional: 1, impacto: 2 };
        if (bonus) d.impacto = Math.max(0, d.impacto - 1);
      } else if (tipo === 'transformacao') {
        d = acertou ? { limpa: 2, convencional: 1, impacto: 0 } : { limpa: 0, convencional: 0, impacto: 1 };
        if (bonus) { if (acertou) d.limpa += 1; else d.impacto = Math.max(0, d.impacto - 1); }
      } else if (tipo === 'impacto') {
        d = acertou ? { limpa: 2, convencional: 0, impacto: -2 } : { limpa: 0, convencional: 0, impacto: 3 };
        if (bonus) { if (acertou) d.impacto -= 1; else d.impacto = Math.max(0, d.impacto - 1); }
      } else {
        d = { limpa: 0, convencional: 0, impacto: 0 };
      }
      return d;
    }

    function tagsDeEfeito(d) {
      const tags = [];
      if (d.limpa) tags.push(`<span class="tag-efeito">${d.limpa > 0 ? '+' : ''}${d.limpa} limpa</span>`);
      if (d.convencional) tags.push(`<span class="tag-efeito">${d.convencional > 0 ? '+' : ''}${d.convencional} convencional</span>`);
      if (d.impacto) tags.push(`<span class="tag-efeito">${d.impacto > 0 ? '+' : ''}${d.impacto} impacto</span>`);
      return `<div class="tags-efeito">${tags.join('')}</div>`;
    }

    function aplicarEfeito(d) {
      const g = jogo.grupos[jogo.vezDe];
      g.limpa = Math.max(0, g.limpa + (d.limpa || 0));
      g.convencional = Math.max(0, g.convencional + (d.convencional || 0));
      g.impacto = Math.max(0, g.impacto + (d.impacto || 0));
      desenharPlacar();
    }

    function resolverSemPergunta(efeito) {
      aplicarEfeito(efeito);
      registrar(`${jogo.grupos[jogo.vezDe].nome} passou por uma estação informativa.`);
      fecharCarta();
    }

    function resolverSorte(ef) {
      aplicarEfeito(ef);
      const g = jogo.grupos[jogo.vezDe];
      if (ef.pular) g.pulaVez = true;
      registrar(`${g.nome} enfrentou um evento de sorte.`);
      fecharCarta();
    }

    function fecharCarta() {
      document.getElementById('fundo-modal').classList.add('escondido');
      document.getElementById('carta-modal').innerHTML = '';
      jogo.esperandoCarta = false;
      passarVez();
    }

    function passarVez() {
      jogo.vezDe++;
      if (jogo.vezDe >= jogo.grupos.length) {
        jogo.vezDe = 0;
        jogo.rodada++;
      }
      if (jogo.rodada > jogo.numRodadas) {
        encerrarJogo();
        return;
      }
      atualizarPainelDaVez();
    }

    function encerrarJogo() {
      const resultado = jogo.grupos
        .map(g => ({ ...g, pontos: (g.limpa * 3) + (g.convencional * 1) - (g.impacto * 2) }))
        .sort((a, b) => b.pontos - a.pontos);

      const ranking = document.getElementById('ranking');
      ranking.innerHTML = '';
      resultado.forEach((g, i) => {
        const linha = document.createElement('div');
        linha.className = 'linha-rank' + (i === 0 ? ' vencedor' : '');
        linha.innerHTML = `
      <div class="rank-num">${i + 1}</div>
      <div class="rank-info">
        <div class="nome-tag">${g.personagem.icone}<span class="nome-txt">${g.nome}</span></div>
        <div class="mini-info" style="margin-top:5px;">
          <span>limpa: <b>${g.limpa}</b></span>
          <span>convencional: <b>${g.convencional}</b></span>
          <span>impacto: <b>${g.impacto}</b></span>
        </div>
      </div>
      <div class="rank-pontos">${g.pontos} pts</div>`;
        ranking.appendChild(linha);
      });
      mudarTela('tela-fim');
    }

    desenharSetup();