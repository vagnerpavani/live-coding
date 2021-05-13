export default function Post({imgUrl, username, content, highlightImg, highlightName, likesQtd}){
    return (
        <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src={imgUrl} />
                {username}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={content} />
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={highlightImg} />
                <div className="texto">
                  Curtido por <strong>{highlightName}</strong> e <strong>outras {likesQtd} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}