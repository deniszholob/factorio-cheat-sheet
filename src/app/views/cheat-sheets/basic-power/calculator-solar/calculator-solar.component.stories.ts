import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';

import { CalculatorSolarComponent } from './calculator-solar.component';
import { CalculatorSolarModule } from './calculator-solar.module';

type ComponentWithCustomControls = CalculatorSolarComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Basic Power/Calculator Solar',
  component: CalculatorSolarComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CalculatorSolarModule],
      providers: [DataService],
    }),
  ],
  args: {
    solarPowerRatio: 0.7,
    solarAvgMw: 42 / 1000, // MW
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const CalculatorSolar: Story = {};
