import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data }) => (
  <div>
    <main>
      <div>
        {data.map((category) => (
          <Link key={category.id} href={`/events/${category.id}`} passHref>
            <Image
              src={category.image}
              alt={category.title}
              width={300}
              height={300}
            />
            <h2>{category.title}</h2>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </main>
  </div>
);

export default HomePage;
