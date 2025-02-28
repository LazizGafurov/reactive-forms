import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, NgIf, MatButtonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  register = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
    ]),
    address1: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    postCode: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    patron: new FormControl('', Validators.required),
    sponsor: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.register.valid) {
    console.log(this.register.value);
    }
  }
  addToCart() {
    console.log('Item added to cart');}
}
