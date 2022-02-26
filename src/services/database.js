import firebase from "../components/firebase";

const db = firebase.ref("/pslQuiz");

class DataService {
  getAll() {
    return db.orderByChild("points").limitToLast(5);
  }

  create(user) {
    return db.push(user);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataService();