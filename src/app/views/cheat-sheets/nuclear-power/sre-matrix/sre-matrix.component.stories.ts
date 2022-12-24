import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';
import { createSREMatrix } from './matrix-generator';

import { SreMatrixComponent } from './sre-matrix.component';
import { SreMatrixModule } from './sre-matrix.module';

type ComponentWithCustomControls = SreMatrixComponent & {
  row: number;
  column: number;
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Nuclear Power/SRE Matrix',
  component: SreMatrixComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SreMatrixModule],
      providers: [DataService],
    }),
  ],
  args: {
    row: 2,
    column: 4,
  },
  render(args) {
    args.matrix = createSREMatrix(args.row, args.column);
    return {
      props: args,
    };
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const SREMatrix: Story = {};
