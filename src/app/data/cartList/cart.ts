export interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
}

const initialCart: CartItem[] = [];

export default initialCart;