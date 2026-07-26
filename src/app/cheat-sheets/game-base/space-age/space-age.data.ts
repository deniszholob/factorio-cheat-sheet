import { SpaceAgeData } from './space-age.model';
import { AQUILO_DATA } from './surfaces/aquilo.data';
import { FULGORA_DATA } from './surfaces/fulgora.data';
import { GLEBA_DATA } from './surfaces/gleba.data';
import { SPACE_PLATFORM_DATA } from './surfaces/space-platform.data';
import { VULCANUS_DATA } from './surfaces/vulcanus.data';

export const SPACE_AGE_DATA: SpaceAgeData = {
  solarEnergyUnit: 'kW',
  vulcanus: VULCANUS_DATA,
  fulgora: FULGORA_DATA,
  gleba: GLEBA_DATA,
  aquilo: AQUILO_DATA,
  spacePlatformData: SPACE_PLATFORM_DATA,
};
