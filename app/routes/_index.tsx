import { Await, useLoaderData, type MetaArgs } from "react-router";
import { Suspense } from "react";

export function meta({}: MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const loader = async () => {
  const fastData = "Fast data";

  // Simulate a slow data fetch
  const slowData = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow data");
    }, 3000);
  });

  return {
    fastData,
    slowData,
  };
};

export default function Home() {
  const { fastData, slowData } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Hello world!</h1>
      <div>{fastData}</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={slowData}>
          {(resolvedData) => <div>{resolvedData}</div>}
        </Await>
      </Suspense>
    </div>
  );
}
