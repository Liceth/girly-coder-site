# ⌨️ Guía de Efectos Typewriter

## 🎯 Componentes Disponibles

### 1. **TypewriterText** - Efecto Simple
Para texto que se escribe una sola vez.

```jsx
import TypewriterText from './components/TypewriterText';

<TypewriterText 
  text="Hola! Soy Liceth 🌸"
  speed={120}        // Velocidad de escritura (ms)
  delay={500}        // Retraso antes de empezar (ms)
  cursorColor="#ec4899"  // Color del cursor
/>
```

### 2. **AdvancedTypewriter** - Efecto Avanzado
Para múltiples textos que se escriben y borran en loop.

```jsx
import AdvancedTypewriter from './components/AdvancedTypewriter';

const texts = [
  "Hola! Soy Liceth 🌸",
  "Frontend Developer 💻",
  "UI Engineer ✨",
];

<AdvancedTypewriter 
  texts={texts}
  speed={120}        // Velocidad de escritura (ms)
  delay={500}        // Retraso inicial (ms)
  pauseTime={2500}   // Tiempo de pausa entre textos (ms)
  cursorColor="#ec4899"  // Color del cursor
  loop={true}        // Si debe repetir infinitamente
/>
```

## 🎨 Personalización

### Velocidades Recomendadas:
- **Rápido**: 50-80ms
- **Normal**: 100-150ms
- **Lento**: 150-200ms
- **Muy lento**: 200-300ms

### Colores de Cursor:
```jsx
// Rosa kawaii
cursorColor="#ec4899"

// Púrpura
cursorColor="#a855f7"

// Amarillo
cursorColor="#fbbf24"

// Verde
cursorColor="#10b981"
```

### Tiempos de Pausa:
- **Corto**: 1000-1500ms
- **Normal**: 2000-3000ms
- **Largo**: 3000-5000ms

## 🎵 Efectos de Sonido (Opcional)

Para añadir sonidos de typewriter:

```jsx
import TypewriterSound from './components/TypewriterSound';

// En tu componente
const [isTyping, setIsTyping] = useState(false);

<TypewriterSound 
  isTyping={isTyping} 
  soundEnabled={true} 
/>
```

## 🎪 Ejemplos de Uso

### Hero Section con Múltiples Textos:
```jsx
const heroTexts = [
  "¡Hola! Soy Liceth 🌸",
  "Frontend Developer 💻",
  "UI Engineer ✨",
  "Kawaii Enthusiast 🎀"
];

<div className="text-5xl font-playfair font-bold">
  <AdvancedTypewriter 
    texts={heroTexts}
    speed={120}
    delay={500}
    pauseTime={2500}
    loop={true}
  />
</div>
```

### Texto Simple con Efecto:
```jsx
<div className="text-2xl">
  <TypewriterText 
    text="Bienvenidos a mi portfolio ✨"
    speed={100}
    delay={1000}
  />
</div>
```

### Texto con Sonido:
```jsx
const [isTyping, setIsTyping] = useState(false);

<div>
  <TypewriterText 
    text="Texto con sonido 🎵"
    speed={80}
    onTypingStart={() => setIsTyping(true)}
    onTypingEnd={() => setIsTyping(false)}
  />
  <TypewriterSound isTyping={isTyping} soundEnabled={true} />
</div>
```

## 🎯 Mejores Prácticas

1. **Velocidad Consistente**: Mantén la misma velocidad en todo el sitio
2. **Delays Escalonados**: Usa delays diferentes para crear flujo visual
3. **Texto Significativo**: Solo anima texto importante, no todo
4. **Responsive**: Asegúrate de que funcione en móviles
5. **Accesibilidad**: Considera usuarios que prefieren menos animación

## 🚀 Próximas Mejoras

- [ ] Efectos de sonido más realistas
- [ ] Diferentes estilos de cursor
- [ ] Efectos de glitch y errores tipográficos
- [ ] Sincronización con música de fondo
- [ ] Modo "modo oscuro" para el cursor

¡Disfruta creando experiencias mágicas con el typewriter! ✨⌨️ 