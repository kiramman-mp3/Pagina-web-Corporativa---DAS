# BACKEND PARA EL BLOG DE *DAS*
Se necesita un blog basico para postear los proyectos en el portafolio de DAS

## Ejecucion
Se puede ejecutar el backend localmente o usando Docker
### Local
1. Clonar el repositorio
1. Crear un archivo .env con las variables de entorno
1. Ejecutar el comando: `npm install .`
1. Ejecutar el comando: `npx prisma migrate`
1. Ejecutar el comando: `npx prisma generate`
1. Ejecutar el comando: `npm run dev`
### Docker
1. Setear variables de entorno:
```python
DATABASE_URL="postgresql://postgres:prisma@localhost:5432/postgres?schema=public" # CONEXION DE EJEMPLO NO REAL
API_KEY="SkibidiSigmaPomniDigitalFortiniteChambaFreeGigaChad" # USA OPENSSL para generar la clave
```
1. Ejecutar el comando:
```python
docker run --rm -p 4000:4000 -e PORT=4000 -e DATABASE_URL="$DATABASE_URL" -e API_KEY="$API_KEY" --name das-blog-backend aparedeslozada/das-blog-backend:5
```