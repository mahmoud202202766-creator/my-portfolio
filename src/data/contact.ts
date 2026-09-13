import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface ContactRow {
  label: string;
  value: string;
  href?: string;
  Icon: LucideIcon | IconType;
}

export const ROWS: ContactRow[] = [
  {
    label: "EMAIL",
    value: "mahmoud202202766@gmail.com",
    href: "mailto:mahmoud202202766@gmail.com",
    Icon: Mail,
  },
  {
    label: "CALL / MESSAGE",
    value: "01203101989",
    href: "tel:01203101989",
    Icon: Phone,
  },
  {
    label: "LOCATION",
    value: "Banha, Qalyubia, Egypt",
    Icon: MapPin,
  },
  {
    label: "GITHUB",
    value: "mahmoud202202766-creator",
    href: "https://github.com/mahmoud202202766-creator",
    Icon: FaGithub,
  },
  {
    label: "LINKEDIN",
    value: "mahmoud-elhayad-310561311",
    href: "https://www.linkedin.com/in/mahmoud-elhayad-310561311",
    Icon: FaLinkedin,
  },
];
