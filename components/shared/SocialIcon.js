import {
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
} from "lucide-react";

const map = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

export default function SocialIcon({ name, className = "h-5 w-5" }) {
  const Icon = map[name] || Globe;
  return <Icon className={className} aria-hidden />;
}
