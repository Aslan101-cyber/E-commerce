import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore',
  standalone: false
})
export class ReadMorePipe implements PipeTransform {

  transform(proTit:string): string {
    return proTit.split(/ /).slice(0,3).join(" ");
  }

}
