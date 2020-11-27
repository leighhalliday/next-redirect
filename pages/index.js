import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// 1) Link Component
// 2) Imperative using router.push
// 3) Create Redirect component
// 4) Query params
// 5) Shallow same-page routing with count

function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
}

export default function Home() {
  const router = useRouter();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { query } = router;
  const count = parseInt(query.count || 1, 10);

  if (count === 5) {
    return <Redirect to="/about" />;
  }

  if (shouldRedirect) {
    return <Redirect to="/about" />;
  }

  return (
    <div>
      <h2>Next.js</h2>

      <button
        onClick={() => {
          router.push("/about");
        }}
      >
        About
      </button>

      <Link href="/about">
        <a>Next Link</a>
      </Link>

      <button onClick={() => setShouldRedirect(true)}>Redirect</button>

      <button
        onClick={() => {
          router.push(`/?count=${count + 1}`, undefined, { shallow: true });
        }}
      >
        Increment {count}
      </button>

      <h2>Native</h2>

      <button onClick={() => (window.location.href = "/about")}>Native</button>
      <a href="/about">HTML Link</a>
    </div>
  );
}
