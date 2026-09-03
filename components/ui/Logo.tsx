import Image from "next/image";

type Props = {
  variant?: "default" | "white";
};

export default function Logo({ variant = "default" }: Props) {
  if (variant === "white") {
    return (
      <div className="text-white select-none">
        <div className="text-4xl font-black tracking-tight leading-none">
          BCBL
        </div>
        <div className="text-[11px] font-semibold tracking-[0.18em] uppercase opacity-60 mt-0.5">
          Better Credit · Better Living
        </div>
      </div>
    );
  }

  return (
    <Image
      src="/img/image.png"
      alt="BCBL — Better Credit Better Living"
      width={640}
      height={640}
      sizes="(max-width: 768px) 40px, 48px"
      className="h-10 md:h-12 w-auto object-contain"
      priority
    />
  );
}
