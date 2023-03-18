import { Button } from "@mui/material";

export default function ButtonHandle(props) {
  const { variant, color, label, style, id, onClick, disabled } = props;
  if (variant == "" || variant == null) {
    variant = "contained";
  }
  return (
    <Button
      variant={variant}
      id={id}
      color={color}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
