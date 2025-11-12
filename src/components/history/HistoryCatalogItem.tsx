import { ChevronRight, BookOpen, Clock } from 'lucide-react'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Badge } from '../ui/badge'

interface HistoryCatalogItemProps {
  title: string
  date: string
  time: string
  stage: string
  assignee: string
}

export function HistoryCatalogItem({
  title,
  date,
  time,
  stage,
  assignee,
}: HistoryCatalogItemProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2)
  }

  return (
    <div className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-3">
        <ChevronRight className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="h-4 w-4 text-gray-600" />
            <span className="font-medium text-gray-900">{title}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{date}</span>
              <span>{time}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {stage}
            </Badge>
            <div className="flex items-center gap-2 ml-auto">
              <Avatar className="h-5 w-5">
                <AvatarFallback className="bg-purple-500 text-white text-[10px]">
                  {getInitials(assignee)}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-purple-600">{assignee}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
