# Dashboard Flex

![Vista del dashboard](https://cdn.discordapp.com/attachments/1211120524961386607/1483161568538660954/image.png?ex=69b99559&is=69b843d9&hm=92181296c6fc671fc78322cc05a29fb01906c0e8c34918ef9afeb95461d75520&)



Proyecto frontend construido con Next.js para replicar un dashboard administrativo moderno basado en una referencia visual.

## Tecnologías

- Next.js (App Router)
- React
- TypeScript
- Recharts (gráficas)
- Lucide React (iconografía)
- Tailwind CSS v4 (base de estilos globales)

## Construcción del proyecto

1. Se creó la base del proyecto con Next.js y TypeScript.
2. Se diseñó la estructura principal del layout en `app/page.tsx`:
	- Sidebar izquierda
	- Header superior
	- Tarjetas de métricas
	- Sección de sesiones con línea temporal
	- Sección de conversión con gauge semicircular
3. Se ajustaron estilos para acercar el diseño al mockup:
	- Jerarquía visual (tipografías, pesos y colores)
	- Espaciados y radios
	- Estados positivos/negativos en verde y rojo
4. Se validó el código con ESLint en cada iteración.

## Estructura relevante

- `app/page.tsx`: UI principal del dashboard
- `app/globals.css`: variables y estilos globales

## Scripts

- `npm run dev`: entorno de desarrollo
- `npm run build`: build de producción
- `npm run start`: correr build
- `npm run lint`: validación de estilo y calidad

## Ejecutar local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000` en el navegador.
