import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DataService, SheetCollapseToggleService } from 'app/services';

import { FactorioIconIds } from '../factorio-icon/factorio-icon.model';
import {
  CheatSheetTemplateComponent,
  CHT_DEFAULT_ICON_ID,
  CHT_DEFAULT_TITLE,
} from './cheat-sheet-template.component';

type ComponentWithCustomControls = CheatSheetTemplateComponent & {
  content: string;
};

// More on how to set up stories at: https://storybook.js.org/docs/7.0/angular/writing-stories/introduction
const meta: Meta<ComponentWithCustomControls> = {
  title: 'Shared/Cheat Sheet Template',
  component: CheatSheetTemplateComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      // declarations: [],
      providers: [SheetCollapseToggleService, DataService],
    }),
  ],
  argTypes: {
    iconId: {
      options: Object.values(FactorioIconIds),
      control: { type: 'select' },
    },
  },
  args: {
    iconId: CHT_DEFAULT_ICON_ID,
    title: CHT_DEFAULT_TITLE,
    spaceAge: true,
    animation: true,
    content: 'Cheat Sheet Contents',
  },
  render(args) {
    return {
      props: args,
      template: `<app-cheat-sheet-template
        [iconId]="iconId"
        [title]="title"
        [spaceAge]="spaceAge"
      >${args.content}</app-cheat-sheet-template>`,
    };
  },
};

export default meta;
type Story = StoryObj<ComponentWithCustomControls>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/angular/writing-stories/args
export const CheatSheetTemplate: Story = {};
