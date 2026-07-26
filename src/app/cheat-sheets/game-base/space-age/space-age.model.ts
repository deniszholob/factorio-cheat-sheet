import { AquiloData } from './surfaces/aquilo.data';
import { FulgoraData } from './surfaces/fulgora.data';
import { GlebaData } from './surfaces/gleba.data';
import { SpacePlatformData } from './surfaces/space-platform.data';
import { VulcanusData } from './surfaces/vulcanus.data';

export interface SpaceAgeData {
  solarEnergyUnit: string;
  spacePlatformData: SpacePlatformData;
  vulcanus: VulcanusData;
  fulgora: FulgoraData;
  gleba: GlebaData;
  aquilo: AquiloData;
}
