import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService, SheetCollapseToggleService } from 'app/services';

@NgModule({
  imports: [HttpClientTestingModule, RouterTestingModule],
  providers: [DataService, SheetCollapseToggleService],
})
export class StorybookCsModule {}
