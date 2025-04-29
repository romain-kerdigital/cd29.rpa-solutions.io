import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Reprise des marchés SAFI',
    description: (
      <>
        Documentation pour la reprise des marchés SAFI. 
        Consultez les procédures, étapes et annexes.
      </>
    ),
  },
  {
    title: 'Mémo Javascript',
    description: (
      <>
        Documentation technique sur Javascript pour 
        les développements internes et Grand Angle.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}>
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