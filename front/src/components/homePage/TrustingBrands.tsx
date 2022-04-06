import React from 'react';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import styles from '../../styles/Home.module.scss';

function TrustingBrands() {
  return (
    <div className={`${styles.sectionContainer} ${styles.trustingBrands}`}>
      <h2>
        {i18n._(/* i18n: trustingBrands Title */ t`ILS NOUS FONT CONFIANCE`)}
      </h2>
      <div className={styles.brandsList}>
        {[1, 2, 3, 4, 5].map((x) => <div key={`AAA${x}`}>ff</div>)}
      </div>
    </div>
  );
}

export default TrustingBrands;
