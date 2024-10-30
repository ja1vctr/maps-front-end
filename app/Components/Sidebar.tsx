import { ChangeEvent, FormEvent, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
  Satellite,
  Calendar,
  Globe,
  LucideMousePointer2,
  Search,
} from 'lucide-react'
import InputField from './InputField'
import SubmitButton from './SubmitButton'

export default function Sidebar({ onSubmit }: { onSubmit: any }) {
  const [expanded, setExpanded] = useState(true)
  const [formValues, setFormValues] = useState({
    satelite: '',
    dataInicial: '',
    dataFinal: '',
    latitude: '',
    longitude: '',
    buffer: '',
    metodoV: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(formValues)
    console.log(formValues)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleClear = () => {
    setFormValues({
      buffer: '',
      metodoV: '',
      latitude: '',
      longitude: '',
      satelite: '',
      dataFinal: '',
      dataInicial: '',
    })
  }

  return (
    <aside className=" font-medium text-xl bg-bgCinza flex flex-col h-screen w-1/4 rounded-r-3xl py-10 drop-shadow-2xl">
      <h1 className="mx-8 text-verdeEscuro">NOME DO SISTEMA</h1>
      <form onSubmit={handleSubmit} className="mx-4">
        <div className="flex flex-col mt-10 gap-6">
          <InputField
            name="satelite"
            placeholder="Escolha um satélite"
            icon={Satellite}
            value={formValues.satelite}
            onChange={handleChange}
          />
          <InputField
            name="dataInicial"
            placeholder="Data inicial"
            icon={Calendar}
            value={formValues.dataInicial}
            onChange={handleChange}
          />
          <InputField
            name="dataFinal"
            placeholder="Data final"
            icon={Calendar}
            value={formValues.dataFinal}
            onChange={handleChange}
          />
          <InputField
            name="latitude"
            placeholder="Latitude"
            icon={Globe}
            value={formValues.latitude}
            onChange={handleChange}
          />
          <InputField
            name="longitude"
            placeholder="Longitude"
            icon={Globe}
            value={formValues.longitude}
            onChange={handleChange}
          />
          <InputField
            name="buffer"
            placeholder="Buffer"
            icon={Satellite}
            value={formValues.buffer}
            onChange={handleChange}
          />
          <InputField
            name="metodoV"
            placeholder="Método V"
            icon={LucideMousePointer2}
            value={formValues.metodoV}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end px-8 mt-10 hover:text-verdeEscuro hover:duration-100">
          <button className="hover:underline" onClick={handleClear}>
            Limpar campos
          </button>
        </div>

        <div className="flex w-full justify-center mt-10">
          <SubmitButton text={'Pesquisar'} icon={Search} />
        </div>
      </form>
    </aside>
  )
}
