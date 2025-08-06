# 🚀 Backend_Prisma

API REST construida con Express.js y Prisma ORM para gestionar productos y categorías.

## 📁 Estructura del Proyecto

```
Backend_Prisma/
├── prisma/
│   ├── migrations/         # Migraciones de la base de datos
│   └── schema.prisma      # Esquema de Prisma
├── src/
│   ├── lib/
│   │   └── db.js         # Configuración de Prisma
│   ├── routes/
│   │   ├── products.routes.js    # Rutas de productos
│   │   └── categories.routes.js  # Rutas de categorías
│   └── index.js          # Entrada principal
├── .env                  # Variables de entorno
├── .env.example         # Ejemplo de variables de entorno
└── package.json
```

## ⚡ Prerequisitos

- Node.js >= 18.18
- PostgreSQL
- pnpm

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone <url-repositorio>
cd Backend_Prisma
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Configurar variables de entorno:
- Copia el archivo `.env.example` a `.env`
- Modifica la URL de conexión a la base de datos:
```
DATABASE_URL=postgresql://<usuario>:<contraseña>@<hostname>/<nombre-db>
```

4. Ejecutar migraciones de la base de datos:
```bash
pnpm prisma migrate dev
```

## 🚀 Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
pnpm run dev
```

El servidor se ejecutará en `http://localhost:3000`

## 🔗 API Endpoints

### 📦 Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener un producto por ID
- `POST /api/products` - Crear nuevo producto
- `PUT /api/products/:id` - Actualizar un producto
- `DELETE /api/products/:id` - Eliminar un producto

### 🏷️ Categorías
- `GET /api/categories` - Obtener todas las categorías
- `GET /api/categories/:id` - Obtener una categoría por ID
- `POST /api/categories` - Crear nueva categoría
- `PUT /api/categories/:id` - Actualizar una categoría
- `DELETE /api/categories/:id` - Eliminar una categoría

## 💻 Tecnologías Utilizadas

- 🛠️ Express.js - Framework web
- 🗃️ Prisma - ORM
- 🐘 PostgreSQL - Base de datos
- 📝 Morgan - Logger de solicitudes HTTP