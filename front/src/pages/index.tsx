/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from 'react';

import { Button } from '@lesuiss/mui_compo';
import { GetStaticProps } from 'next';
import { t } from '@lingui/macro';
import { i18n } from '@lingui/core';
import loadTranslation from '@utils/loadTranslation';
import Image from 'next/image';
import { makeStyles } from '@mui/styles';
import { Card } from '@mui/material';
import ReactPlayer from 'react-player';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';

function Home() {
  const cardComponentRef = useRef < HTMLDivElement >(null);

  return (
    <Layout>
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url="/homePageBG.mp4"
          playing
          loop
          muted
          width="100vw"
        />
      </div>
      <div style={{ position: 'relative' }}>

        {/* <Image
          alt="bgHome"
          src="/bgHome.webp"
          layout="fill"
          className={styles.homeBackground}
        /> */}
        <div
          className="cardComponent"
        >
          <h2>
            {i18n._(/* i18n: MainPageTItle1/2 */ t`Pressing and Laundry`)}
          </h2>
        </div>
        <article>
          <Card ref={cardComponentRef}>

            <h4> Notre expertise</h4>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Quisque sit amet vehicula augue. Donec sollicitudin sodales nibh, consectetur maximus ante sollicitudin sit amet. Nam id dictum ligula. Suspendisse posuere non est ut ultricies. Integer maximus metus velit, sit amet laoreet diam finibus ac. Sed aliquam nibh id feugiat varius. Suspendisse sed luctus sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer tristique elementum neque, sed volutpat mauris consequat non. Nulla hendrerit euismod nunc non tincidunt. Etiam id sem ultricies, ultricies leo eget, pulvinar sem. Curabitur et tortor ornare, gravida metus eu, bibendum neque.
            </p>
            <p>
              Nam nec odio justo. Nulla felis nisl, auctor semper venenatis sed, pellentesque in tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam iaculis enim eu urna viverra imperdiet. Maecenas ut fringilla arcu. In scelerisque euismod sem, id convallis est. Pellentesque vel lectus finibus, lacinia nisl et, vehicula purus. Sed porttitor hendrerit ornare. Curabitur congue sapien et eros fermentum tempor. Proin rhoncus condimentum posuere. Nulla scelerisque sapien consectetur, ultricies risus nec, posuere neque. Sed ornare dolor quam, id hendrerit justo venenatis vitae. Nullam euismod urna id massa maximus, eu porttitor justo ultrices.
            </p>
          </Card>
        </article>
        <article>
          <Card ref={cardComponentRef}>
            <h4> Notre Histoire</h4>
            Nulla ac laoreet velit, non tincidunt sem. Nulla bibendum nunc nec est finibus dictum. Pellentesque blandit est in risus egestas, nec egestas enim blandit. Sed eget aliquet elit. Sed commodo ac enim eu rhoncus. Mauris rutrum nec augue in bibendum. Proin tincidunt ex convallis, gravida tellus eu, iaculis lacus. Mauris enim elit, aliquam vitae interdum vitae, condimentum eu leo.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, metus ac venenatis gravida, odio nulla consectetur magna, eget tristique orci mi finibus ipsum. Etiam sollicitudin, nunc sed faucibus porta, leo lorem tempor dui, at auctor eros est porttitor nisl. Nulla laoreet sapien nulla. Nulla sit amet lorem vel dolor eleifend viverra. Duis sit amet eros lobortis, consequat augue eget, convallis leo. Integer tempor sem vel enim malesuada viverra. Vestibulum tincidunt ornare interdum.
          </Card>
        </article>
        <article>
          <Card ref={cardComponentRef}>
            <h4> Nos produits</h4>
            Nulla ac laoreet velit, non tincidunt sem. Nulla bibendum nunc nec est finibus dictum. Pellentesque blandit est in risus egestas, nec egestas enim blandit. Sed eget aliquet elit. Sed commodo ac enim eu rhoncus. Mauris rutrum nec augue in bibendum. Proin tincidunt ex convallis, gravida tellus eu, iaculis lacus. Mauris enim elit, aliquam vitae interdum vitae, condimentum eu leo.

          </Card>

        </article>
        <div className="cardContent" />
      </div>
    </Layout>
  );
}
export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(ctx.locale!);
  return {
    props: {
      translation,
    },
  };
};
