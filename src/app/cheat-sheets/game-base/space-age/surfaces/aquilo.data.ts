import { SimpleRatio } from 'app/data';
import { FactorioIcons } from 'app/shared/factorio-icons.enum';

export interface AquiloData {
  bootstrapItems: SimpleRatio[][];
}
export const AQUILO_DATA: AquiloData = {
  bootstrapItems: [
    [
      { iconId: FactorioIcons.Icons_ConstructionRobot, count: 10 },
      { iconId: FactorioIcons.Icons_LogisticRobot, count: 20 },
      { iconId: FactorioIcons.Icons_Roboport, count: 4 },
      { iconId: FactorioIcons.Icons_StorageChest, count: 10 },
      { iconId: FactorioIcons.Icons_RequesterChest, count: 10 },
      { iconId: FactorioIcons.Icons_PassiveProviderChest, count: 10 },
    ],
    [
      { iconId: FactorioIcons.Icons_HeatPipe, count: 50 },
      { iconId: FactorioIcons.Icons_HeatingTower, count: 50 },
      { iconId: FactorioIcons.Icons_SteamTurbine, count: 50 },
      { iconId: FactorioIcons.Icons_Pipe, count: 50 },
      { iconId: FactorioIcons.Icons_PipeToGround, count: 50 },
      { iconId: FactorioIcons.Icons_FastInserter, count: 50 },
      { iconId: FactorioIcons.Icons_Substation, count: 20 },
      { iconId: FactorioIcons.Icons_MediumElectricPole, count: 20 },
    ],
  ],
};
