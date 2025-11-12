import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { DealHeader } from '../components/DealHeader'
import { StageProgress } from '../components/StageProgress'
import { ClientSidebar } from '../components/ClientSidebar'
import { StageSidebar } from '../components/StageSidebar'
import { NoteForm } from '../components/NoteForm'
import { ActivityList, type Activity } from '../components/ActivityList'
import { HistoryList, type HistoryGroup } from '../components/HistoryList'

const activities: Activity[] = [
  {
    id: '1',
    title: 'Montar proposta',
    date: '05/08/2024',
    time: '11:00 - 13:30',
    stage: 'Qualificação',
    assignee: 'Júlia Albano',
  },
  {
    id: '2',
    title: 'Montar proposta',
    date: '05/08/2024',
    time: '11:00 - 13:30',
    stage: 'Qualificação',
    assignee: 'Júlia Albano',
  },
]

const historyGroups: HistoryGroup[] = [
  {
    date: '08/08/2024 11:00',
    events: [
      {
        id: '1',
        type: 'status',
        title: 'Negociação movida de Qualificação para Contato',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Praesent vulputate nibh eu metus interdum',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        user: 'Representante',
      },
      {
        id: '2',
        type: 'note',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        assignee: 'Júlia Albano',
      },
    ],
  },
  {
    date: '04/08/2024 11:00',
    events: [
      {
        id: '3',
        type: 'sale',
        title: 'Venda registrada',
        amount: 'R$5000,00',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        assignee: 'Júlia Albano',
      },
      {
        id: '4',
        type: 'budget',
        title: 'Orçamento registrado',
        amount: 'R$2500,00',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        assignee: 'Júlia Albano',
      },
      {
        id: '5',
        type: 'catalog',
        title: 'Catálogo coleção vigente',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        assignee: 'Júlia Albano',
      },
      {
        id: '6',
        type: 'catalog-send',
        title: 'Envio do catálogo',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        assignee: 'Júlia Albano',
        status: 'Concluída',
      },
      {
        id: '7',
        type: 'contact',
        title: 'Contato inicial',
        date: '05/08/2024',
        time: '11:00 - 13:30',
        stage: 'Qualificação',
        assignee: 'Júlia Albano',
      },
    ],
  },
]

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [currentStage, setCurrentStage] = useState('follow')

  return (
    <div className="min-h-screen bg-gray-50">
      <DealHeader 
        dealNumber="00021"
        consultantName="Salty Edwards"
        deadline="-"
        closingConsultant="-"
      />
      
      <StageProgress 
        currentStage={currentStage}
        onStageChange={setCurrentStage}
      />
      
      <div className="flex">
        {/* Sidebar Esquerda */}
        <ClientSidebar 
          companyName="022100 - Comércio de Roupas Bella Vista Ltda."
          companySubtitle="Moda Bella Vista"
          contactName="Maria Eduarda"
          contactRole="Gestora Comercial"
          phone="+55 (47) 98000-000"
          landline="+55 (47) 98000-000"
          email="bellavista@gmail.com"
        />
        
        {/* Conteúdo Principal */}
        <main className="flex-1 space-y-5 p-6">
          <NoteForm />
          
          <ActivityList activities={activities} />
          
          <HistoryList groups={historyGroups} />
        </main>
        
        {/* Sidebar Direita */}
        <StageSidebar />
      </div>
    </div>
  )
}
