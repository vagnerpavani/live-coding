export default function Suggestion({name, reason, imgUrl}){


    return (
        <div className="sugestao">
            <div className="usuario">
              <img src={imgUrl} />
              <div className="texto">
                <div className="nome">{name}</div>
                <div className="razao">{reason}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}