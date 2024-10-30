import { LucideIcon } from 'lucide-react'

export default function SubmitButton({
  text,
  icon: Icon,
}: {
  text: String
  icon: LucideIcon
}) {
  return (
    <button className="bg-verdeClaro hover:bg-verdeEscuro hover:duration-200 flex flex-row justify-between items-center text-white hover:shadow-xl w-[128px] h-[42px] px-3">
      {text}
      <Icon className=" w-6 h-6"></Icon>
    </button>
  )
}
