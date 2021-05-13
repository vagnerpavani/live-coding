export default function Storie(props){

    return(
        <div className="story">
            <div className="imagem">
              <img src={props.imgUrl} />
            </div>
            <div className="usuario">
              {props.name}
            </div>
          </div>
    )
}