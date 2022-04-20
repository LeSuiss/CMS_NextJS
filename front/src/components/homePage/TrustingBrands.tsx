/* eslint-disable react/destructuring-assignment */
import { GetStaticProps } from 'next';
import React from 'react';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';

function TrustingBrands(props: any) {
  return (
    <div className={`${styles.sectionContainer} ${styles.trustingBrands}`}>
      <div className={`${styles.contentContainer}`}>

        <h2>
          {i18n._(/* i18n: trustingBrands Title */ t`ILS NOUS FONT CONFIANCE`)}
        </h2>
        <div className={styles.brandsList}>

          {props.brandsList.map((x) => (
            <div key={`logo${x}`} className={styles.logo}>
              <Image height="100%" width="100%" alt={`logo${x}`} src={`/logo/${x}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustingBrands;
