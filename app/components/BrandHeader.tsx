import Image from "next/image";

export default function BrandHeader() {
  return (
    <div className="flex items-center gap-4">
      <div
        className="
          relative flex items-center justify-center rounded-full
          ring-2 ring-[#D6C28F]/80
          shadow-[0_12px_32px_rgba(0,0,0,0.12)]
          p-0.5
        "
      >
        <Image
          src="/logo.jpeg"
          alt="Inner Harmony with Anu logo"
          width={64}
          height={64}
          className="rounded-full"
        />
      </div>

      <div className="leading-tight">
        <p className="flex items-baseline gap-2 font-medium">
          <span className="font-script text-xl text-[#4E6E64] font-semibold">
            Inner Harmony
          </span>
          <span className="font-serif text-xs text-[#4E6E64] font-semibold">
            with
          </span>
          <span className="font-script text-xl text-[#8FAF9B] font-semibold">
            Anu
          </span>
        </p>

        <p className="text-xs text-[#6F8F7F] mt-1 font-medium">
          Wellness and Transformation Coach
        </p>
      </div>
    </div>
  );
}