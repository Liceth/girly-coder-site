# 🎨 Guía de Fuentes y Animaciones

## 📝 Fuentes Integradas

### Google Fonts Añadidas:
- **Playfair Display**: Fuente elegante para títulos y encabezados
- **Poppins**: Fuente moderna para texto del cuerpo y elementos de UI

### Cómo Usar las Fuentes:

#### En CSS:
```css
/* Usando clases de utilidad */
.titulo-elegante {
  font-family: var(--font-playfair);
}

.texto-moderno {
  font-family: var(--font-poppins);
}
```

#### En Tailwind CSS:
```jsx
<h1 className="font-playfair text-4xl font-bold">
  Título Elegante
</h1>

<p className="font-poppins text-lg">
  Texto moderno y legible
</p>
```

#### En CSS Inline:
```jsx
<h2 style={{ fontFamily: 'var(--font-playfair)' }}>
  Subtítulo
</h2>
```

## 🎭 Componentes de Animación

### 1. AnimatedSection
Componente para animar secciones completas con entrada suave.

```jsx
import AnimatedSection from './components/AnimatedSection';

<AnimatedSection 
  delay={0.2} 
  duration={0.8} 
  direction="up"
>
  <div>Tu contenido aquí</div>
</AnimatedSection>
```

**Props:**
- `delay`: Retraso antes de la animación (en segundos)
- `duration`: Duración de la animación
- `direction`: Dirección de entrada ("up", "down", "left", "right")
- `once`: Si la animación debe ejecutarse solo una vez

### 2. AnimatedText
Componente para animar texto con diferentes efectos.

```jsx
import AnimatedText from './components/AnimatedText';

<AnimatedText 
  type="fade" 
  delay={0.3}
  className="text-2xl font-playfair"
>
  Texto animado
</AnimatedText>
```

**Tipos de animación:**
- `fade`: Aparece gradualmente
- `slide`: Se desliza desde la izquierda
- `scale`: Aparece con escala
- `typing`: Efecto de escritura

### 3. AnimatedButton
Botón con animaciones de hover y click.

```jsx
import AnimatedButton from './components/AnimatedButton';

<AnimatedButton 
  variant="primary" 
  size="md"
  onClick={() => console.log('Click!')}
>
  Botón Animado
</AnimatedButton>
```

**Variantes:**
- `primary`: Botón principal (rosa)
- `secondary`: Botón secundario (púrpura)
- `outline`: Botón con borde

**Tamaños:**
- `sm`: Pequeño
- `md`: Mediano
- `lg`: Grande

## 🎪 Configuraciones de Animación

### Usando las utilidades predefinidas:

```jsx
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, springTransition } from './utils/animations';

// Animación simple
<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
>
  Contenido
</motion.div>

// Contenedor con animación escalonada
<motion.div
  variants={staggerContainer}
  initial="initial"
  animate="animate"
>
  <motion.div variants={fadeInUp}>Item 1</motion.div>
  <motion.div variants={fadeInUp}>Item 2</motion.div>
  <motion.div variants={fadeInUp}>Item 3</motion.div>
</motion.div>
```

## 🎨 Ejemplos de Uso

### Hero Section con Animaciones:
```jsx
import AnimatedSection from './components/AnimatedSection';
import AnimatedText from './components/AnimatedText';
import AnimatedButton from './components/AnimatedButton';

<section className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <AnimatedText 
      type="fade" 
      delay={0.2}
      className="text-6xl font-playfair font-bold mb-4"
    >
      Liceth Ovalles
    </AnimatedText>
    
    <AnimatedText 
      type="slide" 
      delay={0.4}
      className="text-xl font-poppins mb-8"
    >
      Frontend Developer & Kawaii Enthusiast
    </AnimatedText>
    
    <AnimatedSection delay={0.6}>
      <AnimatedButton variant="primary" size="lg">
        Ver mi trabajo
      </AnimatedButton>
    </AnimatedSection>
  </div>
</section>
```

### Lista de Skills con Animación Escalonada:
```jsx
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from './utils/animations';

<motion.div
  variants={staggerContainer}
  initial="initial"
  animate="animate"
  className="grid grid-cols-2 md:grid-cols-3 gap-4"
>
  {skills.map((skill, index) => (
    <motion.div
      key={skill.name}
      variants={fadeInUp}
      className="p-4 bg-white rounded-lg shadow-md"
    >
      <h3 className="font-playfair font-semibold">{skill.name}</h3>
      <p className="font-poppins text-sm">{skill.description}</p>
    </motion.div>
  ))}
</motion.div>
```

## 🎯 Mejores Prácticas

1. **Usa Playfair Display para títulos** - Da un toque elegante y profesional
2. **Usa Poppins para texto del cuerpo** - Excelente legibilidad
3. **Combina animaciones con propósito** - No sobrecargues la página
4. **Usa delays escalonados** - Crea un flujo visual natural
5. **Mantén las animaciones suaves** - Usa las transiciones predefinidas
