// Angular
import { Injectable } from '@angular/core';

// RXJX Observables
import { Observable, Subject } from 'rxjs';

// Models
import { Collapse } from './collapse.model';

@Injectable()
export class SheetCollapseToggleService {

    // Subject for Observables
    private subjectMessage = new Subject<Collapse>();

    constructor() { }

    /** Returns message Observable */
    public getCollapseToggle(): Observable<Collapse> {
        return this.subjectMessage.asObservable();
    }

    public collapseAll() {
        this.subjectMessage.next(new Collapse(true));
    }

    public expandAll() {
        this.subjectMessage.next(new Collapse(false));
    }

    public expandId(id: string) {
        this.subjectMessage.next(new Collapse(false, id));
    }
}
