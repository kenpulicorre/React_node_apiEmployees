<p align='left'>
    <img src='https://raw.githubusercontent.com/kenpulicorre/countries_proyect/main/client/src/images/bandera.gif' </img>
</p>

# [ EMPLOYEE Project ](https://kennethpcapp2.herokuapp.com/)

## Objetivos del Proyecto

- Build an App with React, Redux, Node , Express, y Sequelize Postgresql, Bootstrap , Tailwind CSS.
- Using the best skills to build a website
- Fullstack node and react

## Enunciado:

➢BACK

- A landingPage and calling from an API REST,

```
* libs & frameworks:
* NodeJs https://nodejs.org/en/
* ExpressJs https://expressjs.com/
* Mocha https://mochajs.org/
* Chai https://www.chaijs.com/
* SuperTest https://github.com/visionmedia/supertest#readme

```

➢FRONT

- An App has to have a button access to th enext api:

# [ Api](https://jsonplaceholder.typicode.com/users)

```
- libs & frameworks:
- NodeJs https://nodejs.org/en/
- Webpack https://webpack.js.org/
- Bootstrap https://getbootstrap.com/
- React https://reactjs.org/`
```

specs
Usando React + Bootstrap/Material UI se debe crear una pantalla similar a la que se muestra en el siguiente enlace:

# [ EMPLOYEE Project ](https://kennethpcapp2.herokuapp.com/)

**Opcional**

-Redux, Backend node, was carried out into his builing

## Comenzando

1.  Forkear el repositorio para tener una copia del mismo en sus cuentas
2.  Clonar el repositorio en sus computadoras para comenzar a trabajar

Tendrán un `boilerplate` con la estructura general tanto del servidor como de cliente.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

**Importante-2:** debes crear un archivo **.env** en la carpeta api,
y puede llenar como este ejemplo :

     DB_USER=postgres
     DB_PASSWORD=12345
     DB_HOST=localhost
     DB_NAME=copywrite
     DATABASE_URL=postgres://lrkardxptcjtvb:cf36987d6d6d60a672a33950be3d2eaae309c6135a93d262278b7a33ee164b10@ec2-3-213-228-206.compute-1.amazonaws.com:5432/d8l99f1jn2v4ns

donde `postgres` es el nombre de su base de datos `12345` es la contraseña y `localhost` es el el lugar o dominio de su base de datos se encunentra en el archivo `env.ejemplo` y `DATABASE_URL`es la base de datos de la aplicacion en la nube, debe debuscar su propia base o en caso contrario crear una base de datos local . `DB_NAME` es la base de datos local que se creo en el transcurso del proyecto. y se realizo en `postgres`

## BoilerPlate

El boilerplate cuenta con dos carpetas: `apiback` y `clientfront`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
DB_NAME=created_data_base
```

Reemplazar `created_data_base`,`usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `copywrite` y el modelo al cual se le realiza el llenado de datos se le denomina en este proyecto `Principal`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías usadas:

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] Node.js
- Mocha https://mochajs.org/
- Chai https://www.chaijs.com/
- SuperTest https://github.com/visionmedia/supertest#readme
- Jest https://github.com/visionmedia/supertest#readme
- Bootstrap https://getbootstrap.com/

## Back notas:

#### Pruebas desde postman

- todas las pruebas se realizan desde postaman por lo tanto revice este documento para guiarse: - [**docu postman para proyecto**](https://documenter.getpostman.com/view/19592464/UzXPxGox)

## Archivo ejecucion :

para ejecutar el archivo back y front solo debe de instalar las dependencias, despues debe de dirijirse a la carpeta desde la terminal y ejecutar : (el archivo front puede modificar el puerto con el archivo `.env` colocando el puerto deseado POR EJEMPLO :`PORT=4001`)

```
npm install
```

y una vez se tengan instaladas las dependencias ejecutar la aplicacion, tanto front como back

```
npm start
```

se recomienda que si esta trabajando en local ejecute el back con

```
npm run dev
```

para hacer test, puede dirijirse a la carpete àpi y ejecutar el comando

```
npm test
```

<hr/>

[ Proyecto en ejecucion](https://kennethpcapp2.herokuapp.com/)

## Referencia:

- [ mocha](https://mochajs.org/)
- [ chai](https://www.npmjs.com/package/chai)
- [supertest](https://www.npmjs.com/package/supertest)
- [ jest](https://jestjs.io/docs/expect)
- [libro \mocha_chai pagina43, solucion errores mocha](https://books.google.com.co/books?id=xRQjEAAAQBAJ&printsec=frontcover&hl=es)

---

## **AUTOR**

**kenneth E. Puliche Correa**

### <h3> 🤝🏻 &nbsp;Connect with Me </h3>

Email: **ingkeneidel@gmail.com**
Wpp: **<a href="https://wa.link/0l2haf"> +573114035605 </a>**

## 🌐 Socials:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kennethe-p-813311225/)
</br>

---

```

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
