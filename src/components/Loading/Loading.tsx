export function Loading() {
  return (
    <div className="bg-gray-100 fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-full py-10">
        <div className="custom-loader" />
      </div>
      <p className="w-1/3 text-center text-gray-700">
        This may take a few seconds, please do not close this page.
      </p>
    </div>
  );
}
