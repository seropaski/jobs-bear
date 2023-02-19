import { Lato } from '@next/font/google';
import { PropsWithChildren } from 'react';
import { Nav } from '../Nav';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <section className={lato.className}>
      <Nav />
      {children}
      {/* footer */}
    </section>
  );
}

export { Layout };
