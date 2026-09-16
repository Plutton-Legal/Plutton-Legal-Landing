import Image from "next/image";

type Props = {
  variant?: "default" | "white";
};

export default function Logo({ variant = "default" }: Props) {
  if (variant === "white") {
    return (
      <div className="inline-flex bg-white rounded-lg p-1.5">
        <Image
          src="/img/plutton_legal.jpeg"
          alt="Plutton Legal"
          width={640}
          height={640}
          sizes="40px"
          className="h-10 w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <Image
      src="/img/plutton_legal.jpeg"
      alt="Plutton Legal"
      width={640}
      height={640}
      sizes="(max-width: 768px) 48px, 56px"
      className="h-12 md:h-14 w-auto object-contain"
      priority
    />
  );
}
