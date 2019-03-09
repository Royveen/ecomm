/**
 * Modal Component
 */
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer,
} from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

import * as keymap from '../../utils/keymap';
@Component({
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({
          transform: 'scale3d(.3, .3, .3)'
        }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({
          transform: 'scale3d(.0, .0, .0)'
        })),
      ]),
    ]),
  ],
  selector: 'app-core-modal',
  styleUrls: ['./core-modal.component.scss'],
  templateUrl: 'core-modal.component.html',
})
export class CoreModalComponent {
  private originalHeight: number = null;
  private gap: any = 20;
  private initDelay: any = 10;

  public showModal = false;

  @Input() autoHeight: number;
  @Input() closeOnDocClick: boolean;
  @Output() modalOpenState: EventEmitter < boolean > = new EventEmitter < boolean > ();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeModal(this.autoHeight);
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === keymap.ESCAPE) {
      this.closeModal();
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.showModal && this.closeOnDocClick) {
      const classList = event.target.className.split(' ');

      const criteria1 = ['dialog', 'modal'];
      const meetsCriteria1 = classList.filter((elem) => {
        return criteria1.indexOf(elem) > -1;
      }).length === criteria1.length;

      const criteria2 = ['modal-backdrop', 'fade', 'in'];
      const meetsCriteria2 = classList.filter((elem) => {
        return criteria2.indexOf(elem) > -1;
      }).length === criteria2.length;

      if (
        meetsCriteria1 || meetsCriteria2
      ) {
        this.closeModal();
      }
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer) {}

  public openModal(): void {
    this.showModal = true;
    this.modalOpenState.emit(true);
    setTimeout(() => {
      this.setModalDefaults();
      this.resizeModal(this.autoHeight);
    }, this.initDelay);
  }

  public closeModal(): void {
    this.showModal = false;
    this.modalOpenState.emit(false);
  }

  public setModalDefaults(): void {
    const el = this.el.nativeElement.querySelector('div.modal-dialog');
    if (!this.originalHeight && el) {
      this.originalHeight = el.offsetHeight;
    }
  }

  public resizeModal(autoHeight: number): void {
    const el = this.el.nativeElement.querySelector('div.modal-dialog');

    if (!(autoHeight > 0) || !this.showModal || !el) {
      return;
    }

    const documentHeight: number = document.documentElement.clientHeight;
    const top: number = el.offsetTop;

    let newHeight: any = documentHeight - top - this.gap;

    if (newHeight > this.originalHeight) {
      newHeight = this.originalHeight;
    } else if (newHeight < autoHeight) {
      newHeight = autoHeight;
    }

    this.renderer.setElementStyle(
      this.el.nativeElement.querySelector('div.modal-content'),
      'height',
      `${newHeight}px`,
    );
  }
}