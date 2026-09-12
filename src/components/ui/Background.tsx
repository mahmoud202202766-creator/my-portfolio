import bgPlanetPurple from "@/assets/backgrounds/bg-planet-purple.jpg";
import bgTowers from "@/assets/backgrounds/bg-towers.jpg";

export default function Background() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 bg-cover bg-position-[center_30%]"
        style={{ backgroundImage: `url(${bgPlanetPurple})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 120%, rgba(42,22,80,0.55) 0%, rgba(21,10,40,0.75) 55%, rgba(10,5,21,0.95) 100%)",
          }}
        />
      </div>

      <div
        className="fixed inset-0 z-0 bg-cover bg-position-[center_60%] pointer-events-none"
        style={{
          backgroundImage: `url(${bgTowers})`,
          opacity: 0.16,
          mixBlendMode: "screen",
        }}
      />
    </>
  );
}
