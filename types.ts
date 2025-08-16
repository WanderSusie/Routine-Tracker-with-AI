
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface StreakData {
  count: number;
  lastUpdated: string | null;
}
