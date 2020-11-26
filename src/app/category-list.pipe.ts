import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'categoryList'
})
export class CateroryListPipe implements PipeTransform {
    transform(mediaItems) {
    }
}
