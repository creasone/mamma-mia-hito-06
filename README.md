# Pizzería Mamma Mía — Hito 6

Aplicación React + Vite con navegación y carrito global administrado con Context API.

## Funcionalidades

- Catálogo y detalle desde la API académica, con respaldo local.
- `CartContext` como única fuente de verdad del carrito.
- Agregar, aumentar, disminuir y eliminar pizzas.
- Total sincronizado automáticamente entre Navbar y Cart.
- Rutas compatibles con desarrollo local y GitHub Pages.

## Ejecutar

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Compilar con `pnpm build`. La API usa `VITE_API_URL` o `http://localhost:5000`.
