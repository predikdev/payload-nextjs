import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import classes from '../../css/navigation.module.css';

const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig();

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  keywords?: string;
};

const Navigation: React.FC<Props> = () => {
  const { asPath } = useRouter();

  return (

    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/angebotes">Angebotes</Link>
        </li>
        <li>
          <Link href="/contact">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
