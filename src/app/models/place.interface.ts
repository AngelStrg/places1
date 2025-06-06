export interface Place {
  id?: string;          // Opcional, id generado por Firestore
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  image: string;
}
