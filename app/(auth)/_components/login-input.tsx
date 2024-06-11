import { Input } from "@/components/ui/input";

interface InputFomrProps {
    type: string;
    id: string;
    label: string
}

const InputForm = ({
    type,
    id,
    label
}: InputFomrProps) => {
    return (
        <div>
            <Input
                className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded outline-none focus:outline-0"
                type={type}
                id={id}
                placeholder={label}
                required />
        </div>
    )
}

export default InputForm;