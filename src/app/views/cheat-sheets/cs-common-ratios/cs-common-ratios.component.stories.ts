import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';
import { CsCommonRatiosComponent } from './cs-common-ratios.component';
import { CsCommonRatiosModule } from './cs-common-ratios.module';
type ComponentWithCustomControls = CsCommonRatiosComponent & {
  content: string;
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Cs Common Ratios',
  component: CsCommonRatiosComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CsCommonRatiosModule],
      providers: [DataService],
    }),
  ],
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const CsCommonRatios: Story = {};
