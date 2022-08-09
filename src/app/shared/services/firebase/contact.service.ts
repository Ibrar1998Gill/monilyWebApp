import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(public db: AngularFirestore) { }

  createUser(value, avatar) {
    return this.db.collection('usersContact').add({
      phone: parseInt(value.phone),
      fname: value.fname,
      lname: value.lname,
      email: value.email
    });
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('usersContact').doc(userKey).set(value);
  }

  getUser(userKey) {
    return this.db.collection('usersContact').doc(userKey).snapshotChanges();
  }

  getUsers() {
    return this.db.collection('usersContact').snapshotChanges();
  }

  deleteUser(contactKey) {
    return this.db.collection('usersContact').doc(contactKey).delete();
  }
  
}
