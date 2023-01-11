import Image from "next/image";

function SingleEvent({ event }) {
  return (
    <div>
      <Image src={event.image} alt={event.title} width={1000} height={500} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const { events } = await import("/data/db.json");

  const allPaths = events.map((event) => {
    return {
      params: { category: event.category, id: event.id },
    };
  });

  return { paths: allPaths, fallback: false };
}

export async function getStaticProps(context) {
  const event_id = context.params.id;

  const { events } = await import("/data/db.json");
  const event = events.find((ev) => ev.id === event_id);
  return { props: { event } };
}
export default SingleEvent;
