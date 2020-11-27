import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  // 1) Link Component
  // 2) Imperative using router.push
  // 3) Create Redirect component
  // 4) Query params
  // 5) Shallow same-page routing with count

  return (
    <div>
      <h2>Next.js</h2>

      <h2>Native</h2>

      <button onClick={() => (window.location.href = "/about")}>Native</button>
      <a href="/about">HTML Link</a>
    </div>
  );
}
