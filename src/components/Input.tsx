interface InputProps{
    value: string;
    onChange: (value: string) => void
}

const Input: React.FC<InputProps> = ({value, onChange}) => {
  return (
    <input  className="input-field"  type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Введите город"></input>
  )
}

export default Input