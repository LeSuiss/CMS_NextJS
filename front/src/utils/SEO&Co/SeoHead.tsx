import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

export interface SeoProps {
  title: string;
  description: string;
  type: string;
  url: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

const SeoHead = (
  props: SeoProps = {
    url: '/',
    type: '',
    title: '',
    description: '',
    image: '/assets/logoHead.png',
  }
) => {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title} </title>
      <link rel="icon" href={props.image} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta itemProp="name" content={title} />
      <meta name="description" content={description} />
      <meta itemProp="image" content={image} />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
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
