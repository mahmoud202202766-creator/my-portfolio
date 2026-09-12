import profile from "@/assets/photos/profile.jpg";

export default function ProfilePhoto({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-full p-1 bg-linear-to-tr from-accent-pink via-accent-cyan to-accent-pink ${className}`}
    >
      <img
        src={profile}
        alt="Mahmoud El-Sayed"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}
