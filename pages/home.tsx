import React from 'react';
import payload from 'payload';
import { GetServerSideProps } from 'next';
// import getConfig from 'next/config';
import { Type as PageType } from '../collections/Page';
import NotFound from '../components/NotFound';
import Head from '../components/Head';
import classes from '../css/angebotes.module.css';
import RenderBlocks from '../components/RenderBlocks';
import Navigation from '../components/Navigation';

// const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

export type Props = {
  page?: PageType
  statusCode: number
}

const Page: React.FC<Props> = (props) => {
  const { page } = props;

  if (!page) {
    return <NotFound />;
  }

  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.page}>
        <Head
          title={page.meta?.title || page.title}
          description={page.meta?.description}
          keywords={page.meta?.keywords}
        />
        <RenderBlocks layout={page.layout} />
      </main>
    </React.Fragment>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'angebotes';

  const pageQuery = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!pageQuery.docs[0]) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery.docs[0],
    },
  };
};
