import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FactorioIconModule } from '../factorio-icon/factorio-icon.module';
import { IconRatioCompositeComponent } from './icon-ratio-composite.component';

@NgModule({
  imports: [CommonModule, FactorioIconModule],
  declarations: [IconRatioCompositeComponent],
  exports: [IconRatioCompositeComponent],
})
export class IconRatioCompositeModule {}
