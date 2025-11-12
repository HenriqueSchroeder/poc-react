import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { HistoryStatusItem } from './history/HistoryStatusItem'
import { HistoryNoteItem } from './history/HistoryNoteItem'
import { HistorySaleItem } from './history/HistorySaleItem'
import { HistoryBudgetItem } from './history/HistoryBudgetItem'
import { HistoryCatalogItem } from './history/HistoryCatalogItem'
import { HistoryCatalogSendItem } from './history/HistoryCatalogSendItem'
import { HistoryContactItem } from './history/HistoryContactItem'

interface HistoryItemBase {
  id: string
  date: string
  time: string
  stage: string
  assignee?: string
}

export interface HistoryStatusEvent extends HistoryItemBase {
  type: 'status'
  title: string
  description?: string
  user: string
}

export interface HistoryNoteEvent extends HistoryItemBase {
  type: 'note'
  assignee: string
}

export interface HistorySaleEvent extends HistoryItemBase {
  type: 'sale'
  title: string
  amount: string
  assignee: string
}

export interface HistoryBudgetEvent extends HistoryItemBase {
  type: 'budget'
  title: string
  amount: string
  assignee: string
}

export interface HistoryCatalogEvent extends HistoryItemBase {
  type: 'catalog'
  title: string
  assignee: string
}

export interface HistoryCatalogSendEvent extends HistoryItemBase {
  type: 'catalog-send'
  title: string
  assignee: string
  status?: string
}

export interface HistoryContactEvent extends HistoryItemBase {
  type: 'contact'
  title: string
  assignee: string
}

export type HistoryEvent = 
  | HistoryStatusEvent 
  | HistoryNoteEvent 
  | HistorySaleEvent 
  | HistoryBudgetEvent
  | HistoryCatalogEvent
  | HistoryCatalogSendEvent
  | HistoryContactEvent

export interface HistoryGroup {
  date: string
  events: HistoryEvent[]
}

interface HistoryListProps {
  groups: HistoryGroup[]
}

export function HistoryList({ groups }: HistoryListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Histórico</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {groups.map((group) => (
          <div key={group.date} className="space-y-4">
            <div className="text-sm text-gray-500 font-medium">{group.date}</div>
            
            <div className="space-y-3">
              {group.events.map((event) => {
                switch (event.type) {
                  case 'status':
                    return (
                      <HistoryStatusItem
                        key={event.id}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        user={event.user}
                      />
                    )
                  case 'note':
                    return (
                      <HistoryNoteItem
                        key={event.id}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        assignee={event.assignee}
                      />
                    )
                  case 'sale':
                    return (
                      <HistorySaleItem
                        key={event.id}
                        title={event.title}
                        amount={event.amount}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        assignee={event.assignee}
                      />
                    )
                  case 'budget':
                    return (
                      <HistoryBudgetItem
                        key={event.id}
                        title={event.title}
                        amount={event.amount}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        assignee={event.assignee}
                      />
                    )
                  case 'catalog':
                    return (
                      <HistoryCatalogItem
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        assignee={event.assignee}
                      />
                    )
                  case 'catalog-send':
                    return (
                      <HistoryCatalogSendItem
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        assignee={event.assignee}
                        status={event.status}
                      />
                    )
                  case 'contact':
                    return (
                      <HistoryContactItem
                        key={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        stage={event.stage}
                        assignee={event.assignee}
                      />
                    )
                  default:
                    return null
                }
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
