import Image from "next/image";
export default function DonationPage() {


  return (
   <div className="bg-gray-200 min-h-screen w-full">
  <main className="w-full min-h-screen flex flex-col">
    <div className="relative h-96 w-screen">
      <Image
        src="next.svg"
        alt="Donation"
        fill
        className="object-cover"
      />
    </div>
    <div className="mt-4 bg-gray-400 w-full p-4">
      
    </div>

  </main>
</div>
  );
} 