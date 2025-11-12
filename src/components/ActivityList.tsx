import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { ActivityItem } from './ActivityItem'
import { Search } from 'lucide-react'

export interface Activity {
  id: string
  title: string
  date: string
  time: string
  stage: string
  assignee: string
  completed?: boolean
}

interface ActivityListProps {
  activities: Activity[]
}

export function ActivityList({ activities }: ActivityListProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-base font-semibold">Atividades pendentes</CardTitle>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Procurar registros"
              className="pl-9 w-64 h-9"
            />
          </div>
          <Select>
            <SelectTrigger className="w-48 h-9">
              <SelectValue placeholder="Todos os registros" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os registros</SelectItem>
              <SelectItem value="pending">Pendentes</SelectItem>
              <SelectItem value="completed">Concluídos</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((activity) => (
          <ActivityItem 
            key={activity.id}
            {...activity}
          />
        ))}
      </CardContent>
    </Card>
  )
}
