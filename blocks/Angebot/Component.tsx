import React from 'react';
import { Block } from 'payload/types';
import RichText from '../../components/RichText';
import classes from './index.module.css';


export type Type = {
  blockType: 'content'
  blockName?: string
  content: unknown
}

export const Content: Block = {
  slug: 'angebot',
  labels: {
    singular: 'Angebot',
    plural: 'Angebotes',
  },
  fields: [
    {
      name: 'angebot',
      type: 'richText',
    },
  ],
};

export const Component: React.FC<Type> = (props) => {
  const { content } = props;

  return (
    <div className={classes.wrap}>
      <RichText
        content={content}
        className={classes.content}
      />
    </div>
  );
};
