import Link from "next/link";
import AppLoading from "../components/app-loading";

// http://localhost:3000/about
export default function AboutPage() {
  return (
    <main>
      About Page
      <AppLoading />
      <hr />
      <Link href="/" className="underline">
        Home Page
      </Link>
    </main>
  );
}