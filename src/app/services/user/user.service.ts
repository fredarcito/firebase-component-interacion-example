import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {User, UserWrapper} from '../../models/User';

@Injectable()
export class UserService {

  userCollection: AngularFirestoreCollection<User> = this.afs.collection<User>('users');

  constructor(private afs: AngularFirestore) {
  }

  getAll(): Observable<UserWrapper[]> {
    return <Observable<UserWrapper[]>> this.userCollection.snapshotChanges()
      .map(actions => {
        return actions.map(snapshot => {
          return {data: snapshot.payload.doc.data(), id: snapshot.payload.doc.id};
        });
      });
  }

  create(user: User) {
    return this.userCollection.add(user);
  }

}
