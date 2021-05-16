import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/state';

@Component({
  selector: 'app-alphabet-input-control',
  templateUrl: './alphabet-input-control.component.html',
  styleUrls: ['./alphabet-input-control.component.css']
})
export class AlphabetInputControlComponent implements OnInit {

  public sAlphabetInputObs$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => console.log(state));

    this.sAlphabetInputObs$ = this.store.select(state => state.input.sResultValue);
    this.sAlphabetInputObs$.subscribe(sValue => {
      console.log(sValue);
    });
   }


  ngOnInit(): void {
  }

}
