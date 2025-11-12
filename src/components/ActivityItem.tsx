import { Card } from './ui/card'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Badge } from './ui/badge'
import { Calendar, Clock, FileText } from 'lucide-react'

interface ActivityItemProps {
  title: string
  date: string
  time: string
  stage: string
  assignee: string
  completed?: boolean
}

export function ActivityItem({
  title,
  date,
  time,
  stage,
  assignee,
  completed = false,
}: ActivityItemProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2)
  }

  return (
    <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{time}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {stage}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            checked={completed}
            className="h-4 w-4 rounded border-gray-300 text-cyan-400 focus:ring-cyan-400"
            readOnly
          />
          <Avatar className="h-6 w-6">
            <AvatarFallback className="bg-purple-500 text-white text-xs">
              {getInitials(assignee)}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </Card>
  )
}
