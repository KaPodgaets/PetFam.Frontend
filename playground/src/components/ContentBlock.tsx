interface ContentBlockProps {
  children: React.ReactNode;
}

export default function ContentBlock({ children }: ContentBlockProps) {
  return (
    <div className="w-full bg-neutral-200 rounded-3xl flex-1 p-2">
      {children}
    </div>
  );
}
