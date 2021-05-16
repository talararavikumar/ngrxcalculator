import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUserInputKEY, removeInputKEY } from '../store/actions';
import { AppState } from '../store/state';

@Component({
  selector: 'app-keypad-control',
  templateUrl: './keypad-control.component.html',
  styleUrls: ['./keypad-control.component.css']
})
export class KeypadControlComponent implements OnInit {

  public arrKeys: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "0", "<-"]
  constructor(private store: Store<AppState>) { 
    
  }

  ngOnInit(): void {
  }

  fnKeyClickhandler(keyValue: string): void {
    if (keyValue === '<-')
      this.store.dispatch(removeInputKEY());
    else
      this.store.dispatch(addUserInputKEY({ sInputKey: keyValue }));
  }
}
