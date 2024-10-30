import { ChangeEvent, useState } from 'react'
import Input from '@/app/interfaces/IImputField'
import { X } from 'lucide-react'

export default function InputField({
  name,
  placeholder,
  icon: Icon,
  value,
  onChange,
}: Input) {
  const [inputValue, setImputvalue] = useState(value)

  const handleClear = () => {
    setImputvalue('')
  }

  return (
    <div className="relative flex flex-col mx-4">
      <div className="relative flex items-center">
        <input
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="bg-white flex w-full h-[42px] rounded-full shadow-3xl px-12 outline-none"
        />
        <Icon className="absolute left-3 text-cinzaTexto w-6 h-6 hover:text-verdeEscuro hover:duration-300" />
        {inputValue && (
          <X
            onClick={handleClear}
            className="absolute right-3 text-verdeClaro w-6 h-6 cursor-pointer hover:text-verdeEscuro hover:duration-100 "
          />
        )}
      </div>
    </div>
  )
}
