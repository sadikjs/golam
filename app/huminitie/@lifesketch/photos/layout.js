export default function PhotosLayout({
  children,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-8">
      {children}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 ">
        {ten}
        {eleven}
        {twelve}
        {thirteen}
        {fourteen}
        {fifteen}
      </div>
    </div>
  );
}
