import { MessageDescriptor, i18n } from '@lingui/core';

import Head from 'next/head';
import { NAVIGATION } from '../../config';
import React from 'react';
import { useRouter } from 'next/router';

export interface SeoProps {
  title: string | MessageDescriptor;
  description: string | MessageDescriptor;
  type: string;
  url: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

const SeoHead = () => {
  const { route } = useRouter();
  const config = NAVIGATION.find((nav) => nav?.link === route);

  return (
    <Head>
      <title>{i18n._(config?.seo?.title)} </title>
      <link rel="icon" href={'/assets/logoHead.png'} />
      <meta itemProp="image" content={'/assets/logoHead.png'} />
      <meta itemProp="name" content={i18n._(config?.seo?.title)} />
      <meta name="description" content={i18n._(config?.seo?.description)} />
      {socialTags({ ...config?.seo, url: config?.link }).map(
        ({ name, content }) => {
          return <meta key={name} name={name} content={content} />;
        }
      )}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  );
};

export default SeoHead;

const socialTags = ({
  type,
  url,
  title,
  description,
  image,
  createdAt = undefined,
  updatedAt = undefined,
}) => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: '' },
    { name: 'twitter:image:src', content: image },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'og:title', content: title },
    { name: 'og:type', content: type },
    { name: 'og:url', content: url },
    { name: 'og:image', content: image },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: '' },
    {
      name: 'og:published_time',
      content: createdAt ?? new Date().toISOString(),
    },
    {
      name: 'og:modified_time',
      content: updatedAt ?? new Date().toISOString(),
    },
  ];

  return metaTags;
};
