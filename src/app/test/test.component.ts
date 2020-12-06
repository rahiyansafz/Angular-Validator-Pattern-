import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'primary_contact': this.fb.group({
        'name': [''],
        'email': ['', { validators: [Validators.required, Validators.pattern(environment.validators.email)], updateOn: 'blur' }],
        'phone': ['']
      })
    });
  }

  get name(): FormControl {
    return <FormControl>this.form.get('name');
  }

  get code(): FormControl {
    return <FormControl>this.form.get('code');
  }

  get primaryContactEmail(): FormControl {
    return <FormControl>this.form.get('primary_contact.email');
  }


  ngOnInit() {
    this.form.patchValue({
      'primary_contact': {
        'name': 'Some Test Org',
        'email': 'test@gmail.com',
        'phone': ''
      }
    });
    this.form.updateValueAndValidity();
  }
}