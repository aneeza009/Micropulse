import Image from "next/image";
import { Reveal, SectionHeading } from "@/components/ui/primitives";
import { LEADERSHIP, TEAM, initials, type TeamMember } from "@/lib/team";

/** Photo, or a brand-tinted monogram when no photo has been supplied yet. */
function Portrait({
  member,
  className,
  monogramClass,
}: {
  member: TeamMember;
  className: string;
  monogramClass: string;
}) {
  if (member.photo) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`grid place-items-center bg-gradient-to-br from-[var(--ink-800)] to-[var(--ink-700)] ${className}`}
      aria-hidden
    >
      <span
        className={`font-display font-extrabold tracking-tight text-gradient-solar ${monogramClass}`}
      >
        {initials(member.name)}
      </span>
    </div>
  );
}

function LeadershipCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="card overflow-hidden sm:flex sm:items-stretch"
    >
      <Portrait
        member={member}
        className="h-56 w-full shrink-0 sm:h-auto sm:w-56 lg:w-64"
        monogramClass="text-6xl"
      />
      <div className="p-6 md:p-8">
        <h3 className="font-display text-xl font-bold text-text-hi md:text-2xl">
          {member.name}
        </h3>
        <p className="mt-1 font-display text-sm font-semibold uppercase tracking-widest text-orange">
          {member.role}
        </p>
        <div className="mt-4 h-px w-12 bg-gradient-to-r from-gold to-orange" />
        <p className="mt-4 text-sm leading-relaxed text-text-mid md:text-base">
          {member.bio}
        </p>
      </div>
    </Reveal>
  );
}

function MemberCard({ member, delay }: { member: TeamMember; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-white shadow-[var(--shadow-card)] transition-colors duration-300 hover:border-orange/40"
    >
      <Portrait
        member={member}
        className="aspect-[4/3] w-full"
        monogramClass="text-4xl"
      />
      <div className="p-5">
        <h3 className="font-display text-base font-bold text-text-hi">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-orange">
          {member.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-mid">{member.bio}</p>
      </div>
    </Reveal>
  );
}

export function TeamGrid() {
  return (
    <>
      <section className="relative scroll-mt-24 py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                The people who{" "}
                <span className="text-gradient-solar">set the standard.</span>
              </>
            }
            intro="MICROPULSE was founded by engineers, and it is still run by them."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {LEADERSHIP.map((m, i) => (
              <LeadershipCard key={m.id} member={m} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative scroll-mt-24 bg-[var(--ink-850)] py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Engineering & Operations"
            title={
              <>
                The team behind every{" "}
                <span className="text-gradient-solar">installation.</span>
              </>
            }
            intro="Design, project management, electrical engineering and after-sales support — the functions that carry a project from first site visit to long-term performance."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <MemberCard key={m.id} member={m} delay={(i % 3) * 0.07} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
