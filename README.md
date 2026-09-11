# CONTROLSONLINE - sitio web

Sitio estático listo para hosting gratuito en GitHub Pages.

## Contacto configurado
- WhatsApp: 849-206-9562
- Correo: controlsonline@gmail.com
- Dominio: www.controlsonline.com.do

## Archivos
- `index.html`: página principal
- `styles.css`: diseño responsive
- `script.js`: menú y enlaces de redes sociales
- `CNAME`: dominio personalizado para GitHub Pages
- `assets/clinica-plc-hmi-vfd.png`: imagen promocional

## Configurar redes sociales
Abre `script.js` y pega las URLs exactas en `SOCIAL_URLS`.
Ejemplo:

```js
facebook: "https://www.facebook.com/TUUSUARIO",
instagram: "https://www.instagram.com/TUUSUARIO/"
```

## Publicar gratis en GitHub Pages
1. Crear una cuenta de GitHub si no tienes una.
2. Crear un repositorio nuevo, por ejemplo `controlsonline`.
3. Subir todos estos archivos a la raíz del repositorio.
4. En GitHub ir a Settings > Pages.
5. En Source elegir Deploy from a branch, rama `main`, carpeta `/root`.
6. En Custom domain escribir `www.controlsonline.com.do`.
7. En el proveedor DNS del dominio crear un registro CNAME para `www` apuntando al dominio de GitHub Pages que GitHub te indique (normalmente `TUUSUARIO.github.io`).
8. Cuando GitHub confirme el dominio, activar Enforce HTTPS.

### Importante
El hosting puede ser gratuito, pero el registro/renovación del dominio `.com.do` normalmente tiene costo.
