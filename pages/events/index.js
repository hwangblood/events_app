import Link from "next/link";

const CategoryEvents = (props) => {
  return (
    <div>
      <h1>Category Events</h1>
      <div>
        <Link href="/events/london">
          {/* <Image src="" alt="" /> */}
          <h2>Events in London</h2>
        </Link>
        <Link href="/events/london">
          {/* <Image src="" alt="" /> */}
          <h2>Events in San Francisco</h2>
        </Link>
        <Link href="/events/london">
          {/* <Image src="" alt="" /> */}
          <h2>Events in Barcelona</h2>
        </Link>
      </div>
    </div>
  );
};

export default CategoryEvents;
