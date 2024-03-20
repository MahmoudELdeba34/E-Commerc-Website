import { Pipe, PipeTransform } from '@angular/core';
import { ProductPipeSearch } from './shared/guards/interface/product-pipe-search';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products:ProductPipeSearch[],term:string): ProductPipeSearch[] {
    return products.filter((Product)=>Product.title.toLowerCase().includes(term.toLowerCase()));
  }
}
