import {Directive, Input, HostListener} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mouse]'
})
export class MouseDirective {
  @Input('mouse') message = 'Default message';
  @HostListener('mouseenter')
  mouseenter() {
    console.log('OMG It\'s a Mouse!!!');
  }

  @HostListener('mouseover')
  mouseover() {
    console.log('OMG It\'s still here!!!');
  }

  @HostListener('mouseout')
  mouseout() {
    console.log('Phew thank god it left!');
  }

  @HostListener('mouseout')
  isItSafe() {
    console.log('It really left rigth');
  }
  @HostListener('mouseout')
  messageInput() {
    console.log(`The message input is ${this.message}`);
  }

}