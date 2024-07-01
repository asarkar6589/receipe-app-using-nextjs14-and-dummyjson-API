import Link from "next/link";

export default function Home() {
  return (
    <div>
      Welcome To Recipe App
      <Link href="/recipe-list">Explore Receipes</Link>
    </div>
  );
}
