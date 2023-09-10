import { GetServerSideProps } from 'next';
import React from 'react';
import { Type as PageType } from '../collections/Page';
import { getServerSideProps as sharedGetServerSideProps } from './[...slug]';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

type Props = {
  page?: PageType
  statusCode: number
}

const Index: React.FC<Props> = (props) => {
  const { page } = props;

  return (
    <React.Fragment>
      <Navigation />
      <Header />
    </React.Fragment>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const func = sharedGetServerSideProps.bind(this);
  return func(ctx);
};
