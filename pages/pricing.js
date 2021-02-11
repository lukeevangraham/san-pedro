import Layout from "../hoc/Layout/Layout";
import { fetchAPI } from "../lib/api";

export async function getStaticProps() {
  const global = await fetchAPI("/global");
  return {
    props: {
      global,
    },
    revalidate: 1,
  };
}

export default function Pricing({ global }) {
  return (
    <Layout global={global}>
      <h2>here is the pricing page</h2>
    </Layout>
  );
}
