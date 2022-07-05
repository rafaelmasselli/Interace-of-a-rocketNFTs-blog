import "./style.scss";

type ICardAstronaut = {
  title: string;
  name: string;
  img: string;
  RKT: string;
};

export function CardAstronaut({ RKT, img, name, title }: ICardAstronaut) {
  return (
    <div className="box-astronaut">
      <div className="title-astronaut">
        <h1>{title}</h1>
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="subtitle-astronaut">
        <p>{name}</p>
        <p className="subtitle-red">{RKT}</p>
      </div>
      <figure>
        <img src={img} alt={name} />
      </figure>
    </div>
  );
}
