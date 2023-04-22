import HomePage from "../src/components/home/home-page";

function Home({ categories }) {
  return (
    <>
      <HomePage data={categories} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { categories } = await import("/data/db.json");
  return {
    props: {
      categories,
    },
  };
}

export default Home;
