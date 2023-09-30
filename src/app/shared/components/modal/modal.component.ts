import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements AfterViewInit, OnDestroy {

  @Input('closeModal') closeModal: () => void
  @ViewChild('modalRef') modalRef: ElementRef;
  body: HTMLElement

  ngAfterViewInit(): void {
    this.body = this.modalRef.nativeElement.closest('body');
    this.body.classList.add('overflow-hidden');
  }

  ngOnDestroy(): void {
    this.body.classList.remove('overflow-hidden');
  }
  
  handleModalClick = (event: MouseEvent) => {
    event.stopImmediatePropagation();
    this.closeModal()
  }

}
