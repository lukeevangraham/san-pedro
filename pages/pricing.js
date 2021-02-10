import Layout from "../hoc/Layout/Layout";

export default function Pricing({ global }) {
  return (
    <Layout global={global}>
      {console.log("global", global)}
      here is the pricing page
    </Layout>
  );
}
