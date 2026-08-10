'use client'

import { useState } from 'react'

const defaultTasks = [
  { id: 1, title: 'Cuci piring', completed: true },
  { id: 2, title: 'Sapu lantai', completed: true },
  { id: 3, title: 'Bersihkan kamar mandi', completed: false },
  { id: 4, title: 'Lap meja', completed: false },
  { id: 5, title: 'Buang sampah', completed: false },
]

export function TaskChecklist() {
  const [tasks, setTasks] = useState(defaultTasks)

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completedCount = tasks.filter((t) => t.completed).length
  const totalCount = tasks.length
  const progressPercent = (completedCount / totalCount) * 100

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
      <h3 className="text-lg font-semibold text-stone-900 mb-1">Daftar Tugas</h3>
      <p className="text-sm text-stone-500 mb-4">
        {completedCount} dari {totalCount} selesai
      </p>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-amber-500 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center gap-3">
            {/* Custom Checkbox */}
            <button
              onClick={() => toggleTask(task.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${
                task.completed
                  ? 'bg-teal-700 border-teal-700'
                  : 'border-stone-300 hover:border-teal-700'
              }`}
            >
              {task.completed && (
                <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            {/* Task Title */}
            <span
              className={`text-sm transition-all ${
                task.completed
                  ? 'text-stone-400 line-through'
                  : 'text-stone-900 font-medium'
              }`}
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
