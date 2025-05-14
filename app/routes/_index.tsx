import { Await, Link, useLoaderData, type MetaArgs } from "react-router";
import { Suspense } from "react";

export function meta({}: MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        to="/page"
      >
        Go to page that loads data
      </Link>
    </div>
  );
}
