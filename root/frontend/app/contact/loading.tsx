export default function Loading() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse 2s">
          <div className="bg-gray-300 h-40 rounded"></div>
          <div className="bg-gray-300 h-4 mt-2 rounded"></div>
          <div className="bg-gray-300 h-4 mt-2 w-2/3 rounded"></div>
        </div>
      ))}
    </div>
  );
}