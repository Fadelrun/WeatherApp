interface ButtonProps{
    onClick: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return <button className="button-container" onClick={onClick}>{label}</button>
}

export default Button