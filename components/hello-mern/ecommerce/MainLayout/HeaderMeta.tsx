// React
import { FC } from "react"
// HeaderMeta
import Head from 'next/head';

interface IHeaderMeta {
  title: string;
}

const HeaderMeta: FC<IHeaderMeta> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeaderMeta;
