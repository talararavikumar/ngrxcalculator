import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducer';

@Component({
  selector: 'app-number-input-control',
  templateUrl: './number-input-control.component.html',
  styleUrls: ['./number-input-control.component.css']
})
export class NumberInputControlComponent implements OnInit {

  public sNumericInputObs$:Observable<string>
  constructor(private store:Store<AppState>) {
    this.sNumericInputObs$ = this.store.select(store=>store.sResultValue);
    this.sNumericInputObs$.subscribe(sValue=>{
      console.log(sValue);
    })
   }

  ngOnInit(): void {
  }

}
