import Link from "next/link";

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <main>
      About Page
      <hr />
      <Link href="/" className="underline">
        Home Page
      </Link>
    </main>
  );
}