import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';
import { RatioComponent } from './ratio.component';
import { RatioModule } from './ratio.module';

type ComponentWithCustomControls = RatioComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Shared/Ratio',
  component: RatioComponent,
  decorators: [
    moduleMetadata({
      imports: [RatioModule],
      declarations: [],
      providers: [DataService],
    }),
  ],
  argTypes: {},
  args: {
    ratios: [
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Automation_science_pack',
        count: 10,
        rate: '2.5/s',
      },
      {
        machineIconId: 'Assembling_machine_3',
        productIconId: 'Iron_gear_wheel',
        count: 1,
      },
    ],
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const Ratio: Story = {};
