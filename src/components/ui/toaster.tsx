"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            className="text-white shadow-inner">
            <div className="w-full grid gap-3">
              {title && <ToastTitle className="flex flex-row items-center text-base gap-2">{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-white hover:text-red-600 hover:scale-125 hover:transition-all" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
