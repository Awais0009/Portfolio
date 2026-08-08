import {
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Trophy,
  Zap,
  Medal,
  type LucideProps,
} from "lucide-react";

const ICONS = {
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Trophy,
  Zap,
  Medal,
} as const;

export type IconName = keyof typeof ICONS;

export function DynamicIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = ICONS[name as IconName] ?? Wrench;
  return <Icon {...props} />;
}
