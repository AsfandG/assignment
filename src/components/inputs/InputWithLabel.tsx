import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IProps {
  label: string;
  type: string;
  placeholder: string;
}

export function InputWithLabel({ label, type, placeholder }: IProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
      <Label htmlFor="email" className="text-white text-xs">
        {label}
      </Label>
      <Input type={type} placeholder={placeholder} className="bg-gray-100" />
    </div>
  );
}
