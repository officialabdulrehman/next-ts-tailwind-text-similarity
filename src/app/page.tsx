import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h1 className="text-3xl font-bold underline italic">Hello world!</h1>;
}
