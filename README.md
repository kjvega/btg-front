# BTG Fondos - Frontend

Este es el frontend del proyecto **BTG Fondos**, desarrollado con **Angular 20**.  
Se conecta con el backend en **Spring Boot** para la gestión de clientes, fondos y transacciones.

## 🚀 Tecnologías utilizadas
- **Angular 20**
- **TypeScript**
- **Angular Material**
- **RxJS**
- **SCSS** para estilos

## 📂 Estructura general
El proyecto sigue una organización modular:
- `modules/client`: Componentes y vistas relacionadas con clientes.
- `modules/fund`: Componentes para suscripción, cancelación y visualización de fondos.
- `core/services`: Servicios compartidos (ej. alertas, manejo de errores).
- `services`: Servicios para consumir la API REST del backend.
- `models`: Interfaces y modelos de dominio (Client, Fund, Transaction, etc.).

## 🔧 Configuración
El frontend consume el backend expuesto en `http://localhost:8081` por defecto.  
La configuración del endpoint se encuentra en los servicios de Angular (ej. `fund-service.ts`, `client-service.ts`).

## ▶️ Ejecución
1. Clonar el repositorio
   ```bash
   git clone https://github.com/tu-usuario/btg-fondos-front.git
