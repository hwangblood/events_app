import Image from "next/image";
import Link from "next/link";

function CategoryEvents({ categories }) {
  return (
    <div>
      <h1>Category Events</h1>
      <div>
        {categories.map((category) => (
          <Link key={category.id} href={`/events/${category.id}`} passHref>
            <Image
              src={category.image}
              alt={category.title}
              width={300}
              height={300}
            />
            <h2>{category.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { categories } = await import("/data/db.json");
  return {
    props: {
      categories,
    },
  };
}

export default CategoryEvents;
