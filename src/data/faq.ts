/** Las 9 preguntas del acordeón. El índice es el id usado por el estado `faq`. Columna izquierda: 0, 8, 1, 2 · derecha: 3–7. */
export interface FaqItem { q: string; a: string }

export const FAQ: FaqItem[] = [
  {"q": "¿Legends es gratis de verdad?", "a": "Sí. Descargas, conectas Steam y entrenas sin pagar. No hay ventajas de pago: no nos gusta el Pay to Win, el progreso se gana entrenando."},
  {"q": "¿Es seguro para mi cuenta de Steam?", "a": "Te conectas con Steam OpenID, así que nunca te pedimos tu contraseña. Legends no modifica ni lee el cliente del juego: analiza los archivos de replay .dem que Dota 2 guarda en tu PC. No es un cheat ni un overlay."},
  {"q": "¿Me baja los FPS o me sube el ping?", "a": "No. El análisis corre fuera de la partida, sobre el replay, así que no compite con el juego por recursos ni por red. Está optimizado para convivir con tus juegos."},
  {"q": "¿Qué hacen con mis datos?", "a": "No capturamos tus datos. Tus replays se analizan para darte tu diagnóstico y tu ruta; nada más."},
  {"q": "¿Cuánto tarda en darme resultados?", "a": "Minutos. Eliges hasta 5 replays; Legends extrae +50 métricas, detecta tu rol, compara con tu rango y te entrega tu diagnóstico con la ruta de la semana."},
  {"q": "¿Para qué juegos sirve?", "a": "Hoy, Dota 2. League of Legends está en desarrollo; Fortnite y Deadlock vienen después."},
  {"q": "¿Y si cambio de rol o de héroe?", "a": "Legends detecta tu posición por lane en cada replay y recalcula los 3 KPIs y sus pesos según el rol. Y puedes recalibrar cuando quieras desde tu perfil."},
  {"q": "¿En qué sistema funciona?", "a": "Por ahora, Windows. Legends escanea tu carpeta de replays de Dota 2 automáticamente o cargas los .dem a mano."},
  {"q": "¿Cómo analizan mis replays?", "a": "Dota 2, como otros juegos, te deja ver la repetición de tus partidas. No es un video grabado: el juego reconstruye la sesión a partir de un archivo, el replay, que en Dota 2 tiene extensión .dem. Cuando descargas las repeticiones de tus partidas, Legends reconoce los replays nuevos en tu carpeta y tú eliges cuál analizar. De ese archivo salen las +50 métricas, tu rol y tu diagnóstico."},
];

export const FAQ_LEFT = [0, 8, 1, 2];
export const FAQ_RIGHT = [3, 4, 5, 6, 7];
