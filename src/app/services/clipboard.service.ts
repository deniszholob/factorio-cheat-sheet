// Angular
import { Injectable } from '@angular/core';

/** Needed to get around the fact that navigator is still experimental feature */
declare var navigator: any;

@Injectable({
    providedIn: 'root'
})
export class ClipboardService {

    constructor() { }

    /**
     * Puts the msg parameter into the copy clipboard
     * Note: Limitation using inside http requests (and more)
     * @param msg Message string to copy to clipboard
     */
    public copyMessageExec(msg: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = msg;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    /**
     * Future way of using clipboard, overcomes old limitations
     * Note: Only works on latest Chrome versions as of Jan 2019
     * @param msg Message string to copy to clipboard
     */
    public copyMessageNavigator(msg: string): void {
        navigator.clipboard.writeText(msg)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                // This can happen if the user denies clipboard permissions:
                console.error('Could not copy text: ', err);
            });
    }
}
