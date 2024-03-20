import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext'
})
export class TermtextPipe implements PipeTransform {

  transform(title:string,limit:number): string {
    return title.split(" ").slice(0,limit).join(" ");
  }

}
