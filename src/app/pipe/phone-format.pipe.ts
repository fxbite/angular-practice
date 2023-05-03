import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string, prefix: number = 84): string {
    const removedString = value.replace(/-/g, '')
    const formatString = `(+${prefix}) ${removedString}`
    return formatString
  }
}
