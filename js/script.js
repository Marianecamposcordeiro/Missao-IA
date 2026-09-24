import {aleatorio} from ‘./aleatorio.js’;
import {perguntas} from ‘./perguntas.js;
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  const perguntas = [
    {
        enunciado: "Em relação à preservação dos ecossistemas aquáticos, qual atitude garante a continuidade dos estoques de peixes e o equilíbrio da fauna?",
        alternativas: [
            {
                texto: "Qual é a sua abordagem principal em relação aos recursos pesqueiros ao planejar uma atividade à beira-rio ou no mar?",
                afirmacao:"Pescar exclusivamente para consumo próprio, respeitando rigorosamente as cotas diárias e os tamanhos mínimos do peixe permitidos pela legislação.,"
                "Optar por passeios de observação e ecoturismo náutico, sem a captura ou remoção de qualquer espécie do ecossistema."
            },
            {
                texto:  "pescador Consciente: Valoriza o aproveitamento direto e sustentável da natureza para alimentação, mantendo a atividade estritamente alinhada com as regras de preservação ambiental..",
                afirmacao: "Observador da Fauna: Prioriza o impacto zero no ecossistema aquático, preferindo a contemplação e o registro da biodiversidade em seu estado natural.."
            }    
           
        ]
    },
    {
       
            enunciado: "Como você orienta suas escolhas ao adquirir frutos do mar para consumo?"
                {
                    texto: "Escolho produtos com selos de certificação sustentável e oriundos de aquicultura responsavel.",
                    afirmacao: "Escolho produtos com selos de certificação sustentável e oriundos de aquicultura responsavel."
                },
                {
                    texto:  "Seria interessante explorar primeiramente fontes renováveis exotérmicas, em segundo plano utilizar a energia geotérmica apesar dos custos elevados de explorações e possibilidades de contaminação de rios. ",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacaoirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
