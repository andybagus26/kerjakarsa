'use client'

import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const defaultTasks = [
  { id: 1, title: 'Cuci piring', completed: true },
  { id: 2, title: 'Sapu lantai', completed: true },
  { id: 3, title: 'Bersihkan kamar mandi', completed: false },
  { id: 4, title: 'Lap meja', completed: false },
  { id: 5, title: 'Buang sampah', completed: false },
]

export function TaskChecklist() {
  const [tasks, setTasks] = useState(defaultTasks)
  const [newTaskTitle, setNewTaskTitle] = useState('')

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTaskTitle.trim()) return
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTaskTitle.trim(), completed: false },
    ])
    setNewTaskTitle('')
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter((t) => t.completed).length
  const totalCount = tasks.length
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold text-stone-900">Daftar Tugas</h3>
        <span className="text-xs font-bold bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full">
          {completedCount} / {totalCount} Selesai
        </span>
      </div>
      <p className="text-xs text-stone-500 mb-4">
        Kemajuan pengerjaan proyek oleh pekerja
      </p>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden mb-6">
        <div
          className="h-full bg-teal-700 transition-all duration-500 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Form Tambah Tugas Baru */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="+ Tambah tugas pengerjaan..."
          className="flex-1 px-4 py-2 bg-stone-50 border border-stone-200 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-teal-700"
        />
        <button
          type="submit"
          disabled={!newTaskTitle.trim()}
          className="px-3.5 py-2 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white rounded-2xl font-bold text-xs transition-colors flex items-center gap-1 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah</span>
        </button>
      </form>

      {/* Task List */}
      <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between p-2.5 hover:bg-stone-50 rounded-2xl transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Custom Checkbox */}
              <button
                type="button"
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
                className={`text-sm truncate transition-all ${
                  task.completed
                    ? 'text-stone-400 line-through'
                    : 'text-stone-900 font-medium'
                }`}
              >
                {task.title}
              </span>
            </div>

            {/* Delete Button */}
            <button
              type="button"
              onClick={() => deleteTask(task.id)}
              className="opacity-0 group-hover:opacity-100 p-1.5 text-stone-400 hover:text-red-600 rounded-lg transition-all"
              title="Hapus tugas"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

