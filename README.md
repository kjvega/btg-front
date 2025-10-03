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



📌 Frontend (Angular) - Guía de Despliegue
Requisitos

Angular CLI instalado en tu máquina local.

Bucket en AWS S3 habilitado para sitio web estático.

Pasos

Construir el proyecto Angular

ng build --configuration production


Esto genera la carpeta:

dist/btg-fondos-front/browser


Subir los archivos a S3

Entra a la consola de AWS S3 y crea un bucket (ej: btg-fondos-front).

Habilita alojamiento de sitios web estáticos.

Documento de índice: index.html

Documento de error: index.html

Configura permisos públicos en el bucket con la política:

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::btg-fondos-front/*"
    }
  ]
}


Sube todo el contenido de la carpeta dist/btg-fondos-front/browser/
(incluye index.html, main.js, styles.css, polyfills.js y la carpeta assets/).

Probar el frontend
AWS te dará una URL como:

http://btg-fondos-front.s3-website-us-east-2.amazonaws.com
