import { MessageDescriptor, i18n } from '@lingui/core';

import Head from 'next/head';
import React from 'react';
import { getNavigationStructure } from '../../config';
import { useLingui } from '@lingui/react';
import { useRouter } from 'next/router';

export interface SeoProps {
  title: MessageDescriptor;
  description: MessageDescriptor;
  type: string;
  url: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

const SeoHead = () => {
  const { route } = useRouter();
  const { i18n } = useLingui();
  const config = getNavigationStructure(i18n).find(
    (nav) => nav?.link === route
  );

  return (
    <Head>
      <title>{config?.seo?.title?.message} </title>
      <link rel="icon" href={'/assets/logoHead.png'} />
      <meta itemProp="image" content={'/assets/logoHead.png'} />
      <meta itemProp="name" content={config?.seo?.title?.message} />
      <meta name="description" content={config?.seo?.description?.message} />
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
