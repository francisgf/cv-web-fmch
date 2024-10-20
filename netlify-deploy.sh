# Nombre o ID del sitio de Netlify (debe ser el identificador, no la URL completa)
NETLIFY_SITE_ID="2b5eee18-ee62-447d-bc01-58f63b0bafca"

# Comando para construir el proyecto Angular
npm run build

# Comando para desplegar el proyecto en Netlify
netlify deploy \
  --dir=dist/cv-web-fmch \
  --prod \
  --site $NETLIFY_SITE_ID

# Salida del comando
echo "Despliegue completado"

# Mantener la ventana abierta
read -p "Presiona Enter para salir..."
