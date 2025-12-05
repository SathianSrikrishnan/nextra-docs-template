import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { stories } from '../../data/stories';
import { Story } from '../../data/types';
import { StoryViewer } from '../../components';

interface StoryPageProps {
  story: Story;
}

export default function StoryPageRoute({ story }: StoryPageProps) {
  return (
    <>
      <Head>
        <title>{story.title} - Seasons of Wonder</title>
        <meta name="description" content={story.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <StoryViewer story={story} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(stories).map((season) => ({
    params: { season },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StoryPageProps> = async ({ params }) => {
  const season = params?.season as string;
  const story = stories[season];

  if (!story) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      story,
    },
  };
};

