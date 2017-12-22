var fireHeading = document.getElementById('fireHeading');
var appHeading = document.getElementById('appHeading');


// var firebaseHeadingRef = "test"
// fireHeading.textContent = firebaseHeadingRef
var firebaseHeadingRef = firebase.database().ref().child("KioskSignIns");
firebase.database().ref().child("KioskSignIns").on("value", function(snapshot) {
  console.log(""+snapshot.numChildren())
  fireHeading.innerText = ""+snapshot.numChildren()
})

var firebaseHeadingRef = firebase.database().ref().child("AppUsers");
firebase.database().ref().child("AppUsers").on("value", function(snapshot) {
  console.log(""+snapshot.numChildren())
  appHeading.innerText = ""+snapshot.numChildren()
})
//
// firebaseHeadingRef.on('value', function(datasnapshot){
//     fireHeading.innerText = datasnapshot.val();
//
// });

console.log(firebaseHeadingRef)
