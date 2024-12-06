import type { Meta, StoryObj } from '@storybook/angular';
import { DataService } from 'app/services';

import { FactorioIconComponent } from './factorio-icon.component';
import { FactorioIcon as Icon, FactorioIconIds } from './factorio-icon.model';

const dataService = new DataService();

type ComponentWithCustomControls = FactorioIconComponent & Icon;

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Shared/Factorio Icon',
  component: FactorioIconComponent,
  argTypes: {
    src: {
      options: FactorioIconIds,
      control: { type: 'select' },
    },
    icon: {
      control: { disable: true },
      // table: { disable: true },
    },
  },
  args: {
    name: 'name',
    text: '0',
    src: FactorioIconIds.Advanced_circuit,
    spaceAge: true,
    icon: new Icon(''),
  },
  render(args) {
    args.icon = dataService.getFactorioIcon(args.src, args.text, args.name);
    return { props: args };
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const FactorioIcon: Story = {};
