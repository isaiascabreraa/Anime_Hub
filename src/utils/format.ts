
export function formatText(text: string) {
  return text
    .replace(/_/g, ' ') // Reemplaza todos los guiones bajos por espacios
    .split(' ')         // Separa por espacios
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
    .join(' ');         // Une todo en un string
}

export function formatEmptyNumbers(input: number){
  return (!input || input === 0 ? '-' : input);
}