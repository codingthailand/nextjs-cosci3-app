import Link from "next/link";

// http://localhost:3000/
export default function Home() {
  return (
    <div>
      สวัสดี Home Page
      <hr />
      <Link href="/about" className="underline">
        About Page
      </Link>
    </div>
  );
}
