import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type: string = "text";
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() campData: string = "";

  @Output() onInputValue: EventEmitter<string> = new EventEmitter<string>();

  @Input() inputValue: string = '';

  onInputChange(value: string): void {
    this.inputValue = value;
    this.onInputValue.emit(this.inputValue);
  }
}
