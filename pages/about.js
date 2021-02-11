import Layout from "../hoc/Layout/Layout";
import { fetchAPI } from "../lib/api";

export async function getStaticProps() {
  const global = await fetchAPI("/global");
  return {
    props: {
      global,
    },
    // revalidate: 1,
  };
}

const About = ({ global }) => {
  console.log("global: ", global);
  return (
    <Layout global={global}>
      <h2>Here is the About page</h2>
    </Layout>
  );
};

export default About;
