firebase.initializeApp({
    apiKey: "AIzaSyDENgLoYv5-0sRF5uc5uBveJVwKMOPtrfE",
    authDomain: "octavos-4b532.firebaseapp.com",
    projectId: "octavos-4b532"
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();


// Agregar documentos  
function guardar(){
    var nombre = document.getElementById('nombre').value;
    var primeraPropuesta = document.getElementById('primeraPropuesta').value;
    var segundaPropuesta = document.getElementById('segundaPropuesta').value;
    var terceraPropuesta = document.getElementById('terceraPropuesta').value;


    db.collection("propuestas").add({
            Nombre: nombre,
            Primera_Propuesta: primeraPropuesta,
            Segunda_Propuesta: segundaPropuesta,
            Tercera_Propuesta: terceraPropuesta
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('nombre').value = '';
            document.getElementById('primeraPropuesta').value = '';
            document.getElementById('segundaPropuesta').value = '';
            document.getElementById('terceraPropuesta').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    
}

// Leer documentos
var tabla = document.getElementById('tabla');

db.collection("propuestas").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.data()}`);
        tabla.innerHTML += `
        <tr>
            <td>${doc.data().Nombre}</td>
            <td>${doc.data().Primera_Propuesta}</td>
            <td>${doc.data().Segunda_Propuesta}</td>
            <td>${doc.data().Tercera_Propuesta}</td>
        </tr>
        `
    });
});

