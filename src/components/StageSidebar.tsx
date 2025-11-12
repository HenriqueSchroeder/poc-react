import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { CustomField } from './CustomField'

export function StageSidebar() {
  return (
    <aside className="w-80">
      <div className="bg-white border-l min-h-screen">
        {/* Campos da etapa Section */}
        <div className="p-6 border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="campos-etapa" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Campos da etapa</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="space-y-1">
                  <CustomField label="Label" />
                  <CustomField label="Label" expanded />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Financeiro Section */}
        <div className="p-6 border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="financeiro" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Financeiro</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-sm text-gray-500">Sem informações financeiras</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Classificação gestões ativos Section */}
        <div className="p-6 border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="classificacao" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Classificação gestões ativos</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-sm text-gray-500">Sem classificações</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Histórico e potencial do cliente Section */}
        <div className="p-6 border-b">
          <Accordion type="single" collapsible>
            <AccordionItem value="historico" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Histórico e potencial do cliente</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-sm text-gray-500">Sem histórico</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Clientes ativos próximos Section */}
        <div className="p-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="clientes-proximos" className="border-0">
              <AccordionTrigger className="p-0 hover:no-underline">
                <span className="text-sm font-medium text-gray-700">Clientes ativos próximos</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="text-sm text-gray-500">Sem clientes próximos</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </aside>
  )
}
