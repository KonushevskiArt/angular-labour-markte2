import { ComponentFactoryResolver, Inject, Injectable, Injector, TemplateRef } from '@angular/core';
import { ModalComponent } from './../../../../../../../../firstApp/src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(Document) private document: Document
  ) { }

  open(content: TemplateRef<any>, options?: { size?: string; title?: string}) {
    const ModalComponentFactory = this.resolver.resolveComponentFactory(ModalComponent);
  }
}
