import { Box, Container } from '@chakra-ui/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { Hero } from '@/components/Hero';
import { Main } from '@/components/Main';
import { Meta } from '@/components/Meta';
import { Nav } from '@/components/Nav';
import { PostsHome } from '@/components/PostsHome';
import { SectionHeading } from '@/components/SectionHeading';
import { getPosts, Post } from '@/utils/fetchPosts';
import { getVideos, Video } from '@/utils/fetchVideos';

interface Props {
  posts: Post[];
  videos: Video[];
}

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main
      meta={
        <Meta
          title="Usman Sabuwala - Web Developer in India."
          description="🌐 my online home"
        />
      }
    >
      <Nav />
      <Container overflow="hidden" maxW="container.lg">
        <Hero />
        <Box
          w={['xs', 'md', null, 'xl']}
          h="1px"
          my="7"
          mx="auto"
          bgColor="whiteAlpha.500"
        />
        <SectionHeading size="2xl" my="4">
          What do I do?
        </SectionHeading>
        <PostsHome posts={posts} />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const SECONDS_IN_A_DAY = 86400;
  const allPosts = await getPosts();
  const videos = await getVideos();

  const posts = allPosts.slice(0, 4);

  return {
    props: {
      posts,
      videos,
    },
    revalidate: SECONDS_IN_A_DAY,
  };
};

export default Index;
