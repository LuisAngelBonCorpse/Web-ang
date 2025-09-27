Module 2 Coding Assignment
=======
[Click here to SIGN UP for the ***Single Page Web Applications with AngularJS*** course on Coursera](https://www.coursera.org/learn/single-page-web-apps-with-angularjs). It's FREE!

**Ready to implement some cool dynamic behavior right in your web page?! Oh, and do it in an architecturally correct/elegant way?!**

## Time to Complete
It should take about 1 hour or less. (This is just an estimate. People's backgrounds differ, so for some people it will take longer to complete.)

**Ask questions in [Week 2 Discussion Forum](https://www.coursera.org/learn/single-page-web-apps-with-angularjs/discussions/weeks/2) if you get stuck! We are all learning, and going through getting stuck and then unstuck (even with someone’s help) can be a very valuable learning experience!**

### **DO NOT be scared by the length of this assignment! It’s really not so much at all. I just wanted to explain everything as clearly as I could and break it down into smaller steps for your benefit.**


## Assignment Instructions

### General Idea
The idea of this assignment is to create a "check off" shopping List application.

Think of being in a store with a shopping list that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.

Your HTML page should display 2 lists, one titled "To Buy" and the other "Already Bought".

The "To Buy" list should be pre-populated with a list of at least 5 items. (*Hint: Use an array of object literals, where each item will be similar to `{ name: "cookies", quantity: 10 }`*) Each shopping list item is to have a name and quantity. It should be displayed to the user in the format of `Buy item_quantity item_name`. For example, shopping list item `{ name: "cookies", quantity: 10 }` would be listed as `Buy 10 cookies`.

Next to each item in the list should be a button with the label "Bought". When the user clicks on the "Bought" button, its associated item should be removed from the "To Buy" list and appear in the "Already Bought" list.

The "Already Bought" list should initially be empty and display a message "Nothing bought yet". Make sure the message appears *only* when the list is empty. Once something is "bought" and appears on this list, the format of each item in the list should be `Bought item_quantity item_name`. For example, the bought item of 10 cookies mentioned before would appear in this list as `Bought 10 cookies`.

Once the user "buys" every item on the "To Buy" list, i.e., clicks on the "Bought" button for every item in the "To Buy" list, instead of the empty "To Buy" list, display the message "Everything is bought!"


### Rules
Breaking one of these rules will cause you to fail the assignment:
* You are not allowed to use regular HTML `onclick` attribute to bind behavior to the button. You **must** use the AngularJS way of binding behavior.
* At no point should your Javascript code look up *anything* in the DOM of the browser.
* Your implementation should *not* consist of only 1 controller that does it all: take care of both lists, store the data for both lists, etc.

### Steps
Here is what you will need to do to complete the assignment:

1. (If you haven’t already) Create a GitHub.com account and a repository that you will use for this class.
2. (If you haven’t already) Follow the Development Setup Video (beginning of Module 1) instructions on how to create a repository and set it up such that you can host and view your finished web pages on GitHub Pages, i.e., GitHub.io domain name. You will need to provide that URL for your peer review.
3. Create a folder in your repository that will serve as a container folder for your solution to this assignment. You can call it whatever you want. For example, `module2-solution` or `mod2_solution`, etc.
  * You can do this by 'cloning' your repository with `git clone https://www.github.com/your_repo_url` to your local machine, creating `module2-solution` folder in the root of the repository directory along with a README.txt inside of the `module2-solution` directory. Then, you would do `git add .`, followed by `git commit -m 'New folder'`, followed by `git push` to upload the new folder with the README.txt to the GitHub repository.
4. HTML/CSS for the assignment
  * Option 1: Copy the **contents** of the folder `assignment2-starter-code` into the newly created folder from the previous step. If you cloned this repository, the assignment 2 folder is located in `root_dir_of_your_local_repo/assignments/assignment2/assignment2-starter-code`
  * Option 2: Create the HTML/CSS yourself. Make sure to name the HTML file `index.html`. The only requirement is that your HTML have the required lists as described in the General Idea section. You can make the lists side by side or one under the other. The rest is up to you.
5. Import AngularJS into your project and place a `<script>` tag right before the `</body>` tag.
6. Declare `ng-app` either on the `html` or the `body` element. Name your app `ShoppingListCheckOff`.
7. Create `app.js` in your project and declare an Angular module to match your `ng-app` declaration.
8. Go back to `index.html` and declare 2 controllers using `controller as` syntax. One controller should be called `ToBuyController` and the other called `AlreadyBoughtController`. You are *required* to have 2 controllers for this assignment.
9. You will obviously need to share data between these controllers. Go back to `app.js` and implement this data sharing using the *singleton* approach with the `.service` declaration. Call the service `ShoppingListCheckOffService`. Make sure to inject this service into both controllers so they can share data. Also, realize that your service will have to keep track of both 'to buy' and 'bought' items at the same time. (*While there is no one right way to accomplish this functionality, for this assignment, you are required to implement it as described.*)
  * (*Hint*) You can store 2 separate arrays in the service: one to hold "to buy" items and one to hold "bought" items. The reference to the "to buy" array should be placed/exposed onto the `ToBuyController` instance as some property. The reference to the "bought" items array should be placed/exposed onto the `AlreadyBoughtController` instance as some property.
  * (*Hint*) When the user clicks on the "Bought" button, simply pass the call from your (`ng-click`) controller-bound method to call the right method inside of your `ShoppingListCheckOffService` service, which removes that item from the "to buy" array and pushes it to the "bought" array.
  * (*Hint*) Your `ShoppingListCheckOffService` would also be the place where you would store the initial array of "to buy" items.
10. To display and/or hide the messages when the list(s) are empty, use the `ng-if` directive.
11. To loop over the items in either list use the `ng-repeat` directive.
12. Make sure all of your Javascript code is inside of an IIFE. (*If you don't know what that is or why we'd want to use it, brush up on it by looking through module 4 of [HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers/) course I teach.*)
13. Make sure all of your dependency injections are protected from minification.
14. After you are done and satisfied with your solution, don't forget to add/commit/push your code to your repository.

## **IMPORTANT REMINDERS:**
* Closely follow the submission guidelines for this assignment on Coursera.org
* Make **sure** you provide the correct URL in your submission (it should be GitHub<b>.io</b>, *not* GitHub<b>.com</b>)
* Make **sure** to TEST your assignment not just on your local machine, but ALSO once you deploy it on GitHub, using the URL you are providing as part of your submission.
* This assignment will be peer-reviewed (and graded). The guidance will be given such that if submission instructions are not followed, the assignment is to be failed. This includes providing the wrong URL for your deployment. Following instructions is very much part of software development. After all, that's what software requirements are - instructions to follow.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Asignación de Programación del Módulo 2
=======  
[Haz clic aquí para INSCRIBIRTE en el curso ***Aplicaciones Web de Página Única con AngularJS*** en Coursera](https://www.coursera.org/learn/single-page-web-apps-with-angularjs). ¡Es GRATIS!

**¿Listo para implementar un comportamiento dinámico genial directamente en tu página web? ¡Y hacerlo de forma arquitectónicamente correcta y elegante?**

## Tiempo estimado para completar  
Debería tomar alrededor de 1 hora o menos. (Esto es solo una estimación. Los antecedentes de cada persona son diferentes, por lo que a algunos les tomará más tiempo).

**Haz preguntas en el [Foro de Discusión de la Semana 2](https://www.coursera.org/learn/single-page-web-apps-with-angularjs/discussions/weeks/2) si te atoras. ¡Todos estamos aprendiendo, y pasar por el proceso de estar atascado y luego destrabarse (incluso con ayuda) puede ser una experiencia muy valiosa!**

### **¡NO te asustes por la longitud de esta asignación! En realidad no es tanto. Solo quise explicar todo lo más claramente posible y dividirlo en pasos pequeños para tu beneficio.**

---

## Instrucciones de la Asignación

### Idea General  
La idea de esta asignación es crear una aplicación de lista de compras con opción de "marcar como comprado".

Imagina estar en una tienda con una lista de compras que te permite "marcar" los artículos que ya compraste, excepto que en lugar de marcarlos, el artículo comprado simplemente se mueve a la lista de "Ya Comprado".

Tu página HTML debe mostrar 2 listas, una titulada "Por Comprar" y otra "Ya Comprado".

La lista "Por Comprar" debe estar pre-poblada con al menos 5 artículos. (*Sugerencia: Usa un arreglo de objetos literales, donde cada artículo sea similar a `{ name: "galletas", quantity: 10 }`*) Cada artículo debe tener un nombre y una cantidad. Debe mostrarse al usuario en el formato `Comprar cantidad artículo`. Por ejemplo, el artículo `{ name: "galletas", quantity: 10 }` se mostraría como `Comprar 10 galletas`.

Junto a cada artículo debe haber un botón con la etiqueta "Comprado". Cuando el usuario haga clic en ese botón, el artículo asociado debe eliminarse de la lista "Por Comprar" y aparecer en la lista "Ya Comprado".

La lista "Ya Comprado" debe estar vacía inicialmente y mostrar el mensaje "Nada comprado aún". Asegúrate de que el mensaje aparezca *solo* cuando la lista esté vacía. Una vez que se compre algo y aparezca en esta lista, el formato de cada artículo debe ser `Comprado cantidad artículo`. Por ejemplo, el artículo comprado de 10 galletas se mostraría como `Comprado 10 galletas`.

Una vez que el usuario compre todos los artículos de la lista "Por Comprar", es decir, haga clic en el botón "Comprado" para cada artículo, en lugar de mostrar una lista vacía, se debe mostrar el mensaje "¡Todo está comprado!"

---

### Reglas  
Romper alguna de estas reglas causará que falles la asignación:
* No se permite usar el atributo HTML `onclick` para vincular comportamiento al botón. Debes usar la forma AngularJS de vincular comportamiento.
* En ningún momento tu código Javascript debe buscar *nada* en el DOM del navegador.
* Tu implementación no debe consistir en un solo controlador que haga todo: manejar ambas listas, almacenar los datos de ambas listas, etc.

---

### Pasos  
Esto es lo que necesitas hacer para completar la asignación:

1. (Si aún no lo has hecho) Crea una cuenta en GitHub.com y un repositorio que usarás para esta clase.  
2. (Si aún no lo has hecho) Sigue las instrucciones del video de configuración del entorno de desarrollo (al inicio del Módulo 1) sobre cómo crear un repositorio y configurarlo para que puedas alojar y ver tus páginas web terminadas en GitHub Pages, es decir, en el dominio GitHub.io. Necesitarás proporcionar esa URL para la revisión por pares.  
3. Crea una carpeta en tu repositorio que servirá como contenedor para tu solución de esta asignación. Puedes llamarla como quieras, por ejemplo, `module2-solution` o `mod2_solution`, etc.  
   * Puedes hacer esto clonando tu repositorio con `git clone https://www.github.com/tu_repo_url` en tu máquina local, creando la carpeta `module2-solution` en la raíz del directorio del repositorio junto con un archivo README.txt dentro de esa carpeta. Luego, ejecuta `git add .`, seguido de `git commit -m 'Nueva carpeta'`, seguido de `git push` para subir la nueva carpeta con el README.txt al repositorio de GitHub.  
4. HTML/CSS para la asignación  
   * Opción 1: Copia el **contenido** de la carpeta `assignment2-starter-code` en la carpeta recién creada del paso anterior. Si clonaste el repositorio, la carpeta de la asignación 2 está ubicada en `root_dir_de_tu_repo_local/assignments/assignment2/assignment2-starter-code`  
   * Opción 2: Crea el HTML/CSS tú mismo. Asegúrate de nombrar el archivo HTML como `index.html`. El único requisito es que tu HTML tenga las listas requeridas como se describe en la sección de Idea General. Puedes hacer que las listas estén una al lado de la otra o una debajo de la otra. El resto depende de ti.  
5. Importa AngularJS en tu proyecto y coloca la etiqueta `<script>` justo antes de la etiqueta `</body>`.  
6. Declara `ng-app` ya sea en el elemento `html` o en el `body`. Nombra tu app `ShoppingListCheckOff`.  
7. Crea `app.js` en tu proyecto y declara un módulo Angular que coincida con tu declaración `ng-app`.  
8. Regresa a `index.html` y declara 2 controladores usando la sintaxis `controller as`. Un controlador debe llamarse `ToBuyController` y el otro `AlreadyBoughtController`. Es *obligatorio* tener 2 controladores para esta asignación.  
9. Obviamente necesitarás compartir datos entre estos controladores. Regresa a `app.js` e implementa esta compartición de datos usando el enfoque *singleton* con la declaración `.service`. Llama al servicio `ShoppingListCheckOffService`. Asegúrate de inyectar este servicio en ambos controladores para que puedan compartir datos. Además, ten en cuenta que tu servicio deberá llevar el control tanto de los artículos "por comprar" como de los "comprados". (*Aunque no hay una única forma correcta de lograr esta funcionalidad, para esta asignación debes implementarla como se describe.*)  
   * (*Sugerencia*) Puedes almacenar 2 arreglos separados en el servicio: uno para los artículos "por comprar" y otro para los "comprados". La referencia al arreglo "por comprar" debe exponerse en la instancia de `ToBuyController` como una propiedad. La referencia al arreglo de artículos "comprados" debe exponerse en la instancia de `AlreadyBoughtController` como una propiedad.  
   * (*Sugerencia*) Cuando el usuario haga clic en el botón "Comprado", simplemente pasa la llamada desde tu método vinculado al controlador (`ng-click`) para que llame al método correcto dentro de tu servicio `ShoppingListCheckOffService`, el cual elimina ese artículo del arreglo "por comprar" y lo agrega al arreglo "comprado".  
   * (*Sugerencia*) Tu servicio `ShoppingListCheckOffService` también sería el lugar donde almacenarías el arreglo inicial de artículos "por comprar".  
10. Para mostrar u ocultar los mensajes cuando las listas estén vacías, usa la directiva `ng-if`.  
11. Para recorrer los artículos en cualquiera de las listas usa la directiva `ng-repeat`.  
12. Asegúrate de que todo tu código Javascript esté dentro de una IIFE (Immediately Invoked Function Expression). (*Si no sabes qué es o por qué querríamos usarlo, repasa el módulo 4 del curso [HTML, CSS y Javascript para Desarrolladores Web](https://www.coursera.org/learn/html-css-javascript-for-web-developers) que imparto.*)  
13. Asegúrate de que todas tus inyecciones de dependencias estén protegidas contra minificación.  
14. Una vez que hayas terminado y estés satisfecho con tu solución, no olvides hacer `add/commit/push` de tu código al repositorio.

---

## **RECORDATORIOS IMPORTANTES:**  
* Sigue cuidadosamente las instrucciones de entrega de esta asignación en Coursera.org  
* Asegúrate de proporcionar la URL correcta en tu entrega (debe ser GitHub<b>.io</b>, *no* GitHub<b>.com</b>)  
* Asegúrate de PROBAR tu asignación no solo en tu máquina local, sino TAMBIÉN una vez que la hayas desplegado en GitHub, usando la URL que estás proporcionando como parte de tu entrega.  
* Esta asignación será revisada por tus compañeros (y calificada). Se dará la guía de que si no se siguen las instrucciones de entrega, la asignación será rechazada. Seguir instrucciones es una parte fundamental del desarrollo de software. Después de todo,
