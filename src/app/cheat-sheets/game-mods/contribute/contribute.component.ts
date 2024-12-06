import { Component } from '@angular/core';

import { Links, MOD_REQUESTS } from './contribute.data';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
})
export class ContributeComponent {
  public readonly iconId: string = 'Blueprint';
  public readonly title: string = 'Contribute';
  public readonly MOD_REQUESTS: Links[] = MOD_REQUESTS;
}
