export default function SpaceDebris() {
  return (
    <>
      {/* floating rocks */}
      <svg
        className="fixed z-1 pointer-events-none"
        style={{
          width: 90,
          top: "8%",
          left: "2%",
          transform: "rotate(-8deg)",
          opacity: 0.5,
          filter: "drop-shadow(0 0 12px rgba(139,92,246,0.15))",
        }}
        viewBox="0 0 100 100"
      >
        <polygon points="20,10 80,25 70,80 15,70" fill="#4a3580" />
      </svg>
      <svg
        className="fixed z-1 pointer-events-none"
        style={{
          width: 60,
          top: "20%",
          right: "4%",
          transform: "rotate(12deg)",
          opacity: 0.5,
          filter: "drop-shadow(0 0 12px rgba(139,92,246,0.15))",
        }}
        viewBox="0 0 100 100"
      >
        <polygon points="30,5 90,30 65,90 10,60" fill="#3a2868" />
      </svg>
      <svg
        className="fixed z-1 pointer-events-none"
        style={{
          width: 44,
          top: "55%",
          left: "1%",
          transform: "rotate(20deg)",
          opacity: 0.5,
          filter: "drop-shadow(0 0 12px rgba(139,92,246,0.15))",
        }}
        viewBox="0 0 100 100"
      >
        <polygon points="10,20 70,5 90,60 30,90" fill="#4a3580" />
      </svg>

      {/* shooting star */}
      <div
        className="fixed z-1 pointer-events-none animate-shoot"
        style={{
          top: "6%",
          left: "8%",
          width: 120,
          height: 2,
          background:
            "linear-gradient(90deg, rgba(79,214,255,0.9), transparent)",
          transform: "rotate(28deg)",
        }}
      />
    </>
  );
}
