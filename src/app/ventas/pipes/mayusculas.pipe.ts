import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }
    trasnform( value: string, enMayuscula: boolean = true ) : string {
        return(enMayuscula) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}