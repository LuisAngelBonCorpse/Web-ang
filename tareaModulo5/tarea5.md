Tarea de Codificación del Módulo 5
======= Haz clic aquí para INSCRIBIRTE en el curso de Aplicaciones Web de Una Sola Página con AngularJS en Coursera. ¡Es GRATIS!

¡Es hora de programar! ¡Woohoo!!!

Tiempo para Completar
Debería tomar alrededor de 1 hora o menos. (Esto es solo una estimación. Los antecedentes de las personas difieren, por lo que para algunas personas tomará más tiempo completarlo).

¡Haz preguntas en el Foro de Discusión de la Semana 5 si te quedas atascado! ¡Todos estamos aprendiendo, y pasar por el proceso de quedarse atascado y luego desatascarse (incluso con la ayuda de alguien) puede ser una experiencia de aprendizaje muy valiosa!

Instrucciones de la Tarea
Idea General
Tu punto de partida para esta tarea será el código en la carpeta Lecture59.

Tu tarea es bastante simple.

Primero, cambia los 2 botones en la parte superior del sitio web para que digan My Info y Sign Up en lugar de About y Awards.

Tarea 1: Cuando el usuario haga clic en el botón Sign Up, debe ir a una vista que le permita "registrarse" en el boletín (que nunca llegará :-) ) del restaurante. El formulario de registro debe pedir la siguiente información: nombre, apellido, dirección de correo electrónico y número de teléfono. También debe pedir al usuario que especifique el número de menú que es su plato favorito. (El número de menú es el atributo short_name de cada elemento del menú).
Todo en el formulario (excepto el short_name) debe validarse mediante la validación de AngularJS que aprendimos en este módulo. Cuando el usuario haga clic en el botón Submit (después de que todos los demás campos estén validados), intenta recuperar el elemento del menú que el usuario especificó como su favorito a través del siguiente endpoint REST https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{category_short_name}/menu_items/{menu_number}.json. Por ejemplo, para el elemento de menú L1, tendrás que construir la URL https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/L/menu_items/0.json. (Alternativamente, si lo prefieres, puedes simplemente recuperar la lista completa de elementos del menú con el endpoint https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json y recorrer ese árbol en JS en su lugar). Si el servidor devuelve null, sabrás que el nombre del elemento especificado no es válido. Si ese es el caso, muestra un mensaje junto a la elección favorita que diga No existe tal número de menú. (Ver bonus para más)

Si todo es válido, guarda la preferencia del usuario en algún lugar de tu aplicación cliente para que puedas recuperarla en otra vista/componente/controlador/etc. (Sugerencia: piensa en un servicio). Una vez guardado, muestra un mensaje debajo del formulario que diga Su información ha sido guardada.

Tarea 2: Cuando el usuario haga clic en el botón My Info, debe ir a otra vista donde se le muestre su información "registrada", incluyendo el elemento de menú favorito que eligió. Al mostrar el elemento de menú favorito, muestra la imagen del elemento, así como su título y descripción.

Si el usuario aún no se ha "registrado" a través del botón Sign Up, simplemente muestra un mensaje que diga: Aún no se ha registrado. ¡Regístrese ahora!. Las palabras "¡Regístrese ahora!" deben ser un enlace a la misma vista a la que apunta el enlace Sign Up.

Bonus (no calificado)
Bonus Tarea 3: No hemos cubierto esto, así que investiga cómo configurar la validación de la elección del usuario para el elemento favorito ANTES de que el usuario presione el botón Submit. De esta manera, el mensaje No existe tal número de menú debería aparecer poco después de que el usuario escriba algo en el cuadro de texto del elemento favorito y pierda el foco.

(Sí, me doy cuenta, sería mejor simplemente presentar al usuario la lista de elementos, pero esto es solo un ejercicio).

Bonus Tarea 4: Escribe una prueba simple que ejercite la función que determinará si el elemento favorito existe en el menú o no existe. Ten en cuenta que necesitarás usar el servicio $httpBackend (y probablemente buscar la documentación de este también) para lograr esta prueba correctamente.

Reglas
Hazlo al estilo Angular... Hemos cubierto esto suficiente en las tareas anteriores y teniendo la base de código del restaurante como está, simplemente sería más "doloroso" para ti intentar hacerlo sin AngularJS, así que confío en que prácticamente te verás obligado a hacer las cosas al estilo AngularJS.

Pasos
No detallaré los pasos en esta tarea simplemente porque prácticamente todos ellos han sido listados en las tareas anteriores. En este punto, ya has hecho las tareas que te estoy pidiendo en esta asignación en las tareas anteriores (con la excepción de la validación de formularios, que solo debes revisar la conferencia y el código de ejemplo).

Notas Importantes de Implementación
Asegúrate de que todo tu código Javascript esté dentro de un IIFE. (Si no sabes qué es eso o por qué querríamos usarlo, repasa el módulo 4 del curso HTML, CSS y Javascript para Desarrolladores Web que imparto.)
Asegúrate de que todas tus inyecciones de dependencia estén protegidas contra la minificación.
Después de que hayas terminado y estés satisfecho con tu solución, no olvides agregar/confirmar/enviar tu código a tu repositorio.
RECORDATORIOS IMPORTANTES:
Sigue de cerca las pautas de envío para esta tarea en Coursera.org
Asegúrate de proporcionar la URL correcta en tu envío (debe ser GitHub<b>.io</b>, no GitHub<b>.com</b>)
Asegúrate de PROBAR tu tarea no solo en tu máquina local, sino TAMBIÉN una vez que la implementes en GitHub, utilizando la URL que proporcionas como parte de tu envío.
Esta tarea será revisada por pares (y calificada). La guía se dará de tal manera que si no se siguen las instrucciones de envío, la tarea debe ser reprobada. Esto incluye proporcionar la URL incorrecta para tu implementación. Seguir las instrucciones es una parte muy importante del desarrollo de software. Después de todo, eso es lo que son los requisitos de software: instrucciones a seguir.