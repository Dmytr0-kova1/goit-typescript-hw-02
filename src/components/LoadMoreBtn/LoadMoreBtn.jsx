import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ click }) => {
  return (
    <div className={s.container}>
      <button onClick={click} className={s.btn} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
