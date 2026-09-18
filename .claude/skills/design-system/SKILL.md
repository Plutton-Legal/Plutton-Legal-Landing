---
name: design-system
description: Sistema de diseño de Pluton Legal — paleta de colores (design tokens), Tailwind CSS y tipografía. Úsalo siempre que crees o modifiques cualquier componente visual, página, estilo, o elemento de interfaz.
---

# Tailwind CSS

Tailwind CSS es el sistema de estilos principal.

- Usa Tailwind de forma consistente.
- Evita archivos CSS custom grandes cuando el mismo resultado se puede lograr con Tailwind.
- No disperses valores hex crudos por los componentes.
- Usa los tokens semánticos del proyecto (ver abajo).
- No introduzcas colores de Tailwind al azar.
- No uses valores arbitrarios solo por conveniencia.
- Los valores arbitrarios son aceptables cuando son necesarios para reproducir con precisión el diseño aprobado.
- Prioriza la fidelidad visual sin volver el código en strings de clases ilegibles.`

# Design Tokens

La paleta aprobada del proyecto es:

```
navy: #003D64
navy-deep: #002740
tint: #F2F7FA
gold: #E8A33D
ink: #0F1B24
muted: #5A6B78
line: #DCE6ED
white: #FFFFFF
```

**Uso de cada token:**

- **navy** → color de marca primario, headings, navegación, elementos de marca primarios
- **navy-deep** → secciones oscuras, fondos oscuros, fondo de la sección de formulario
- **tint** → fondos de sección clara alternos
- **gold** → botones CTA ÚNICAMENTE, énfasis de acción primaria
- **ink** → texto de cuerpo primario
- **muted** → texto secundario, captions, placeholders
- **line** → bordes, divisores
- **white** → fondos base, texto sobre fondos oscuros donde sea apropiado

**IMPORTANTE:**
- Gold está reservado exclusivamente para CTAs. No lo uses como color decorativo genérico.
- No introduzcas colores de marca adicionales sin aprobación explícita.

# Tipografía

- Usa una fuente sans-serif.
- La familia tipográfica exacta debe seguir el diseño aprobado.
- No reemplaces arbitrariamente la fuente aprobada por otra solo porque es popular o conveniente.
- La tipografía debe respetar la jerarquía actual: familia, peso, tamaño, line-height, letter-spacing, escalado responsive.
- No inventes valores tipográficos cuando la implementación actual ya los define.

# Cuándo usar esta skill

Actívala automáticamente cada vez que la tarea implique: crear un componente nuevo, modificar estilos existentes, agregar una sección al landing, o cualquier decisión de color/tipografía/espaciado.
