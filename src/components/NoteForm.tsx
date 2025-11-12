import { useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { FileText, Paperclip } from 'lucide-react'

export function NoteForm() {
  const [activeTab, setActiveTab] = useState('nota')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [note, setNote] = useState('')

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('nota')}
              className={`flex items-center gap-2 px-4 pb-3 text-sm font-medium transition-colors relative ${
                activeTab === 'nota'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-4 w-4" />
              Nota
              {activeTab === 'nota' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('anexo')}
              className={`flex items-center gap-2 px-4 pb-3 text-sm font-medium transition-colors relative ${
                activeTab === 'anexo'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Paperclip className="h-4 w-4" />
              Anexar arquivo
              {activeTab === 'anexo' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400" />
              )}
            </button>
          </div>
          
          {/* Nota Tab Content */}
          {activeTab === 'nota' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Data</label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Horário</label>
                  <Input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="09:00"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nota</label>
                <Textarea 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Registre aqui acontecimentos importantes que ocorreram durante a negociação."
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline" size="default">Cancelar</Button>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-white" size="default">Salvar</Button>
              </div>
            </div>
          )}
          
          {/* Anexar arquivo Tab Content */}
          {activeTab === 'anexo' && (
            <div className="border-2 border-dashed rounded-lg p-12 text-center border-gray-300">
              <Paperclip className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 text-sm">Arraste arquivos aqui ou clique para selecionar</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
