import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor() { }

    canActivate(): boolean {
        // Validar que el usuario tenga un token.
        if (true) {
            return true;
        } else {
            return false;
        }
    }
}