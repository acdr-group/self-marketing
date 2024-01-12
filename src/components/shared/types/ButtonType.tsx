interface ButtonType {
    label: string
    startIcon?: any
    endIcon?: any
    variant: "outlined" | "contained" | "text"
    onClick?: () => void
}

export default ButtonType