import './style.scss';
import { Observable, of } from 'rxjs';

const obs = new Observable();

console.log(obs);

const test = of(1, 2, 3);

test.subscribe(response => console.log(response));

console.log('Hello typescript webpack template');

// Testing prettier
const bracketSpacing = { foo: 45, bar: 'simple' };

console.log(bracketSpacing);

const arrayElementNewline = [
  'First element',
  'Second element',
  'third element',
  'Fourth element',
  'enforce line breaks between array elements'
];

arrayElementNewline.forEach(el => {
  // eslint-disable-next-line no-console
  console.log(el);
});
