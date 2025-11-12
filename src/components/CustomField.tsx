import { useState } from 'react'
import { Input } from './ui/input'
import { ChevronRight } from 'lucide-react'

interface CustomFieldProps {
  label: string
  placeholder?: string
  expanded?: boolean
}

export function CustomField({ label, placeholder, expanded = false }: CustomFieldProps) {
  const [isExpanded, setIsExpanded] = useState(expanded)

  return (
    <div className="border-b last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span>{label}</span>
        <ChevronRight 
          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
        />
      </button>
      
      {isExpanded && (
        <div className="pb-3 space-y-2">
          <Input 
            placeholder={placeholder || 'Exemplo de campo'}
            className="text-sm"
          />
          <Input 
            placeholder={placeholder ? `${placeholder} 2` : 'Exemplo de campo 2'}
            className="text-sm"
          />
          <button className="text-sm text-gray-500 hover:text-gray-700">
            Exibir todos os campos etapa
          </button>
        </div>
      )}
    </div>
  )
}
