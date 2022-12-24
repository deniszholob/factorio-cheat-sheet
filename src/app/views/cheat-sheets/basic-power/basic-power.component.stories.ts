import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService, SheetCollapseToggleService } from 'app/services';
import { BasicPowerComponent } from './basic-power.component';
import { BasicPowerModule } from './basic-power.module';

type ComponentWithCustomControls = BasicPowerComponent;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Cheat Sheets/Basic Power',
  component: BasicPowerComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, BasicPowerModule],
      providers: [DataService, SheetCollapseToggleService],
    }),
  ],
  args: {},
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const BasicPower: Story = {};
