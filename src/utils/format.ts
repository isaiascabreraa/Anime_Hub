
export function formatText(text: string) {
  return text
    .replace(/_/g, ' ') // reemplaza todos los guiones bajos por espacios
    .split(' ')         // separa por espacios
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitaliza cada palabra
    .join(' ');         // une todo en un string
}
