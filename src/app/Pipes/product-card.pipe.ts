import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productCard',
  standalone: true
})
export class ProductCardPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/(.{4})/g, "$1- ");
  }

}
