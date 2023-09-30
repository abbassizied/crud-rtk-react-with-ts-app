export interface ICounter {
  value: number;
}

export interface Iimages {
  id?: number;
  url: string;
  uploaded_at?: any;
}

export interface ITask {
  id?: number;
  title: string;
  completed: boolean;
  created_at?: any;
  updated_at?: any;
}

export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: Iimages;
  images?: Iimages[];
}


