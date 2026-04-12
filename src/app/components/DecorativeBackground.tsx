"use client";

// Client boundary needed for ssr:false dynamic imports.
// Keeps FloatingLeaves + SakuraLeaves out of the server bundle
// and defers them until after hydration.
import dynamic from "next/dynamic";

const FloatingLeaves = dynamic(() => import("./FloatingLeaves"), {
  ssr: false,
  loading: () => null,
});

const SakuraLeaves = dynamic(() => import("./SakuraLeaves"), {
  ssr: false,
  loading: () => null,
});

export default function DecorativeBackground() {
  return (
    <>
      <FloatingLeaves />
      <SakuraLeaves />
    </>
  );
}
