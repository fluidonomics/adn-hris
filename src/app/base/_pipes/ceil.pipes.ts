// round.pipe.ts
import {Pipe, PipeTransform} from "@angular/core";
 
/**
 *
 */
@Pipe({name: 'ceil'})
export class CeilPipe implements PipeTransform {
    /**
     *
     * @param value
     * @returns {number}
     */
    transform(value: number): number {
        return Math.ceil(value);
    }
}