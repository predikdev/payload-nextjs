import { Block } from 'payload/types';

export const Angebot: Block = {
  slug: 'angebot',
  labels: {
    singular: 'Angebot',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'angebot',
      type: 'richText',
    },
  ],
};


export default Angebot;
