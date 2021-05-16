import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberToAlphabetConverterService {

  constructor() { }

  fnConvertNumberToAlphabet(sInputValue):Observable<string>{
    if( typeof sInputValue !== 'string')
    return of('');
    
    const arrSplittedInput:string[] = sInputValue.split('#');
     return of(arrSplittedInput.reduce((prev,next)=>{
      return prev + this.numToChar(next)
    }, ''));
  }

  numToChar(num){
    if(num.length < 1)
    return '';

    let s , t;
    t = (num) % 25;
    s = String.fromCharCode(65 + t) ;
    return s;
  }
}
