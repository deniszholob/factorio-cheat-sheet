// Angular Imports
import { Component, OnInit, Input } from '@angular/core';

import { FactorioIcon } from './factorio-icon.model';

@Component({
    selector: 'app-factorio-icon',
    templateUrl: './factorio-icon.component.html',
    styleUrls: ['./factorio-icon.component.scss']
})
export class FactorioIconComponent implements OnInit {

    @Input() icon: FactorioIcon;

    constructor() { }

    ngOnInit() { }

}
