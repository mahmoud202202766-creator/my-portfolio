import { NAV_ITEMS } from "../../data/navigation";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <nav className="flex flex-row md:flex-col gap-1 md:gap-2.5 w-full md:w-47.5 shrink-0 px-4 py-3 md:px-0 md:py-9 md:pl-7 overflow-x-auto md:overflow-visible bg-black/30 md:bg-transparent">
      <div className="hidden md:block font-space text-[15px] font-bold tracking-wide text-cyan-300 mb-8">
        MAHMOUD EL-SAYED
      </div>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              "font-space text-[13px] tracking-[1.5px] whitespace-nowrap transition-all",
              "px-4 py-2.5 md:px-5.5 md:py-2.75",
              "rounded-full md:rounded-l-pill md:rounded-r-none",
              isActive
                ? "text-slate-50 bg-white/10 md:shadow-[inset_3px_0_0_#ff4fa3]"
                : "text-ink-muted hover:text-slate-50",
            ].join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
