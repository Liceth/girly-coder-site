# 🌸 Guía de Hojas Flotantes con Parallax

## 🎯 Componentes Disponibles

### 1. **FloatingLeaves** - Hojas Coloridas
Hojas circulares con gradientes de colores que responden al scroll y movimiento del cursor.

```jsx
import FloatingLeaves from './components/FloatingLeaves';

<FloatingLeaves />
```

**Características:**
- 12 hojas flotantes
- 4 colores diferentes (rosa, púrpura, amarillo, verde)
- Efecto parallax al hacer scroll
- Respuesta al movimiento del cursor
- Animación de flotación continua

### 2. **SakuraLeaves** - Pétalos de Sakura
Pétalos de sakura realistas con forma de pétalo y colores suaves.

```jsx
import SakuraLeaves from './components/SakuraLeaves';

<SakuraLeaves />
```

**Características:**
- 8 pétalos de sakura
- Forma SVG realista de pétalo
- Colores suaves de sakura
- Efecto parallax sutil
- Animación de respiración

## 🎨 Efectos Parallax

### Scroll Parallax
Las hojas se mueven a diferentes velocidades al hacer scroll:
- **FloatingLeaves**: Movimiento vertical de hasta -50px
- **SakuraLeaves**: Movimiento vertical de hasta -30px

### Cursor Parallax
Las hojas responden al movimiento del cursor:
- **FloatingLeaves**: Movimiento horizontal de ±30px
- **SakuraLeaves**: Movimiento horizontal de ±20px

### Animaciones de Flotación
- **Movimiento vertical**: Suben y bajan suavemente
- **Movimiento horizontal**: Se balancean ligeramente
- **Rotación**: Giran suavemente
- **Escala**: Se agrandan al hacer hover

## 🎪 Personalización

### Colores de FloatingLeaves:
```jsx
// Rosa
"radial-gradient(circle at 30% 30%, rgba(236, 72, 153, 0.3), rgba(244, 114, 182, 0.2))"

// Púrpura
"radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.2))"

// Amarillo
"radial-gradient(circle at 30% 70%, rgba(251, 191, 36, 0.3), rgba(249, 115, 22, 0.2))"

// Verde
"radial-gradient(circle at 70% 70%, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.2))"
```

### Colores de SakuraLeaves:
```jsx
const sakuraColors = [
  "rgba(255, 182, 193, 0.8)", // Light pink
  "rgba(255, 192, 203, 0.8)", // Pink
  "rgba(255, 20, 147, 0.6)",  // Deep pink
  "rgba(255, 105, 180, 0.7)", // Hot pink
];
```

## 🎭 Configuración de Animaciones

### Velocidades de Flotación:
- **FloatingLeaves**: 2-5 segundos por ciclo
- **SakuraLeaves**: 3-7 segundos por ciclo

### Intensidad de Parallax:
- **Scroll**: 0-50px de movimiento
- **Cursor**: 0-30px de movimiento
- **Suavizado**: Spring con stiffness: 50, damping: 20

### Efectos de Hover:
- **FloatingLeaves**: Escala 1.2x, rotación +45°
- **SakuraLeaves**: Escala 1.3x, rotación +90°

## 🚀 Optimización de Performance

### Técnicas Utilizadas:
1. **useMemo** para cálculos costosos
2. **useSpring** para suavizado de movimiento
3. **useTransform** para mapeo de valores
4. **pointer-events: none** para evitar interferencias
5. **z-index** apropiado para capas

### Responsive Design:
- Funciona en todos los tamaños de pantalla
- Ajusta la intensidad del parallax según el dispositivo
- Mantiene la fluidez en móviles

## 🎪 Ejemplos de Uso

### Implementación Básica:
```jsx
import FloatingLeaves from './components/FloatingLeaves';
import SakuraLeaves from './components/SakuraLeaves';

function MyPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingLeaves />
      <SakuraLeaves />
      {/* Tu contenido aquí */}
    </div>
  );
}
```

### Con Navegación:
```jsx
function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <FloatingLeaves />
      <SakuraLeaves />
      <div className="relative z-10">
        {/* Contenido del hero */}
      </div>
    </section>
  );
}
```

## 🎯 Mejores Prácticas

1. **No sobrecargar**: Usa máximo 20 hojas en total
2. **Z-index apropiado**: Mantén las hojas detrás del contenido
3. **Performance**: Monitorea el rendimiento en dispositivos lentos
4. **Accesibilidad**: Asegúrate de que no interfieran con la navegación
5. **Responsive**: Prueba en diferentes tamaños de pantalla

## 🌟 Efectos Mágicos

### Experiencia del Usuario:
- **Inmersión**: Las hojas crean un ambiente mágico
- **Interactividad**: Respuesta al cursor hace el sitio más vivo
- **Profundidad**: El parallax crea sensación de capas
- **Fluidez**: Las animaciones son suaves y naturales

### Combinación con Otros Efectos:
- **Typewriter**: Las hojas complementan el texto animado
- **Gradientes**: Los colores coinciden con el tema kawaii
- **Partículas**: Pueden coexistir sin conflictos
- **Scroll**: El parallax mejora la experiencia de navegación

¡Las hojas flotantes hacen que tu sitio se sienta vivo y mágico! 🌸✨ 