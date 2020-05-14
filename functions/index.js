const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.onMessageCreate = functions.firestore
    .document('messages/{userId}')
    .onCreate((snap,context) => {
        const ref = admin.firestore().collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            i = 0;
            size = snapshot.size;
            sizeToDelete = size - 20;
            console.log('Message Count:' + size);

            snapshot.forEach((doc)=>{
                if(i<sizeToDelete){
                    doc.ref.delete().then(()=>{
                        console.log("Doc deleted");
                    }).catch((error)=>{
                        console.log("Error :" + error);
                    });
                }
                i++;
            });
        });
    })
