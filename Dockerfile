
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY imagens/ /usr/share/nginx/html/imagens/

EXPOSE 80
