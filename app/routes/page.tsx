import { Suspense } from "react";
import { Await, useLoaderData } from "react-router";

export const loader = async () => {
  const fastData = "Fast data";

  // Simulate a slow data fetch
  const slowData = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow data");
    }, 5000);
  });

  return {
    fastData,
    slowData,
  };
};

export default function Page() {
  const { fastData, slowData } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2">Page with loader</h1>
      <div className="">{fastData} loaded</div>
      <Suspense fallback={<div className="animate-bounce">Loading...</div>}>
        <Await resolve={slowData}>
          {(resolvedData) => <div>{resolvedData} loaded</div>}
        </Await>
      </Suspense>
    </div>
  );
}
