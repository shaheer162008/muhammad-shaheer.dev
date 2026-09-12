import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-terminal">404 / route_not_found</div>
      <h1>This page didn&apos;t ship.</h1>
      <p>The route you requested is not part of the current build.</p>
      <Link className="button" href="/">Return home</Link>
    </main>
  );
}
