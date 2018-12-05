import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable()
export class CustomValidatorsService {

    constructor() { }

    public notEmpty(control: AbstractControl) {
        let error = null;
        const regexp = /^$|\s+/;
        if (control.value !== undefined && regexp.test(control.value)) {
            error = {
                'notempty': {
                    valid: false
                }
            }
        }
        return error;
    }

    public onlyNumber(control: AbstractControl) {
        let error = null;
        const regexp = /^[0-9]*$/;
        if (control.value !== undefined && !regexp.test(control.value) && isNaN(control.value)) {
            error = {
                'onlynumber': {
                    valid: false
                }
            }
        }
        return error;
    }

    public onlyNumberPositive(control: AbstractControl) {
        let error = null;
        const regexp = /^[0-9]*$/;
        if (control.value !== undefined && !regexp.test(control.value) && (isNaN(control.value) || control.value <= 0)) {
            error = {
                'onlynumberpositive': {
                    valid: false
                }
            }
        }
        return error;
    }
}