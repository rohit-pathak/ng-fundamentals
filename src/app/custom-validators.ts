import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null;
    let problemWords = words.filter(w => control.value.includes(w));
    if (problemWords) return { 'restrictedWords': problemWords.join(', ') };
    return null;
  }
}