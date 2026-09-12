import { Link } from "react-router-dom";
import ProfilePhoto from "../components/ui/ProfilePhoto";

export default function About() {
  return (
    <section className="relative pb-16">
      <ProfilePhoto className="block mx-auto mb-6 w-28 h-28 md:absolute md:mx-0 md:mb-0 md:right-16 md:bottom-6 md:w-32 md:h-32 shadow-[0_10px_30px_rgba(0,0,0,0.45)]" />

      <div className="ticker">MESSAGE RECEIVED · MESSAGE RECEIVED</div>

      <h1 className="page-title">GREETINGS FELLOW HUMANS</h1>

      <div className="font-space text-xl text-ink-primary -mt-1 mb-6">
        I'M MAHMOUD
      </div>

      <p className="max-w-115 text-ink-muted text-[14.5px] leading-[1.85] mb-7">
        A frontend developer from Egypt, trained through October 6 University
        and ITI's web technologies program. I build clean, responsive interfaces
        with React, TypeScript, and Tailwind CSS — turning rough ideas into
        products people can actually use. Currently deepening my Next.js skills
        while taking on freelance frontend work.
      </p>

      <div className="max-w-115 border-l-[3px] border-accent-pink pl-4 mb-6">
        <div className="font-space font-semibold text-sm tracking-wide mb-1">
          CODE SHOULD FEEL INVISIBLE
        </div>
        <div className="text-sm text-accent-pink">
          — good UI gets out of the user's way
        </div>
      </div>

      <Link
        to="/projects"
        className="inline-block font-space text-sm font-semibold text-accent-cyan border-b border-accent-cyan pb-0.5 hover:opacity-70 transition-opacity"
      >
        View my projects →
      </Link>
    </section>
  );
}
