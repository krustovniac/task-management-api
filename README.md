# Task Management API (NestJS)

API REST para gestión de **usuarios** y **tareas**, desarrollada con **NestJS + TypeScript**, como solución al desafío técnico propuesto.

---

## 📌 Descripción General

Esta aplicación permite:
- Crear y listar usuarios
- Crear, asignar, listar, actualizar y eliminar tareas
- Validar datos de entrada usando DTOs
- Manejar errores HTTP correctamente
- Mantener una arquitectura modular y limpia

La API utiliza **almacenamiento en memoria** (arrays) para simplificar el setup y enfocarse en arquitectura, validaciones y buenas prácticas.

---

## 🧱 Arquitectura

El proyecto sigue la arquitectura estándar de NestJS:

- **Modules**: agrupan funcionalidades (UsersModule, TasksModule)
- **Controllers**: manejan las rutas HTTP
- **Services**: contienen la lógica de negocio
- **DTOs**: validan y tipan los datos de entrada

Estructura principal:

```
src/
 ├─ users/
 │   ├─ dto/
 │   │   └─ create-user.dto.ts
 │   ├─ user.interface.ts
 │   ├─ users.controller.ts
 │   ├─ users.service.ts
 │   └─ users.module.ts
 ├─ tasks/
 │   ├─ dto/
 │   │   ├─ create-task.dto.ts
 │   │   └─ update-task-status.dto.ts
 │   ├─ enums/
 │   │   ├─ task-priority.enum.ts
 │   │   └─ task-status.enum.ts
 │   ├─ task.interface.ts
 │   ├─ tasks.controller.ts
 │   ├─ tasks.service.ts
 │   └─ tasks.module.ts
 ├─ app.module.ts
 └─ main.ts
```

---

## ⚙️ Requisitos

- Node.js (versión LTS)
- npm

---

## 🚀 Instalación

Clonar el repositorio:

```bash
git clone https://github.com/krustovniac/task-management-api.git
cd task-manager-api
```

Instalar dependencias:

```bash
npm install
```

---

## ▶️ Ejecución

Modo desarrollo:

```bash
npm run start:dev
```

La API estará disponible en:

```
http://localhost:3000
```

---

## 🔌 Endpoints

### 👤 Usuarios

**Crear usuario**
```
POST /users
```
Body:
```json
{
  "name": "Juan",
  "email": "juan@mail.com",
  "role": "user"
}
```

**Listar usuarios**
```
GET /users
```

**Obtener usuario por ID**
```
GET /users/:id
```

---

### 📋 Tareas

**Crear tarea**
```
POST /tasks
```
Body:
```json
{
  "title": "Implementar API",
  "description": "Crear endpoints principales",
  "status": "pending",
  "priority": "high",
  "createdBy": "USER_ID",
  "dueDate": "2026-02-01"
}
```

**Listar tareas (con filtros)**
```
GET /tasks?status=pending&assignedTo=USER_ID
```

**Actualizar estado**
```
PATCH /tasks/:id/status
```
Body:
```json
{
  "status": "completed"
}
```

**Asignar tarea a usuario**
```
PATCH /tasks/:id/assign
```
Body:
```json
{
  "userId": "USER_ID"
}
```

**Eliminar tarea**
```
DELETE /tasks/:id
```

---

## ✅ Validaciones

- DTOs con `class-validator`
- Emails únicos
- Enums validados (status, priority, role)
- Fechas válidas

---

## ❗ Manejo de Errores

- 400 → Bad Request (datos inválidos)
- 404 → Recurso no encontrado
- 500 → Error interno (no expuesto)

---

## 📝 Notas

- Los datos se almacenan en memoria
- Al reiniciar la app, los datos se pierden
- El enfoque está en arquitectura y buenas prácticas

---

## 👤 Autor

Desarrollado como solución a desafío técnico backend con NestJS por Alan Ugarte

