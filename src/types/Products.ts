import { Product } from '@/types/Product';

export interface Products {
  count: number,
  items: Product[],
  limit: number,
  offset: number,
  total: number
}
