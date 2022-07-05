import "./style.scss";

type ICardArtist = {
  name: string;
  img: string;
  subtitle: string;
};

export function CardArtist({ img, name, subtitle }: ICardArtist) {
  return (
    <div className="card-artist">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="container-text-artist">
        <p>{name}</p>
        <p className="text-emphasis">{subtitle}</p>
      </div>
    </div>
  );
}
