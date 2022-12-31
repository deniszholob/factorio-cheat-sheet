import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StorybookCsModule } from 'app/shared/storybook-cs.module';
import { BasicPowerComponent } from './basic-power.component';
import { BasicPowerModule } from './basic-power.module';

type ComponentWithCustomControls = BasicPowerComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Game Base/Basic Power',
  component: BasicPowerComponent,
  decorators: [
    moduleMetadata({
      imports: [BasicPowerModule, StorybookCsModule],
    }),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const BasicPower: Story = {};
