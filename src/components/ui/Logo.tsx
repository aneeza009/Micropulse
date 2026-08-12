import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/micropulse-logo.jpeg"
        alt="MICROPULSE Engineering logo"
        width={160}
        height={74}
        priority
        className="h-9 w-auto rounded-[3px] md:h-10"
      />
      <span className="sr-only">MICROPULSE Engineering</span>
    </span>
  );
}
