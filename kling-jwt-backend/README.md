# kling-jwt-backend

Backend sencillo para exponer un endpoint `/jwt` que devuelve un JWT válido para la API de Kling.

## Variables de entorno

- `KLING_ACCESS_KEY`
- `KLING_SECRET_KEY`

Estas claves deben configurarse **en Railway** en el panel de variables del servicio.

## Uso

Al hacer GET a `/jwt` devuelve:
```json
{ "token": "..." }
```

Utilízalo en tu frontend React para autenticarte con la API de Kling.

## Instrucciones para clonar y subir

```bash
git clone https://github.com/sanandrogas/kling-jwt-backend.git
cd kling-jwt-backend
# (O modifica con tu propio repo)
```

* Sube este folder a tu propio repo de GitHub (puedes cambiar el nombre).
* En Railway: “Deploy from GitHub Repo”, selecciona tu repo.
* Pon las claves `KLING_ACCESS_KEY` y `KLING_SECRET_KEY` como variables de entorno en Railway.
* Cuando despliegue, prueba tu endpoint:
  `https://TU-APP.up.railway.app/jwt`