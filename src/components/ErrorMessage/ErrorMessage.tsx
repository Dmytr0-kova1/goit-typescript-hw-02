import s from "./ErrorMessage.module.css";

interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
