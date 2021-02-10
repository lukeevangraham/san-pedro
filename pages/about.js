import Layout from "../hoc/Layout/Layout";

const About = ({ global }) => {
    console.log("global: ", global)
  return (
    <Layout global={global}>
      <h2>Here is the About page</h2>
    </Layout>
  );
}


export default About;