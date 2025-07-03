export default function PhotosLayout({
  children,
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      {children}
    </div>
  );
}
