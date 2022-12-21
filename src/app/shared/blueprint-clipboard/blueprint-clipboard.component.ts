// Angular Imports
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

// UI
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

// Services
import { Placement } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { ClipboardService } from 'app/services/index';

const tooltip_Default = 'Click to copy Blueprint';
const tooltip_Copied = 'BP String Copied';
@Component({
  selector: 'app-blueprint-clipboard',
  templateUrl: './blueprint-clipboard.component.html',
  // styleUrls: ['./blueprint-clipboard.component.scss']
})
export class BlueprintClipboardComponent {
  @Input()
  public tooltipPlacement: Placement = 'auto';

  @Input()
  public set url(url: string | undefined) {
    if (url) {
      this._url = url;
      this.processBlueprint();
    }
  }
  public get url(): string {
    return this._url;
  }
  private _url = '';

  /** Tooltip for copying blueprint book */
  public tooltipMsg = tooltip_Default;
  /** Holds the blueprint strings for user to copy */
  public blueprintString: string = '';

  constructor(
    private httpClientService: HttpClient,
    public clipboardService: ClipboardService
  ) {}

  /**
   * Get Blueprint string from the url
   * Populate the tooltip array with default string
   */
  private async processBlueprint() {
    this.tooltipMsg = tooltip_Default;
    const blueprintStreams = [];
    if (!this.url) {
      throw Error('Empty url');
    }
    this.httpClientService.get(this.url, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.blueprintString = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * Resets the tooltip message to the default and close after a timeout
   * @param tooltip NgbTooltip object to operate on
   */
  private resetTooltip(tooltip: NgbTooltip): void {
    setTimeout(() => {
      this.tooltipMsg = tooltip_Default;
      tooltip.close();
      console.log(this.tooltipMsg);
    }, 2000);
  }

  /**
   * Copies Blueprint to clipboard
   * @param url Link that contains the BP text
   * @param tooltip NgbTooltip object to operate on
   */
  public copyBpString(blueprintString: string, tooltip: NgbTooltip): void {
    this.clipboardService.copyMessageExec(blueprintString);
    this.tooltipMsg = tooltip_Copied;
    this.resetTooltip(tooltip);
  }
}
