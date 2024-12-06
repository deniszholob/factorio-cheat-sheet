import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';

import { POWER_SOLAR_DATA } from '../power-solar.data';
import { CalculatorSolarComponent } from './calculator-solar.component';

type ComponentWithCustomControls = CalculatorSolarComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Power Solar/Calculator Solar',
  component: CalculatorSolarComponent,
  decorators: [
    moduleMetadata({ imports: [], providers: [DataService] }),
    // applicationConfig({ providers: [importProvidersFrom()] }),
  ],
  parameters: {
    docs: { description: { component: `PowerSolar` } },
    // layout: 'fullscreen',
  },
  args: {
    solarPowerEffectiveness: POWER_SOLAR_DATA.solarPowerEffectiveness,
    solarAvgMw: POWER_SOLAR_DATA.solarEnergyAvgKw / 1000, // MW
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const CalculatorSolar: Story = {};
