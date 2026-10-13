export const site = {
  name: 'Marques Pimenta',
  url: 'https://escritoriomp.com.br',
  person: 'Halson Hugo Pimenta',
  registration: 'OAB/DF 69.858',
  phone: '+55 61 98668-4723',
  whatsapp: 'https://wa.me/5561986684723?text=' + encodeURIComponent('Olá, gostaria de informações sobre o atendimento jurídico online.'),
};

export const practices = [
  {
    id: 'trabalhista', label: 'Trabalhista', pillarFocus: 'Trabalho e emprego', title: 'Relações de trabalho',
    description: 'Atendimento a trabalhadores e empresas em dúvidas e conflitos ligados ao trabalho. A orientação parte da situação apresentada e dos caminhos previstos na legislação.',
    topics: ['Para trabalhadores', 'Para empresas'],
  },
  {
    id: 'empresarial', label: 'Empresarial', pillarFocus: 'Negócios e contratos', title: 'Negócios e contratos',
    description: 'Orientação jurídica para empresas em contratos, cobranças e decisões do dia a dia dos negócios.',
    topics: ['Contratos', 'Cobranças', 'Consultoria jurídica'],
  },
  {
    id: 'civel', label: 'Cível', pillarFocus: 'Vida civil e patrimônio', title: 'Questões da vida civil',
    description: 'Atendimento a pessoas e empresas em questões da vida civil. A análise considera os fatos, os direitos envolvidos e os caminhos previstos na legislação.',
    topics: ['Para pessoas', 'Para empresas'],
  },
];

export const questions = [
  { question: 'Como funciona o atendimento?', answer: 'O atendimento é realizado online. O primeiro contato pode ser feito pelo WhatsApp, para obter informações e combinar o atendimento com o advogado responsável.' },
  { question: 'Qual é a região de atuação?', answer: 'A atuação é voltada a Brasília e ao Distrito Federal. O atendimento é online, sem necessidade de comparecer a um escritório físico.' },
  { question: 'O escritório atende pessoas e empresas?', answer: 'Sim. Há atendimento para pessoas e empresas nas áreas Trabalhista, Empresarial e Cível. Na área Trabalhista, são atendidos tanto trabalhadores quanto empresas.' },
  { question: 'Quem é o advogado responsável?', answer: 'O advogado responsável é Halson Hugo Pimenta, inscrito na OAB/DF sob o número 69.858. Marques Pimenta é o nome da marca.' },
];
