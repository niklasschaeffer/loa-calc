import { initializeApp, getApps } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { config } from "./config";

function initializeServices() {
  const isConfigured = getApps().length > 0;
  const firebaseApp = initializeApp(config);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  return { firebaseApp, auth, firestore, isConfigured };
}

function connectToEmulators({ auth, firestore }) {
  if (location.hostname == "localhost") {
    connectFirestoreEmulator(firestore, "localhost", 8080);
    connectAuthEmulator(auth, "http://localhost:9099");
  }
}

export function getFirebase() {
  const services = initializeServices();
  if (services.isConfigured) {
    connectToEmulators(services);
  }
  return services;
}

export function store(rapportObject, method) {}
