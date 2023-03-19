import { LargeHeading } from "@/components/UI/LargeHeading";
import { Paragraph } from "@/components/UI/Paragraph";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline italic">Hello world!</h1>
      <LargeHeading>Large Heading</LargeHeading>
      <Paragraph>Some text</Paragraph>
    </div>
  );
}
