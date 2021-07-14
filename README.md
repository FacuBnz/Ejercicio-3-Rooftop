# Ejercicio 3 de Rooftop Academy

## Consigna-1:
### Crear un middleware de seguridad

Solo pueden ingresar usuarios que al hacer la peticion tengan en el request un encabezado con el nombre "Authorization" y el valor exacto tiene que decir "Bearer 65a83e72c7e990a3e6565ae8b7cc071c"

En cada peticion que ingresa se debe validar que el encabezado con ese nombre contenga ese valor

En caso de que suceda, se debe permitir avanzar. Caso contrario responder con un codigo de estado.

---

## Consigna-2:
### Crear un middleware de log:

Cada peticion que ingrese debe guardarse en un archivo de texto plano, un log.

El nombre del archivo debe ser la fecha actual en formato yyyy-mm-dd y con extension ".log"

Por ejemplo, las solicitudes del dia de hoy se guardaran en el archivo 2021-07-13.log

Por cada peticion el log debe registrar: la ip, la fecha y hora, el metodo y la url separados por coma

Por ejemplo: 127.0.0.1, 2021-07-13 17:28:03, GET, /ruta

---

## Ejecucion de la aplicación

1. Clonar el repositorio
```
git clone https://github.com/FacuBnz/Ejercicio-3-Rooftop.git
```

2. Instalar las dependencias
```
npm install
```

3. Crear el archivo .env en la ruta raiz del proyecto a partir del archivo de ejemplo

4. En la termnial, posicionada en la ruta raiz de nuestro proyecto ejecutar
 ```
 npm run dev
 ```

