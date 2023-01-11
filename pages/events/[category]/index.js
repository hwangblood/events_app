import Image from "next/image";
import Link from "next/link";

function EventsOfCategory({ events, category_title }) {
  return (
    <div>
      <h1>{category_title}</h1>
      <div>
        {events.map((event) => {
          return (
            <Link
              key={event.id}
              href={`/events/${event.category}/${event.id}`}
              passHref
            >
              <Image
                width={300}
                height={300}
                src={event.image}
                alt={event.title}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const { categories } = await import("/data/db.json");

  const allPaths = categories.map((category) => {
    return { params: { category: category.id } };
  });

  return {
    paths: allPaths,
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps(context) {
  const category_id = context.params.category;
  const { categories, events } = await import("/data/db.json");

  const filteredEvents = events.filter(
    (event) => event.category === category_id
  );

  const category_title = categories.find(
    (category) => category.id === category_id
  ).title;

  return {
    props: { events: filteredEvents, category_title },
  };
}
export default EventsOfCategory;
