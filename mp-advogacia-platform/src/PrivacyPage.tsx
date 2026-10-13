import { site } from './data/site';

export default function PrivacyPage() {
  const privacyContact = site.whatsapp.split('?')[0] + '?text=' + encodeURIComponent('Olá, gostaria de esclarecer uma dúvida sobre privacidade e meus dados pessoais.');
  return <>
    <header className="container error-brand"><a href="/">Marques Pimenta Advocacia</a></header>
    <main className="container information-page">
      <h1>Privacidade</h1>
      <p>Esta página explica o uso de dados ao visitar o site e entrar em contato com a Marques Pimenta.</p>
      <section><h2>Navegação no site</h2>
        <p>O site apresenta informações sobre o escritório e as áreas de atuação. Não há formulário de envio de dados. Não utilizamos ferramentas de análise de audiência, pixels de publicidade nem cookies de rastreamento.</p>
        <p>A infraestrutura de hospedagem pode processar dados técnicos, como endereço IP e informações da requisição, para entregar as páginas e manter a segurança e a disponibilidade do serviço.</p>
      </section>
      <section><h2>Contato pelo WhatsApp ou telefone</h2>
        <p>Ao escolher um botão de contato, você utiliza um serviço externo. O WhatsApp e sua operadora têm suas próprias condições de uso e práticas de privacidade.</p>
        <p>As informações que você decidir compartilhar no atendimento serão recebidas pelo advogado responsável, {site.person}, {site.registration}, para responder à sua demanda. O site não recebe o conteúdo dessas conversas.</p>
      </section>
      <section><h2>Dúvidas e solicitações sobre seus dados</h2>
        <p>Para esclarecer o uso dos seus dados ou apresentar uma solicitação relacionada ao atendimento, entre em contato com o advogado responsável pelo WhatsApp {site.phone}.</p>
        <p>Você pode solicitar informações, acesso e correção dos seus dados e, quando aplicável, sua exclusão. Conheça os <a className="text-link" href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares" target="_blank" rel="noopener noreferrer">direitos dos titulares explicados pela ANPD</a>.</p>
        <a className="button button-primary" href={privacyContact} target="_blank" rel="noopener noreferrer">Falar sobre privacidade</a>
      </section>
      <nav className="error-navigation" aria-label="Navegação da página de privacidade"><a href="/">Voltar ao início</a><a href="/#areas">Áreas de atuação</a></nav>
    </main>
  </>;
}
