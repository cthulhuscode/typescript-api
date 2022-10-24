export default interface Car {
  name: string;
  brand: string;
  color: string;
  gas: "Gasoline" | "Diesel" | "Electric" | "Hybrid";
  year: number;
  description: string;
  price: number;
}
