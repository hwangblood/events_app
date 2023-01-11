import Link from "next/link";

export default function EventsOfCategory() {
  return (
    <div>
      <h1>Events in London</h1>

      <Link href="/events/event-1">
        <p>First Event</p>
      </Link>
      <Link href="/events/event-2">
        <p>Second Event</p>
      </Link>
    </div>
  );
}
