import { Pipe ,PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(param: boolean): string {
        return param ? 'vuela' : 'no vuela'
    }
}