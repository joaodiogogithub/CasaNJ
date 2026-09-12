export interface Produto {
  id: number; // Unique identifier for the product
  nome: string; // Name of the product
  descricao: string; // Description of the product
  descricaoDetalhada?: string; // Optional detailed description of the product
  preco: number; // Price of the product
  imagem: string[]; // Image URL(s) of the product
  categoria: string; // Category of the product
  modoDeUso?: string[]; // Optional usage instructions for the product
  itensInclusos?: string[]; // List of included items with the product
  destaque?: boolean; // Indicates if the product is highlighted
  whatsappLink?: string; // Link to the WhatsApp chat for the product
  desconto?: number; // Discount percentage for the product
  promocao?: boolean; // Indicates if the product is on promotion
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "KIT Açucar",
    descricao:
      "PRODUTO ORIGINAL - Tenha em mãos o poderoso kit profissional para cabelos descoloridos, emborrachados, elasticos e quebradiços.",
    descricaoDetalhada:
      "O Kit Cliente Açúcar Coiffer Penetra profundamente no córtex para reparação do substrato proteico danificado, onde se encontra a cistina e a arginina. É rico em enzimas lacto, que condicionam e hidratam o substrato dos cabelos elásticos, fortalecendo-os, interrompendo o rompimento dos fios, por excessiva elasticidade. Tira o emborrachado, da brilho, destacando mais ainda o tom dos cabelos loiros ou mechados.",
    preco: 100.00,
    imagem: ["/products/acucar/1.jpg", "/products/acucar/2.png"],
    categoria: "Kit de Produtos",
    modoDeUso: [
      "Lavar o cabelo com o Shampoo Açúcar Coiffer, depois enxaguar (se necessário lavar duas vezes).",
      "Repetir o processo com o Condicionador e enxaguar.",
      "Aplicar a Máscara em mechas finas e deixar agir de 5 a 10 minutos podendo deixar por mais tempo na touca (SOS).",
    ],
    itensInclusos: [
      "1x Shampoo Açucar (300ml)",
      "1x Condicionador Açucar (350g)",
      "1x Máscara Açucar (350g)",
    ],
    whatsappLink: "https://wa.me/5516991282357?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Açucar.",
    destaque: true,
    desconto: 15,
    promocao: true,
  },

  {
    id: 2,
    nome: "KIT Argan",
    descricao:
      "PRODUTO ORIGINAL - Nutrição Avançada e Brilho Reflexivo O Kit Argan Coiffer é um sistema completo de tratamento capilar desenvolvido para doar nutrientes essenciais aos fios, suavizando a textura áspera e eliminando o ressecamento de cabelos opacos, desidratados ou fragilizados por processos químicos.",
    descricaoDetalhada:
      "O grande destaque da linha é o Óleo de Argan legítimo, conhecido mundialmente como o 'Ouro Marroquino'. Extraído diretamente das sementes das frutas das árvores de Argan no Marrocos, este ativo precioso penetra na fibra capilar para realizar uma hidratação profunda e prolongada. O resultado é um cabelo com brilho espelhado, toque aveludado, maleabilidade e proteção eficiente contra agressões externas e ferramentas de calor. Principais Benefícios Nutrição e Hidratação Profunda: Repõe a carga lipídica e a umidade natural dos cabelos ressecados.   Brilho Reflexivo e Maciez: Sela as cutículas, promovendo alta reflexão de luz e textura suave desde a primeira aplicação.   Ação Antifrizz e Alinhamento: Disciplina os fios rebeldes e reduz sensivelmente o frizz.   Recuperação de Casos Críticos: Ideal para restaurar a saúde de cabelos que passaram por progressivas, descolorações ou uso frequente de chapinha e secador.   Uso Versátil: Perfeito para resultados de salão no cuidado diário em casa (Home Care).  ",
    preco: 110.00,
    imagem: ["/products/argan/1.webp", "/products/argan/2.png"],
    categoria: "Kit de Produtos",
    modoDeUso: [
      "Aplique o Shampoo Argan Coiffer nos cabelos molhados, massageando suavemente o couro cabeludo. Enxágue por completo.",
      "Utilize o Shampote como um passo potencializador (ou alternando com o shampoo tradicional). Massageie os fios e deixe agir de 1 a 3 minutos antes de enxaguar. ",
      "Aplique o Condicionador Argan Coiffer no comprimento e pontas dos fios úmidos. Deixe agir por alguns minutos para selar as cutículas e enxágue abundantemente.",
      "Distribua algumas gotas do Óleo de Argan na palma das mãos e aplique nos fios (secos ou úmidos), mecha por mecha, concentrando do comprimento às pontas para finalizar com ação antifrizz e proteção térmica."
    ],
    itensInclusos: [
      "1x Shampoo Argan (300ml)",
      "1x Shampote(350g)",
      "1x Condicionador Argan (350g)",
      "1x Óleo de Argan (30ml)",
    ],
    whatsappLink: "https://wa.me/5516991282357?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Argan.",
    destaque: true,
    desconto: 10,
    promocao: true,
  },

  {
    id: 3,
    nome: "Óleo de Argan  ",
    descricao:
      "PRODUTO ORIGINAL - Nutrição Avançada e Brilho Reflexivo O Kit Argan Coiffer é um sistema completo de tratamento capilar desenvolvido para doar nutrientes essenciais aos fios, suavizando a textura áspera e eliminando o ressecamento de cabelos opacos, desidratados ou fragilizados por processos químicos.",
    descricaoDetalhada:
      "O grande destaque da linha é o Óleo de Argan legítimo, conhecido mundialmente como o 'Ouro Marroquino'. Extraído diretamente das sementes das frutas das árvores de Argan no Marrocos, este ativo precioso penetra na fibra capilar para realizar uma hidratação profunda e prolongada. O resultado é um cabelo com brilho espelhado, toque aveludado, maleabilidade e proteção eficiente contra agressões externas e ferramentas de calor.",
    preco: 40.00,
    imagem: ["/products/argan/3.webp", "/products/argan/4.webp"],
    categoria: "Oleos",
    modoDeUso: [
      "Distribua algumas gotas do Óleo de Argan na palma das mãos e aplique nos fios (secos ou úmidos), mecha por mecha, concentrando do comprimento às pontas para finalizar com ação antifrizz e proteção térmica.",
    ],
    itensInclusos: [
      "1x Óleo de Argan (30ml)",
    ],
    whatsappLink: "https://wa.me/5516991282357?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Kit%20Argan.",
    destaque: false,
    desconto: 0,
    promocao: false,
  }

];

export function encontrarProduto(id: string) {
  return produtos.find(
    (produto) => produto.id === Number(id)
  );
}