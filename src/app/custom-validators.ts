import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  return (control: FormControl): { [key: string]: any } => {
    if (!words) return null;
    const problemWords = words.filter(w => control.value.includes(w));
    if (problemWords.length) return { 'restrictedWords': problemWords.join(', ') };
    return null;
  };
}
