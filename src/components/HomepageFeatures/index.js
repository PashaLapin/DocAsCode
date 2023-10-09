import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Всегда на связи',
    Svg: require('@site/static/img/cat2.svg').default,
    description: (
      <>
       Паша всегда на связи и готов прийти на помощь в любую минуту.
      </>
    ),
  },
  {
    title: 'Мастер на все руки',
    Svg: require('@site/static/img/cat1.svg').default,
    description: (
      <>
        Паша настоящий мастер и может выполнить любую задачу.
      </>
    ),
  },
  {
    title: 'У него есть кот',
    Svg: require('@site/static/img/cat.svg').default,
    description: (
      <>
        У Паши есть классный кот. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
