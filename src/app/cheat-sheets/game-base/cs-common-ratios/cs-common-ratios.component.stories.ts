import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';

import { CsCommonRatiosComponent } from './cs-common-ratios.component';
type ComponentWithCustomControls = CsCommonRatiosComponent & {
  content: string;
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Cs Common Ratios',
  component: CsCommonRatiosComponent,
  decorators: [
    moduleMetadata({
      imports: [StorybookCsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const CsCommonRatios: Story = {};
