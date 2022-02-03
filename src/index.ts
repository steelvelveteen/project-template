import './style.scss';

// eslint-disable-next-line no-console
console.log('Hello typescript webpack template');

// Testing prettier
const bracketSpacing = { foo: 45, bar: 'simple' };
// eslint-disable-next-line no-console
console.log(bracketSpacing);

const arrayElementNewline = [
  'First element',
  'Second element',
  'third element',
  'Fourth element',
  'enforce line breaks between array elements'
];

arrayElementNewline.forEach((el: string) => {
  // eslint-disable-next-line no-console
  console.log(el);
});
