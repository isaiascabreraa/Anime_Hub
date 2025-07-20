
export function formatText(text: string) {

  return text ? text
  .replace(/_/g, ' ')
  .split(' ').map(w => w[0]
    .toUpperCase() + w.slice(1))
    .join(' ') : undefined;
}

export function formatEmptyNumbers(input: number){
  return (!input || input === 0 ? '-' : input);
}

export function formatEmptyString(input: string){
  return (!input ? '-' : input);
}