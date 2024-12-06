import { Event, NavigationEnd, Router } from '@angular/router';
import { CheatSheetCategory } from 'app/cheat-sheets/cheat-sheets.module';
import { filter, map } from 'rxjs';

import { NAV_ANCHOR_TAGS } from './nav/nav.data';

/** Checks the navigation url and return the extracted base part as its what is used for the cheat sheet categories*/
export function navMatchFilter(router: Router) {
  return router.events.pipe(
    filter(
      (event: Event): event is NavigationEnd => event instanceof NavigationEnd
    ),
    map((event: NavigationEnd) => {
      const match = RegExp(/^\/([^#]*)/).exec(event.urlAfterRedirects);
      if (match && match[1]) {
        return match[1];
      }
      return;
    }),
    filter(
      (matchedString?: string): matchedString is CheatSheetCategory =>
        !!matchedString && matchedString in NAV_ANCHOR_TAGS
    )
  );
}
