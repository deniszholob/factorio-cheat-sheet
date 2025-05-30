import { RawData } from 'app/models/Data.model';
import { VehicleFuelBonusData } from 'app/models/VehicleFuelBonusData.model';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export const VEHICLE_FUEL_BONUS_DATA: RawData<VehicleFuelBonusData> = {
  cheatSheet: {
    title: 'Vehicle Fuel Bonus',
    iconId: FactorioIcons.Icons_Locomotive,
  },
  data: {
    fuelData: [
      {
        title: 'Wood',
        icon: FactorioIcons.Icons_Wood,
        energy: '2MJ',
        stackEnergy: '200MJ',
        accelerationBonus: '+0%',
        speedBonus: '+0%',
        trainTopSpeed: '259.2 km/h',
      },
      {
        title: 'Coal',
        icon: FactorioIcons.Icons_Coal,
        energy: '4MJ',
        stackEnergy: '200MJ',
        accelerationBonus: '+0%',
        speedBonus: '+0%',
        trainTopSpeed: '259.2 km/h',
      },
      {
        title: 'Solid Fuel',
        icon: FactorioIcons.Icons_SolidFuel,
        energy: '12MJ',
        stackEnergy: '600MJ',
        accelerationBonus: '+20%',
        speedBonus: '+5%',
        trainTopSpeed: '272.2 km/h',
      },
      {
        title: 'Rocket Fuel',
        icon: FactorioIcons.Icons_RocketFuel,
        energy: '100MJ',
        stackEnergy: '1GJ',
        accelerationBonus: '+80%',
        speedBonus: '+15%',
        trainTopSpeed: '298.1 km/h',
      },
      {
        title: 'Nuclear Fuel',
        icon: FactorioIcons.Icons_NuclearFuel,
        energy: '1.21GJ',
        stackEnergy: '1.21GJ',
        accelerationBonus: '+150%',
        speedBonus: '+15%',
        trainTopSpeed: '298.1 km/h',
      },
    ],
    speedWithWagons: [
      {
        wagons: 0,
        basicFuel: 259.2,
        solidFuel: 272.2,
        rocketFuel: 298.1,
      },
      {
        wagons: 1,
        basicFuel: 258,
        solidFuel: 272.2,
        rocketFuel: 298.1,
      },
      {
        wagons: 2,
        basicFuel: 244,
        solidFuel: 272.2,
        rocketFuel: 298.1,
      },
      {
        wagons: 3,
        basicFuel: 229,
        solidFuel: 272.2,
        rocketFuel: 298.1,
      },
      {
        wagons: 4,
        basicFuel: 214,
        solidFuel: 272.2,
        rocketFuel: 298.1,
      },
      {
        wagons: 5,
        basicFuel: 198,
        solidFuel: 257,
        rocketFuel: 298.1,
      },
      {
        wagons: 6,
        basicFuel: 186,
        solidFuel: 242,
        rocketFuel: 298.1,
      },
      {
        wagons: 7,
        basicFuel: 170,
        solidFuel: 228,
        rocketFuel: 298.1,
      },
      {
        wagons: 15,
        basicFuel: 50,
        solidFuel: 105,
        rocketFuel: 285,
      },
    ],
    accelerationTimes: {
      'S-1-4-1': [
        {
          speed: 100,
          timeBasic: '12s',
          timeSolid: '9s',
          timeRocket: '5s',
        },
        {
          speed: 150,
          timeBasic: '25s',
          timeSolid: '15s',
          timeRocket: '8s',
        },
        {
          speed: 200,
          timeBasic: '90s',
          timeSolid: '26s',
          timeRocket: '11s',
        },
        {
          speed: 250,
          timeBasic: '-',
          timeSolid: '60s',
          timeRocket: '16s',
        },
        {
          speed: 298.1,
          timeBasic: '-',
          timeSolid: '-',
          timeRocket: '21s',
        },
      ],
      'S-1-10-1': [
        {
          speed: 100,
          timeBasic: '-',
          timeSolid: '-',
          timeRocket: '11s',
        },
        {
          speed: 150,
          timeBasic: '-',
          timeSolid: '-',
          timeRocket: '18s',
        },
        {
          speed: 200,
          timeBasic: '-',
          timeSolid: '-',
          timeRocket: '27s',
        },
        {
          speed: 250,
          timeBasic: '-',
          timeSolid: '-',
          timeRocket: '40s',
        },
        {
          speed: 298.1,
          timeBasic: '-',
          timeSolid: '-',
          timeRocket: '63s',
        },
      ],
    },
  },
};
