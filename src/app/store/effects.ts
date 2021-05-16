import { Injectable } from "@angular/core";

import { createEffect, ofType, Actions } from "@ngrx/effects";
import { NumberToAlphabetConverterService } from "../service/number-to-alphabet-converter.service";
import { addUserInputKEY, removeInputKEY, updateResultValue, } from "./actions";
import { map, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { AppState } from "./state";
import { Store } from "@ngrx/store";


@Injectable()
export class inputEffects{

    constructor(private actions$:Actions,private oConverterService: NumberToAlphabetConverterService,
        private store:Store<AppState>){

    }

    infoEffect = 

    createEffect(() => 

        this.actions$.pipe(

            ofType(addUserInputKEY, removeInputKEY),

            withLatestFrom(this.store.select('input')),

            mergeMap((infoName) =>
                   
                     this.oConverterService.fnConvertNumberToAlphabet(infoName[1].sInputValue)
                     .pipe(
                        map(resp => updateResultValue({sResultValue:resp}))
                      )
           )

       )

    );

    // effectName$ = createEffect(() => {
    //     return this.actions$.pipe(
    //             ofType(addUserInputKEY),
    //             map(sInputKey=>console.log(sInputKey))
    //     );
    // });

    // login$ = createEffect(() =>
    // this.actions$.pipe(
    //   // Filters by Action Creator 'login'
    //   ofType(addUserInputKEY),
    //   tap(value=>console.log(value))
    //  );

}

