export interface Stat {
  id: number;
  label: string;
  value: number;
  suffix: string;
  duration: number; // Animation duration in seconds
}

export const stats: Stat[] = [
  {
    id: 1,
    label: "Nöjda elever",
    value: 1250,
    suffix: "+",
    duration: 2.5
  },
  {
    id: 2,
    label: "Godkända på första försöket",
    value: 92,
    suffix: "%",
    duration: 2
  },
  {
    id: 3,
    label: "År i branschen",
    value: 15,
    suffix: "+",
    duration: 1.5
  },
  {
    id: 4,
    label: "Femstjärniga recensioner",
    value: 875,
    suffix: "+",
    duration: 2.5
  }
];