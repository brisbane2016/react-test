import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase,googleAuthProvider,database as default};



/*
//child_removed
  database.ref('expenses').on('child_removed',(snapshot)=>{

    console.log(snapshot.key,snapshot.val());
  });
// child _changed
database.ref('expenses').on('child_changed',(snapshot)=>{

    console.log(snapshot.key,snapshot.val());
  });
// child _added
database.ref('expenses').on('child_added',(snapshot)=>{

    console.log(snapshot.key,snapshot.val());
  });

  /*

  database.ref('expenses').on('value',(snapshot) => {

    const expenses =[];
    snapshot.forEach( (childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
      }

      );
      console.log(expenses);
});


  /*

  database.ref('expenses')
  .once('value')
  .then ((snapshot) => {
      const expenses =[];
      snapshot.forEach( (childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
      }


      );
      console.log(expenses);
  });
  


  /*
  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 976123498763
  });
  
  database.ref('expenses').push({
    description: 'Phone bill',
    note: '',
    amount: 5900,
    createdAt: 976123498763
  });
  
  database.ref('expenses').push({
    description: 'Food',
    note: '',
    amount: 1200,
    createdAt: 976123498763
  });
  
  
  








/*
database.ref('notesnew').push({

    title : 'first note',
    body: 'this is my note'
});

database.ref('notesnew').push({

    title : '3first note',
    body: '3this is my note'
});


*/














/*
database.ref().on('value',(snapshot) => {

    const val = snapshot.val();
    console.log(`${val.name} is  a ${val.job.title} at ${val.job.company}`);

});



database.ref().on('value',(snapshot)=>{

    console.log(snapshot.val());
});

setTimeout( () => {

    database.ref('age').set(28)
},3500);


database.ref().remove().then(function() {
  console.log("Remove succeeded.")
}).catch(function(error) {
  console.log("Remove failed: " + error.message)
});





  database.ref().set({
      name: 'Gary li 2091',
      age:15,
      job: 'software developer',
      location:{
          city: "phil",
          country: 'united kingdom'
      }
  }).then(()=>{

    console.log('data is saved');
  }).catch((e)=>{

    console.log('this failed',e);
  });

  database.ref('age').set(29);
  database.ref('location/city').set('aucklan');


  console.log('I made a request to change the data');

database.ref().update({

  
    job: 'software',
   'location/city': 'aucklands'
})

*/