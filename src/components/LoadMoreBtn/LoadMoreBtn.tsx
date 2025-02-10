import s from "./LoadMoreBtn.module.css";

interface Props {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={s.container}>
      <button onClick={onClick} className={s.btn} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
