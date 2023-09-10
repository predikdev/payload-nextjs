import React from 'react';
import { useRouter } from 'next/router';

import classes from '../../css/header.module.css';

const Navigation: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <header className={classes.header}>
      <h1>Index page</h1>
    </header>
  );
};

export default Navigation;
