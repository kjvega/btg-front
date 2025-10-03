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
AWSTemplateFormatVersion: '2010-09-09'
Description: Infraestructura para el despliegue del Front-End Angular de BTG Fondos

Resources:
  FrontendS3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: btg-fondos-front
      WebsiteConfiguration:
        IndexDocument: index.html
        ErrorDocument: index.html
      AccessControl: PublicRead

  FrontendBucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref FrontendS3Bucket
      PolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal: "*"
            Action: "s3:GetObject"
            Resource: !Sub "${FrontendS3Bucket.Arn}/*"

  CloudFrontDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Enabled: true
        DefaultRootObject: index.html
        Origins:
          - Id: FrontOrigin
            DomainName: !GetAtt FrontendS3Bucket.RegionalDomainName
            S3OriginConfig: {}
        DefaultCacheBehavior:
          TargetOriginId: FrontOrigin
          ViewerProtocolPolicy: redirect-to-https
          AllowedMethods: ["GET", "HEAD"]
          CachedMethods: ["GET", "HEAD"]
          ForwardedValues:
            QueryString: false
        ViewerCertificate:
          CloudFrontDefaultCertificate: true
        PriceClass: PriceClass_100

Outputs:
  WebsiteURL:
    Description: URL del sitio estático en S3
    Value: !GetAtt FrontendS3Bucket.WebsiteURL

  CloudFrontURL:
    Description: URL distribuida de CloudFront
    Value: !Sub "https://${CloudFrontDistribution.DomainName}"



Sube todo el contenido de la carpeta dist/btg-fondos-front/browser/
(incluye index.html, main.js, styles.css, polyfills.js y la carpeta assets/).

Probar el frontend
AWS te dará una URL como:

http://btg-fondos-front.s3-website-us-east-2.amazonaws.com
