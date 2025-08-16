import React, { useState } from 'react';
import { Task, StreakData } from '../types';
import { fetchTaskSuggestions } from '../services/geminiService';
import StreakCounter from './StreakCounter';
import PlusIcon from './icons/PlusIcon';
import TrashIcon from './icons/TrashIcon';
import LightbulbIcon from './icons/LightbulbIcon';

interface TaskListProps {
  title: string;
  tasks: Task[];
  streakData: StreakData;
  onAddTask: (text: string) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem: React.FC<{ task: Task; onToggle: () => void; onDelete: () => void; }> = ({ task, onToggle, onDelete }) => (
    <li className="flex items-center justify-between bg-gray-800 p-3 rounded-lg animate-fade-in group">
        <div className="flex items-center">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onToggle}
                className="h-6 w-6 rounded-md border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600 cursor-pointer"
            />
            <span className={`ml-4 text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                {task.text}
            </span>
        </div>
        <button
            onClick={onDelete}
            className="text-gray-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Delete task"
        >
            <TrashIcon />
        </button>
    </li>
);

const TaskList: React.FC<TaskListProps> = ({ title, tasks, streakData, onAddTask, onToggleTask, onDeleteTask }) => {
  const [newTaskText, setNewTaskText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      onAddTask(newTaskText.trim());
      setNewTaskText('');
    }
  };
  
  const handleGetSuggestions = async () => {
    if (showSuggestions) {
      setShowSuggestions(false);
      return;
    }
    if (tasks.length === 0) {
      setSuggestions(["Add some tasks first, and then I can give you suggestions!"]);
      setShowSuggestions(true);
      return;
    }
    setIsLoadingSuggestions(true);
    setShowSuggestions(true);
    const fetchedSuggestions = await fetchTaskSuggestions(title, tasks);
    setSuggestions(fetchedSuggestions);
    setIsLoadingSuggestions(false);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
            <p className="text-gray-400">{completedCount} of {totalCount} completed</p>
        </div>
        <div className="flex items-center gap-2">
            <button 
                onClick={handleGetSuggestions}
                className="p-2 rounded-full bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/40 transition-colors"
                aria-label="Get AI Suggestions"
                title="Get AI Suggestions"
            >
                <LightbulbIcon className="w-6 h-6" />
            </button>
            <StreakCounter count={streakData.count} />
        </div>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>

      {showSuggestions && (
        <div className="mb-4 p-4 bg-gray-700/50 border border-gray-600 rounded-lg animate-slide-down">
          <h3 className="text-md font-semibold text-yellow-400 flex items-center mb-2">
            <LightbulbIcon className="w-5 h-5 mr-2" />
            AI Assistant
          </h3>
          {isLoadingSuggestions ? (
            <p className="text-gray-300 animate-pulse">Generating suggestions...</p>
          ) : (
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {suggestions.map((suggestion, index) => (
                <li key={index}>{suggestion}</li>
              ))}
            </ul>
          )}
        </div>
      )}


      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow bg-gray-700 border-gray-600 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-shadow"
        />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold p-3 rounded-lg transition-colors flex items-center justify-center">
          <PlusIcon />
        </button>
      </form>

      <ul className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem 
                key={task.id} 
                task={task}
                onToggle={() => onToggleTask(task.id)}
                onDelete={() => onDeleteTask(task.id)}
            />
          ))
        ) : (
            <p className="text-center text-gray-500 py-4">No tasks yet. Add one to get started!</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;