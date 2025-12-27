# 🧮 Favorites Products List

Aplicación web desarrollada con **React.js** (frontend) y **Express** (backend), que implementa un sistema de registro e inicio de sesión de usuarios. Una vez autenticado, el usuario puede visualizar el listado de productos, marcarlos como favoritos y puntuar productos desde el frontend.
La creación de productos se realiza exclusivamente a través de la API, utilizando herramientas como Postman.

---

## ⚙️ Tecnologías utilizadas

**Frontend:**
- ⚛️ React.js
- ⚡ Vite.js
- 💅 Styled Components / Material UI
- 🧩 Formik (para formularios)

**Backend:**
- 🧪 Node.js
- 🚀 Express.js
- 🧪 Mongoose (para MongoDB)
- 🔄 Cors
- 🟢 Nodemon

---

## 🚀 Instalación y ejecución

### 1️⃣ Clona el repositorio
```bash
git clone https://github.com/Yumawis/favorite-products-list.git
cd favorite-products-list
```

### 2️⃣ Instala las dependencias
Instala las del **frontend** y **backend** por separado:
```bash
cd frontend
npm install

cd ../backend
npm install
```

### 3️⃣ Ejecuta el backend
```bash
npm run dev
```
Esto levantará el servidor Express en el puerto configurado (por defecto 4000).

### 4️⃣ Ejecuta el frontend
```bash
cd ../frontend
npm run dev
```
Esto iniciará la aplicación React.js (por defecto en `http://localhost:5173`).

---

## 🧩 Ejemplo de uso

1. Accede a la página web y regístrate o inicia sesión 
2. Una vez autenticado, visualiza el listado de productos.
3. Marca productos como favoritos según tu preferencia, solo productos disponibles se podrán marcar.  
4. Puntúa los productos para expresar tu valoración. 

---
## 🧪 Creación de productos desde la API (Postman)

1. Realiza una petición para crear productos mediante los endpoints de la API.
2. Ingresa los datos necesarios para publicar el producto.
3. Inicia sesión desde el frontend para visualizar los productos creados.  
4. Interactúa con los productos agregándolos a favoritos o puntuándolos.

---

## 🧑‍💻 Autor

**Yury Martinez**  
Fullstack & UI Designer  
📍 Colombia  
💼 [GitHub](https://github.com/Yumawis) 
