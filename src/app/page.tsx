import { Inter } from "next/font/google";
import { Paragraph } from "./components/UI/Paragraph";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline italic">Hello world!</h1>
      <Paragraph>Some text</Paragraph>
    </div>
  );
}
