import { Badge } from './ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Phone, Mail, Copy, Plus } from 'lucide-react'

interface ClientSidebarProps {
  companyName: string
  companySubtitle: string
  contactName: string
  contactRole: string
  phone?: string
  landline?: string
  email?: string
}

export function ClientSidebar({
  companyName,
  companySubtitle,
  contactName,
  contactRole,
  phone,
  landline,
  email,
}: ClientSidebarProps) {
  return (
    <aside className="w-80">
      <div className="bg-white border-r min-h-screen">
        {/* Cliente Section */}
        <div className="p-6 border-b">
          <Badge variant="outline" className="mb-4">Cliente</Badge>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">{companyName}</h3>
              <p className="text-xs text-gray-500 mt-1">{companySubtitle}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 text-sm">{contactName}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{contactRole}</p>
            </div>

            <div className="space-y-2">
              {phone && (
                <div className="flex items-center justify-between text-xs group">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-gray-500">Celular</span>
                    <span className="text-gray-900 font-medium">{phone}</span>
                  </div>
                  <button>
                    <Copy className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              )}
              {landline && (
                <div className="flex items-center justify-between text-xs group">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-gray-500">Telefone</span>
                    <span className="text-gray-900 font-medium">{landline}</span>
                  </div>
                  <button>
                    <Copy className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              )}
              {email && (
                <div className="flex items-center justify-between text-xs group">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Mail className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    <span className="text-gray-500 shrink-0">E-mail</span>
                    <span className="text-gray-900 font-medium truncate">{email}</span>
                  </div>
                  <button>
                    <Copy className="h-3.5 w-3.5 text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Vendas Realizadas Section */}
        <div className="p-6 border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="vendas" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Vendas realizadas</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Total vendido</div>
                    <div className="text-lg font-semibold text-gray-900">R$ 523,00</div>
                  </div>
                  <button className="w-full py-2 px-3 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
                    <Plus className="h-4 w-4" />
                    Vincular pedido
                  </button>
                  <div className="border-t pt-3">
                    <div className="text-xs text-gray-500 mb-2">Valor líquido</div>
                    <div className="text-2xl font-bold text-green-600">R$ 2500,00</div>
                    <div className="grid grid-cols-3 gap-2 mt-3 text-xs">
                      <div>
                        <div className="text-gray-500">Lucro bruto</div>
                        <div className="font-semibold">R$500,00</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Margem</div>
                        <div className="font-semibold">10%</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Qdte de itens</div>
                        <div className="font-semibold">45</div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Exemplo de campo Section */}
        <div className="p-6 border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="campos" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Exemplo de campo</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-gray-300" />
                    <span className="text-sm text-gray-700">Exemplo de campo</span>
                  </div>
                  <div className="text-sm text-gray-600">Exemplo de campo 2</div>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Exibir todos os campos etapa
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Anexos Section */}
        <div className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="anexos" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Anexos</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-sm text-gray-500">Nenhum anexo</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </aside>
  )
}
