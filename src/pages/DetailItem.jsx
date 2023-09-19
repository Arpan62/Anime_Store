import "./Detail.css";

export const DetailItem = (props) => {
  const { AnimeName, info, Poster } = props.data;

  return (
    <div className="DetailItem">
      <hr />
      <img src={Poster} alt="" />
      <div className="detaildescript">
        <b>{AnimeName}</b>
        <p>{info}</p>
      </div>
    </div>
  );
};
