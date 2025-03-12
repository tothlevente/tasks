/**
 * Interface representing the properties of a to-do item.
 */
export interface TodoProps {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt: Date;
}
