export interface ITaskItem {
  id: string;
  title: string;
  body?: string;
  tags: string[];
  priority: number;
  completed: boolean;
  dueDate: string;
}