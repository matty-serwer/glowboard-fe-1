import Image from "next/image";
import Sound from "@/components/Sound";
import Soundboard from "@/components/Soundboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Soundboard />
    </main>
  );
}
