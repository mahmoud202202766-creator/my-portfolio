export default function Planet() {
  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 z-2 rounded-full pointer-events-none"
      style={{
        bottom: "-38vw",
        width: "110vw",
        height: "110vw",
        maxWidth: "1400px",
        maxHeight: "1400px",
        background:
          "radial-gradient(circle at 35% 25%, rgba(255,255,255,0.10), transparent 45%), " +
          "radial-gradient(circle at 60% 40%, #4a2a8f, #1c0e3d 60%, #0d0620 100%)",
        boxShadow:
          "0 -40px 120px rgba(139,92,246,0.35), inset 0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      <div
        className="absolute left-0 right-0"
        style={{
          top: "8%",
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, rgba(79,214,255,0.6), transparent)",
          filter: "blur(1px)",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: 60,
          height: 60,
          top: "20%",
          left: "30%",
          background: "rgba(0,0,0,0.18)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 34,
          height: 34,
          top: "26%",
          left: "55%",
          background: "rgba(0,0,0,0.18)",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 80,
          height: 80,
          top: "15%",
          left: "68%",
          background: "rgba(0,0,0,0.18)",
        }}
      />
    </div>
  );
}
