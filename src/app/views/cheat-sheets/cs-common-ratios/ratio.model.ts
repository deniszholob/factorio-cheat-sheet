import { RatioItem } from 'app/shared/ratio/ratio.component';

export interface Ratio {
  description: string;
  name: string;
  source: string;
  ratio: RatioItem[];
}
