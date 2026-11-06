import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import {useDocsData} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// ── Icons ──────────────────────────────────────────────────────────────────

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
    </svg>
  );
}
function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/><path d="M5.5 21a8.38 8.38 0 0 1 13 0"/>
    </svg>
  );
}
function IconRefund() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M7 15h4"/>
    </svg>
  );
}
function IconCard() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/><path d="M11 8v3l2 2"/>
    </svg>
  );
}
function IconFolder() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
    </svg>
  );
}
function IconSettings() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"/>
    </svg>
  );
}
function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}
function IconMobile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
}
function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}
function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

// ── Hero illustration ───────────────────────────────────────────────────────

function HeroIllustration() {
  const items = [
    translate({id: 'hero.card.item0', message: 'Acesse'}),
    translate({id: 'hero.card.item1', message: 'Encontre'}),
    translate({id: 'hero.card.item2', message: 'Resolva'}),
  ];
  return (
    <div className={styles.heroCard}>
      <div className={styles.heroCardHeader}>
        <span className={styles.heroCardHeaderIcon}><IconBook /></span>
        <span>{translate({id: 'hero.card.header', message: 'Seu guia'})}</span>
      </div>
      <div className={styles.heroCardItems}>
        {items.map((label) => (
          <div key={label} className={styles.heroCardItem}>
            <span className={styles.heroCardCheck}>✓</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className={styles.heroCardBadge}>✓</div>
    </div>
  );
}

// ── Topic cards ─────────────────────────────────────────────────────────────

function TopicCard({icon, title, description, tags, to}) {
  return (
    <div className={styles.topicCard}>
      <Link to={to} className={styles.topicCardLink}>
        <div className={styles.topicCardTop}>
          <span className={styles.topicIcon}>{icon}</span>
          <span className={styles.topicTitle}>{title}</span>
          <span className={styles.topicArrow}>›</span>
        </div>
        <p className={styles.topicDescription}>{description}</p>
      </Link>
      <div className={styles.topicTags}>
        {tags.map((tag, i) => (
          <React.Fragment key={tag.label}>
            {i > 0 && <span className={styles.topicTagSep}>·</span>}
            <Link to={tag.to} className={styles.topicTag}>{tag.label}</Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// ── Guide item ──────────────────────────────────────────────────────────────

function GuideItem({icon, tag, tagColor, title, description, to}) {
  return (
    <Link to={to} className={styles.guideItem}>
      <span className={styles.guideItemIcon}>{icon}</span>
      <div className={styles.guideItemBody}>
        <div className={styles.guideItemMeta}>
          <span className={`${styles.guideTag} ${styles[`guideTag__${tagColor}`]}`}>{tag}</span>
        </div>
        <p className={styles.guideTitle}>{title}</p>
        <p className={styles.guideDescription}>{description}</p>
      </div>
      <span className={styles.guideArrow}>→</span>
    </Link>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const docsData = useDocsData();
  const docTitles = Object.fromEntries(
    (docsData?.versions?.[0]?.docs ?? []).map((d) => [d.id, d.title])
  );
  const {siteConfig: {baseUrl}, i18n: {currentLocale, defaultLocale}} = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    const localePrefix = currentLocale !== defaultLocale ? `${currentLocale}/` : '';
    window.location.assign(`${baseUrl}${localePrefix}search?q=${encodeURIComponent(q)}`);
  };

  const topics = [
    {
      icon: <IconUser />,
      title: translate({id: 'topic.0.title', message: 'Acesso e cadastro'}),
      description: translate({id: 'topic.0.desc', message: 'Comece a usar o app e gerencie o acesso à sua conta.'}),
      tags: [
        {label: translate({id: 'topic.0.tag0', message: 'Primeiro acesso'}), to: '/docs/acesso-e-cadastro/primeiro-acesso'},
        {label: translate({id: 'topic.0.tag1', message: 'Senha'}), to: '/docs/acesso-e-cadastro/senha'},
        {label: translate({id: 'topic.0.tag2', message: 'Login'}), to: '/docs/acesso-e-cadastro/login'},
      ],
      to: '/docs/acesso-e-cadastro/primeiro-acesso',
    },
    {
      icon: <IconRefund />,
      title: translate({id: 'topic.1.title', message: 'Reembolso'}),
      description: translate({id: 'topic.1.desc', message: 'Oriente-se para enviar e acompanhar uma solicitação.'}),
      tags: [
        {label: translate({id: 'topic.1.tag0', message: 'Solicitação'}), to: '/docs/reembolso/solicitacao'},
        {label: translate({id: 'topic.1.tag1', message: 'Anexos'}), to: '/docs/reembolso/anexos'},
        {label: translate({id: 'topic.1.tag2', message: 'Acompanhamento'}), to: '/docs/reembolso/acompanhamento'},
      ],
      to: '/docs/reembolso/solicitacao',
    },
    {
      icon: <IconCard />,
      title: translate({id: 'topic.2.title', message: 'Carteirinha e plano'}),
      description: translate({id: 'topic.2.desc', message: 'Localize sua carteirinha e as informações do seu plano.'}),
      tags: [
        {label: translate({id: 'topic.2.tag0', message: 'Carteirinha digital'}), to: '/docs/carteirinha-e-plano/carteirinha-digital'},
        {label: translate({id: 'topic.2.tag1', message: 'Dados do plano'}), to: '/docs/carteirinha-e-plano/dados-do-plano'},
      ],
      to: '/docs/carteirinha-e-plano/carteirinha-digital',
    },
    {
      icon: <IconNetwork />,
      title: translate({id: 'topic.3.title', message: 'Rede de atendimento'}),
      description: translate({id: 'topic.3.desc', message: 'Saiba como pesquisar prestadores pelo aplicativo.'}),
      tags: [
        {label: translate({id: 'topic.3.tag0', message: 'Busca de rede'}), to: '/docs/rede-de-atendimento/busca-de-rede'},
        {label: translate({id: 'topic.3.tag1', message: 'Filtros'}), to: '/docs/rede-de-atendimento/filtros'},
        {label: translate({id: 'topic.3.tag2', message: 'Localização'}), to: '/docs/rede-de-atendimento/localizacao'},
      ],
      to: '/docs/rede-de-atendimento/busca-de-rede',
    },
    {
      icon: <IconFolder />,
      title: translate({id: 'topic.4.title', message: 'Documentos e solicitações'}),
      description: translate({id: 'topic.4.desc', message: 'Encontre documentos e consulte suas solicitações.'}),
      tags: [
        {label: translate({id: 'topic.4.tag0', message: 'Consulta'}), to: '/docs/documentos-e-solicitacoes/consulta'},
        {label: translate({id: 'topic.4.tag1', message: 'Download'}), to: '/docs/documentos-e-solicitacoes/download'},
        {label: translate({id: 'topic.4.tag2', message: 'Histórico'}), to: '/docs/documentos-e-solicitacoes/historico'},
      ],
      to: '/docs/documentos-e-solicitacoes/consulta',
    },
    {
      icon: <IconSettings />,
      title: translate({id: 'topic.5.title', message: 'Configurações e soluções'}),
      description: translate({id: 'topic.5.desc', message: 'Ajuste o aplicativo e resolva dificuldades de uso.'}),
      tags: [
        {label: translate({id: 'topic.5.tag0', message: 'Atualização'}), to: '/docs/configuracoes-e-solucoes/atualizacao'},
        {label: translate({id: 'topic.5.tag1', message: 'Permissões'}), to: '/docs/configuracoes-e-solucoes/permissoes'},
        {label: translate({id: 'topic.5.tag2', message: 'Erros de acesso'}), to: '/docs/configuracoes-e-solucoes/erros-de-acesso'},
      ],
      to: '/docs/configuracoes-e-solucoes/atualizacao',
    },
  ];

  const guides = [
    {icon: <IconUser />, tag: translate({id: 'guide.tag.access', message: 'Acesso e cadastro'}), tagColor: 'green', docId: 'acesso-e-cadastro/primeiro-acesso', description: translate({id: 'guide.desc.primeiro-acesso', message: 'Como criar sua conta e entrar no app pela primeira vez.'}), to: '/docs/acesso-e-cadastro/primeiro-acesso'},
    {icon: <IconUser />, tag: translate({id: 'guide.tag.access', message: 'Acesso e cadastro'}), tagColor: 'green', docId: 'acesso-e-cadastro/senha', description: translate({id: 'guide.desc.senha', message: 'Passo a passo para redefinir o acesso à sua conta.'}), to: '/docs/acesso-e-cadastro/senha'},
    {icon: <IconUser />, tag: translate({id: 'guide.tag.access', message: 'Acesso e cadastro'}), tagColor: 'green', docId: 'acesso-e-cadastro/login', description: translate({id: 'guide.desc.login', message: 'O que verificar quando o acesso à conta não funciona.'}), to: '/docs/acesso-e-cadastro/login'},
    {icon: <IconRefund />, tag: translate({id: 'guide.tag.refund', message: 'Reembolso'}), tagColor: 'blue', docId: 'reembolso/solicitacao', description: translate({id: 'guide.desc.solicitacao', message: 'Etapas para registrar um pedido de reembolso no app.'}), to: '/docs/reembolso/solicitacao'},
    {icon: <IconRefund />, tag: translate({id: 'guide.tag.refund', message: 'Reembolso'}), tagColor: 'blue', docId: 'reembolso/anexos', description: translate({id: 'guide.desc.anexos', message: 'Quais arquivos enviar e como anexá-los corretamente.'}), to: '/docs/reembolso/anexos'},
    {icon: <IconRefund />, tag: translate({id: 'guide.tag.refund', message: 'Reembolso'}), tagColor: 'blue', docId: 'reembolso/acompanhamento', description: translate({id: 'guide.desc.acompanhamento', message: 'Onde consultar o status e o histórico de solicitações.'}), to: '/docs/reembolso/acompanhamento'},
    {icon: <IconCard />, tag: translate({id: 'guide.tag.card', message: 'Carteirinha e plano'}), tagColor: 'green', docId: 'carteirinha-e-plano/carteirinha-digital', description: translate({id: 'guide.desc.carteirinha-digital', message: 'Como visualizar e compartilhar sua carteirinha pelo app.'}), to: '/docs/carteirinha-e-plano/carteirinha-digital'},
    {icon: <IconCard />, tag: translate({id: 'guide.tag.card', message: 'Carteirinha e plano'}), tagColor: 'green', docId: 'carteirinha-e-plano/dados-do-plano', description: translate({id: 'guide.desc.dados-do-plano', message: 'Como consultar as informações do seu plano de saúde.'}), to: '/docs/carteirinha-e-plano/dados-do-plano'},
    {icon: <IconNetwork />, tag: translate({id: 'guide.tag.network', message: 'Rede de atendimento'}), tagColor: 'orange', docId: 'rede-de-atendimento/busca-de-rede', description: translate({id: 'guide.desc.busca-de-rede', message: 'Como pesquisar clínicas, médicos e hospitais pelo app.'}), to: '/docs/rede-de-atendimento/busca-de-rede'},
    {icon: <IconNetwork />, tag: translate({id: 'guide.tag.network', message: 'Rede de atendimento'}), tagColor: 'orange', docId: 'rede-de-atendimento/filtros', description: translate({id: 'guide.desc.filtros', message: 'Refine a pesquisa por especialidade, cidade e outros critérios.'}), to: '/docs/rede-de-atendimento/filtros'},
    {icon: <IconNetwork />, tag: translate({id: 'guide.tag.network', message: 'Rede de atendimento'}), tagColor: 'orange', docId: 'rede-de-atendimento/localizacao', description: translate({id: 'guide.desc.localizacao', message: 'Como usar a localização para ver prestadores próximos.'}), to: '/docs/rede-de-atendimento/localizacao'},
    {icon: <IconFolder />, tag: translate({id: 'guide.tag.docs', message: 'Documentos'}), tagColor: 'blue', docId: 'documentos-e-solicitacoes/consulta', description: translate({id: 'guide.desc.consulta', message: 'Onde encontrar seus documentos salvos e pedidos anteriores.'}), to: '/docs/documentos-e-solicitacoes/consulta'},
    {icon: <IconFolder />, tag: translate({id: 'guide.tag.docs', message: 'Documentos'}), tagColor: 'blue', docId: 'documentos-e-solicitacoes/download', description: translate({id: 'guide.desc.download', message: 'Como fazer o download de boletos, extratos e outros arquivos.'}), to: '/docs/documentos-e-solicitacoes/download'},
    {icon: <IconFolder />, tag: translate({id: 'guide.tag.docs', message: 'Documentos'}), tagColor: 'blue', docId: 'documentos-e-solicitacoes/historico', description: translate({id: 'guide.desc.historico', message: 'Como acessar o registro completo das suas solicitações.'}), to: '/docs/documentos-e-solicitacoes/historico'},
    {icon: <IconSettings />, tag: translate({id: 'guide.tag.settings', message: 'Configurações'}), tagColor: 'orange', docId: 'configuracoes-e-solucoes/atualizacao', description: translate({id: 'guide.desc.atualizacao', message: 'Como manter o app atualizado e o que muda em cada versão.'}), to: '/docs/configuracoes-e-solucoes/atualizacao'},
    {icon: <IconSettings />, tag: translate({id: 'guide.tag.settings', message: 'Configurações'}), tagColor: 'orange', docId: 'configuracoes-e-solucoes/permissoes', description: translate({id: 'guide.desc.permissoes', message: 'Quais permissões habilitar para o funcionamento correto.'}), to: '/docs/configuracoes-e-solucoes/permissoes'},
    {icon: <IconWrench />, tag: translate({id: 'guide.tag.problems', message: 'Solução de problemas'}), tagColor: 'orange', docId: 'configuracoes-e-solucoes/erros-de-acesso', description: translate({id: 'guide.desc.erros-de-acesso', message: 'Verificações para identificar e corrigir falhas no acesso.'}), to: '/docs/configuracoes-e-solucoes/erros-de-acesso'},
  ];

  return (
    <Layout
      title={translate({id: 'page.title', message: 'Como podemos ajudar você?'})}
      description={translate({id: 'page.desc', message: 'Encontre orientações, documentos e procedimentos para usar o aplicativo Unimed Seguros.'})}>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.heroLabel}>
              {translate({id: 'hero.label', message: 'GUIAS DO APLICATIVO UNIMED SEGUROS'})}
            </span>
            <h1 className={styles.heroTitle}>
              {translate({id: 'hero.title', message: 'Como podemos ajudar você?'})}
            </h1>
            <p className={styles.heroSubtitle}>
              {translate({id: 'hero.subtitle', message: 'Encontre orientações, documentos e procedimentos para usar o aplicativo.'})}
            </p>
            <form className={styles.searchBar} onSubmit={handleSearch}>
              <span className={styles.searchIcon}><IconSearch /></span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder={translate({id: 'hero.search.placeholder', message: 'Busque por uma dúvida, tarefa ou palavra-chave'})}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className={styles.searchButton}>
                {translate({id: 'hero.search.button', message: 'Buscar'})}
              </button>
            </form>
            <div className={styles.quickSearches}>
              <span className={styles.quickSearchLabel}>
                {translate({id: 'hero.quicksearch.label', message: 'Buscas frequentes:'})}
              </span>
              <Link to="/docs/acesso-e-cadastro/primeiro-acesso" className={styles.quickSearchLink}>
                {translate({id: 'hero.quicksearch.0', message: 'Primeiro acesso'})}
              </Link>
              <Link to="/docs/reembolso/solicitacao" className={styles.quickSearchLink}>
                {translate({id: 'hero.quicksearch.1', message: 'Reembolso'})}
              </Link>
              <Link to="/docs/carteirinha-e-plano/carteirinha-digital" className={styles.quickSearchLink}>
                {translate({id: 'hero.quicksearch.2', message: 'Carteirinha digital'})}
              </Link>
            </div>
          </div>
          <div className={styles.heroIllustration}>
            <HeroIllustration />
          </div>
        </div>
      </section>

      {/* Explore por assunto */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>
            {translate({id: 'section.explore.title', message: 'Explore por assunto'})}
          </h2>
          <p className={styles.sectionSubtitle}>
            {translate({id: 'section.explore.subtitle', message: 'Encontre o caminho certo para sua dúvida sobre o aplicativo.'})}
          </p>
          <div className={styles.topicsGrid}>
            {topics.map((topic) => <TopicCard key={topic.title} {...topic} />)}
          </div>
        </div>
      </section>

      {/* Guias para começar e resolver */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.guidesSectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>
                {translate({id: 'section.guides.title', message: 'Guias para começar e resolver'})}
              </h2>
              <p className={styles.sectionSubtitle}>
                {translate({id: 'section.guides.subtitle', message: 'Orientações práticas para consultar sempre que precisar.'})}
              </p>
            </div>
            <Link to="/docs/intro" className={styles.viewAllLink}>
              {translate({id: 'section.guides.viewall', message: 'Ver todos os guias →'})}
            </Link>
          </div>
          <div className={styles.guidesLayout}>
            <div className={styles.guidesList}>
              {guides.slice(0, 4).map((guide) => (
                <GuideItem
                  key={guide.docId}
                  {...guide}
                  title={docTitles[guide.docId] ?? guide.docId}
                />
              ))}
            </div>
            <div className={styles.guidesSidebar}>
              <div className={styles.sidebarCard}>
                <span className={styles.sidebarCardIcon}><IconMobile /></span>
                <h3 className={styles.sidebarCardTitle}>
                  {translate({id: 'sidebar.app.title', message: 'Uso o aplicativo'})}
                </h3>
                <p className={styles.sidebarCardText}>
                  {translate({id: 'sidebar.app.text', message: 'Encontre tutoriais para realizar suas tarefas com mais autonomia.'})}
                </p>
                <Link to="/docs/intro" className={styles.sidebarCardLink}>
                  {translate({id: 'sidebar.app.link', message: 'Acessar guias de uso →'})}
                </Link>
              </div>
              <div className={`${styles.sidebarCard} ${styles.sidebarCardDark}`}>
                <span className={styles.sidebarCardIcon}><IconWrench /></span>
                <h3 className={styles.sidebarCardTitle}>
                  {translate({id: 'sidebar.tech.title', message: 'Sou técnico ou atendente'})}
                </h3>
                <p className={styles.sidebarCardText}>
                  {translate({id: 'sidebar.tech.text', message: 'Consulte procedimentos de diagnóstico e orientações para apoiar quem usa o app.'})}
                </p>
                <div className={styles.sidebarCardTags}>
                  <span>{translate({id: 'sidebar.tech.tag0', message: 'Acesso'})}</span>
                  <span>·</span>
                  <span>{translate({id: 'sidebar.tech.tag1', message: 'Evidências de erro'})}</span>
                  <span>·</span>
                  <span>{translate({id: 'sidebar.tech.tag2', message: 'Triagem'})}</span>
                </div>
                <Link to="/docs/intro" className={styles.sidebarCardLink}>
                  {translate({id: 'sidebar.tech.link', message: 'Explorar documentação técnica →'})}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <span className={styles.ctaBannerIcon}><IconChat /></span>
          <div className={styles.ctaBannerText}>
            <p className={styles.ctaBannerTitle}>
              {translate({id: 'cta.title', message: 'Não encontrou o que precisava?'})}
            </p>
            <p className={styles.ctaBannerSubtitle}>
              {translate({id: 'cta.subtitle', message: 'Veja como buscar ajuda e quais informações reunir para explicar sua dúvida.'})}
            </p>
          </div>
          <Link to="/docs/intro" className={styles.ctaBannerButton}>
            {translate({id: 'cta.button', message: 'Encontrar ajuda →'})}
          </Link>
        </div>
      </section>

    </Layout>
  );
}
