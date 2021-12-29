import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  selectedKundendaten = new FormControl(undefined, Validators.required);

  constructor() { }
}
