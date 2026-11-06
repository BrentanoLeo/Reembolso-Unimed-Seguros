import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Passo a passo simples',
    Svg: require('@site/static/img/unimed_steps.svg').default,
    description: (
      <>
        Guia claro do início ao fim: do protocolo da consulta até o recebimento
        do reembolso, sem dúvidas no caminho.
      </>
    ),
  },
  {
    title: 'Documentos organizados',
    Svg: require('@site/static/img/unimed_docs.svg').default,
    description: (
      <>
        Saiba exatamente quais documentos reunir para cada tipo de atendimento
        e evite reprovações por falta de informação.
      </>
    ),
  },
  {
    title: 'Conheça seus direitos',
    Svg: require('@site/static/img/unimed_rights.svg').default,
    description: (
      <>
        Entenda o que seu plano cobre, os prazos legais e como contestar uma
        negativa de reembolso.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className={styles.featureImageWrapper}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
