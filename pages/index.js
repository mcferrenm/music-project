import Head from "next/head";

const Index = ({ user }) => (
  <div style={{ padding: "10px 45px" }}>
    <Head>
      <title>Index page</title>
      <meta
        name="description"
        content="This is the description of the Index page"
      />
    </Head>
    <p>Content on Index page</p>
    <p>Email: {user.email}</p>
  </div>
);

Index.getInitialProps = async ({ query }) => {
  return {
    user: query.user
  };
};
export default Index;
