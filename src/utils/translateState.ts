export function translateState(state: string): string {
    const translations: Record<string, string> = {
      draft: "Borrador",
      sale: "Venta Confirmada",
      done: "Completado",
      cancel: "Cancelado",
    };
    return translations[state] || "Desconocido";
  }
  