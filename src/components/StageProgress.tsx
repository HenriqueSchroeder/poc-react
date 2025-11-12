import { Check, MapPin } from 'lucide-react'

interface StageProgressProps {
  currentStage: string
  onStageChange: (stage: string) => void
}

const stages = [
  { id: 'qualificacao', label: 'Qualificação' },
  { id: 'contato', label: 'Contato' },
  { id: 'proposta', label: 'Proposta' },
  { id: 'follow', label: 'Follow' },
  { id: 'fechamento', label: 'Fechamento' }
]

export function StageProgress({ currentStage, onStageChange }: StageProgressProps) {
  const currentIndex = stages.findIndex(s => s.id === currentStage)

  return (
    <div className="border-b bg-white px-6 py-3">
      <div className="flex items-center gap-3">
        {stages.map((stage, index) => (
          <button
            key={stage.id}
            onClick={() => onStageChange(stage.id)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded border text-sm font-medium transition-all ${
              index === currentIndex
                ? 'bg-cyan-50 border-cyan-400 text-cyan-700'
                : index < currentIndex
                ? 'bg-cyan-50 border-cyan-400 text-cyan-700'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {index < currentIndex ? (
              <Check className="h-4 w-4" />
            ) : index === currentIndex ? (
              <MapPin className="h-4 w-4" />
            ) : null}
            <span>{stage.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
