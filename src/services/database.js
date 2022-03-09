import firebase from "../components/firebase";

const db = firebase;

db.settings({
  timestampsInSnapshots: true
});
const userRef = db.collection("live_result");

class DataService {
  getAll() {
    return userRef.get();
  }
  userRef1(){
    return userRef;
  }
  create(user) {
    return userRef.push(user);
  }

  update(key, value) {
    return userRef.child(key).update(value);
  }

  delete(key) {
    return userRef.child(key).remove();
  }

  deleteAll() {
    return userRef.remove();
  }
}

export default new DataService();