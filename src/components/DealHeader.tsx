import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import { ChevronLeft, Plus, X } from 'lucide-react'

interface DealHeaderProps {
  dealNumber: string
  consultantName: string
  deadline?: string
  closingConsultant?: string
}

export function DealHeader({
  dealNumber,
  consultantName,
}: DealHeaderProps) {
  return (
    <header className="border-b bg-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="text-xs text-gray-500">
            Funil de vendas / <span className="font-medium text-gray-900">Negociação</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div>
            <div className="text-xs text-gray-500 mb-0.5">Código da negociação</div>
            <div className="border border-dashed border-gray-300 rounded text-sm font-semibold text-gray-900 p-1 h-9 flex items-center min-w-[140px]">
              {dealNumber}
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-0.5">Consultor de vendas interno</div>
            <div className="border border-dashed border-gray-300 rounded flex items-center gap-2 p-1 h-9 min-w-[140px]">
              <Avatar className="h-7 w-7">
                <AvatarFallback className="bg-blue-600 text-white text-xs font-medium">
                  SE
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-900">{consultantName}</span>
            </div>
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-1">Resultado da negociação</div>
            <div className="flex gap-2">
              <Button size="sm" className="bg-cyan-400 hover:bg-cyan-500 text-white h-8 px-3 gap-1.5">
                <Plus className="h-4 w-4" />
                Ganha
              </Button>
              <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white h-8 px-3 gap-1.5">
                <X className="h-4 w-4" />
                Perdida
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
