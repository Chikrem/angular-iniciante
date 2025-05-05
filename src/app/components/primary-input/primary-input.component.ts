import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputType = 'text' | 'email' | 'password';

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrls: ['./primary-input.component.scss']
})
export class PrimaryInputComponent {

  @Input() type: InputType = 'text';
  @Input() formName: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';

}
