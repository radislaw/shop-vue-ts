import { Category } from '@/types/Category';

export interface Categories {
  count: number,
  items: Category[],
  limit: number,
  offset: number,
  total: number
}
