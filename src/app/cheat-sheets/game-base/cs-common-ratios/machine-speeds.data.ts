export interface MachineSpeeds {
  iconId: string;
  speed: string;
}

export const MACHINE_SPEEDS: MachineSpeeds[] = [
  {
    iconId: 'Assembling_machine_1',
    speed: '0.5/s',
  },
  {
    iconId: 'Assembling_machine_2',
    speed: '0.75/s',
  },
  {
    iconId: 'Assembling_machine_3',
    speed: '1.25/s',
  },
  {
    iconId: 'Chemical_plant',
    speed: '1/s',
  },
  {
    iconId: 'Oil_refinery',
    speed: '1/s',
  },
];
