import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { DataService, SheetCollapseToggleService } from 'app/services';

@NgModule({
  imports: [HttpClientTestingModule],
  providers: [DataService, SheetCollapseToggleService],
})
export class StorybookCsModule {}
