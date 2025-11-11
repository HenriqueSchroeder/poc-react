import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">
        Bem-vindo ao React + TanStack Router
      </h1>
      <p className="text-lg">
        Estrutura base configurada e pronta para uso!
      </p>
    </div>
  )
}
