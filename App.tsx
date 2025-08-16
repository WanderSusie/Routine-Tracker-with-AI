
import React, { useState, useEffect, useCallback } from 'react';
import { Task, StreakData } from './types';
import Header from './components/Header';
import MotivationalQuote from './components/MotivationalQuote';
import TaskList from './components/TaskList';

const App: React.FC = () => {
  const getTodayString = () => new Date().toISOString().split('T')[0];

  const [workloadTasks, setWorkloadTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('workloadTasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [readingTasks, setReadingTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('readingTasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [workloadStreak, setWorkloadStreak] = useState<StreakData>(() => {
    const saved = localStorage.getItem('workloadStreak');
    return saved ? JSON.parse(saved) : { count: 0, lastUpdated: null };
  });
  const [readingStreak, setReadingStreak] = useState<StreakData>(() => {
    const saved = localStorage.getItem('readingStreak');
    return saved ? JSON.parse(saved) : { count: 0, lastUpdated: null };
  });
  
  const checkAndResetDaily = useCallback(() => {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = getTodayString();

    if (lastVisit !== today) {
      // Uncheck all tasks
      setWorkloadTasks(prev => prev.map(task => ({ ...task, completed: false })));
      setReadingTasks(prev => prev.map(task => ({ ...task, completed: false })));
      
      // Check if streaks were missed yesterday
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if(workloadStreak.lastUpdated !== yesterdayStr && workloadStreak.lastUpdated !== today) {
        setWorkloadStreak({ count: 0, lastUpdated: null });
      }
      if(readingStreak.lastUpdated !== yesterdayStr && readingStreak.lastUpdated !== today) {
        setReadingStreak({ count: 0, lastUpdated: null });
      }
      
      localStorage.setItem('lastVisitDate', today);
    }
  }, [workloadStreak, readingStreak]);

  useEffect(() => {
    checkAndResetDaily();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('workloadTasks', JSON.stringify(workloadTasks));
    updateStreak(workloadTasks, workloadStreak, setWorkloadStreak);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [workloadTasks]);

  useEffect(() => {
    localStorage.setItem('readingTasks', JSON.stringify(readingTasks));
    updateStreak(readingTasks, readingStreak, setReadingStreak);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readingTasks]);

  useEffect(() => {
    localStorage.setItem('workloadStreak', JSON.stringify(workloadStreak));
  }, [workloadStreak]);

  useEffect(() => {
    localStorage.setItem('readingStreak', JSON.stringify(readingStreak));
  }, [readingStreak]);

  const updateStreak = (tasks: Task[], streak: StreakData, setStreak: React.Dispatch<React.SetStateAction<StreakData>>) => {
    if (tasks.length === 0) return;

    const allCompleted = tasks.every(task => task.completed);
    const today = getTodayString();

    if (allCompleted && streak.lastUpdated !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (streak.lastUpdated === yesterdayStr) {
            setStreak(prev => ({ count: prev.count + 1, lastUpdated: today }));
        } else {
            setStreak({ count: 1, lastUpdated: today });
        }
    }
  };

  const handleAddTask = (category: 'workload' | 'reading', text: string) => {
    const newTask: Task = { id: Date.now().toString(), text, completed: false };
    if (category === 'workload') {
      setWorkloadTasks(prev => [...prev, newTask]);
    } else {
      setReadingTasks(prev => [...prev, newTask]);
    }
  };

  const handleToggleTask = (category: 'workload' | 'reading', id: string) => {
    const updater = (tasks: Task[]) =>
      tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task));
    if (category === 'workload') {
      setWorkloadTasks(updater);
    } else {
      setReadingTasks(updater);
    }
  };

  const handleDeleteTask = (category: 'workload' | 'reading', id: string) => {
    const updater = (tasks: Task[]) => tasks.filter(task => task.id !== id);
    if (category === 'workload') {
      setWorkloadTasks(updater);
    } else {
      setReadingTasks(updater);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <main>
          <MotivationalQuote />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TaskList
              title="Daily Workload"
              tasks={workloadTasks}
              streakData={workloadStreak}
              onAddTask={(text) => handleAddTask('workload', text)}
              onToggleTask={(id) => handleToggleTask('workload', id)}
              onDeleteTask={(id) => handleDeleteTask('workload', id)}
            />
            <TaskList
              title="Daily Reading"
              tasks={readingTasks}
              streakData={readingStreak}
              onAddTask={(text) => handleAddTask('reading', text)}
              onToggleTask={(id) => handleToggleTask('reading', id)}
              onDeleteTask={(id) => handleDeleteTask('reading', id)}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
