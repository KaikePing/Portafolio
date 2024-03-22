// Función para resaltar texto específico
export const highlightText = (text) => {
    if (text) {
        // Reemplaza las palabras que deseas resaltar con <span> y una clase CSS
        text = text.replace(/\*(.*?)\*/g, '<span class="highlight">$1</span>')
    }
    return text
}