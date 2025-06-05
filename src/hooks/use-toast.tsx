import React, { createContext, useContext, useState, ReactNode } from 'react'

export interface Toast {
  id: string
  title: string
  description?: string
  type?: 'success' | 'error' | 'warning' | 'info'
}

interface ToastContextType {
  toasts: Toast[]
  toast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description, type = 'info' }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts(prevToasts => [...prevToasts, { id, title, description, type }])

    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      removeToast(id)
    }, 5000)
  }

  const removeToast = (id: string) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, toast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

const ToastContainer = () => {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className='fixed bottom-5 right-5 z-50 flex flex-col gap-3'>
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`p-4 rounded-lg shadow-lg max-w-md transform transition-all duration-300 ease-in-out animate-slide-in flex items-start gap-3 ${
            toast.type === 'success'
              ? 'bg-green-50 border-l-4 border-green-500'
              : toast.type === 'error'
              ? 'bg-red-50 border-l-4 border-red-500'
              : toast.type === 'warning'
              ? 'bg-yellow-50 border-l-4 border-yellow-500'
              : 'bg-blue-50 border-l-4 border-blue-500'
          }`}
        >
          <div className='flex-1'>
            <h4
              className={`font-semibold ${
                toast.type === 'success'
                  ? 'text-green-800'
                  : toast.type === 'error'
                  ? 'text-red-800'
                  : toast.type === 'warning'
                  ? 'text-yellow-800'
                  : 'text-blue-800'
              }`}
            >
              {toast.title}
            </h4>
            {toast.description && (
              <p
                className={`mt-1 text-sm ${
                  toast.type === 'success'
                    ? 'text-green-700'
                    : toast.type === 'error'
                    ? 'text-red-700'
                    : toast.type === 'warning'
                    ? 'text-yellow-700'
                    : 'text-blue-700'
                }`}
              >
                {toast.description}
              </p>
            )}
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className='text-gray-400 hover:text-gray-500 focus:outline-none'
          >
            <span className='sr-only'>Close</span>
            <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
