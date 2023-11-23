import { createClient } from "@/prismicio";
type ParagraphProps = {
  children: React.ReactNode;
  className: string;
};

export default async function Paragraph({
  children,
  className,
}: ParagraphProps) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const { secondary_color } = settings.data;
  return (
    <p style={{ color: secondary_color || "#303030" }} className={className}>
      {children}
    </p>
  );
}
