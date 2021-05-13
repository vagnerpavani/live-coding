import Suggestion from './Suggestion'
export default function Suggestions(){

    const suggestionsData = [
        {
            name : "bad.vibes.memes",
            reason : "Segue você",
            imgUrl : "assets/img/bad.vibes.memes.svg"
        },
        {
            name : "chibirdart",
            reason : "Segue você",
            imgUrl : "assets/img/chibirdart.svg"
        },
        {
            name : "razoesparaacreditar",
            reason : "Novo no Instagram",
            imgUrl : "assets/img/razoesparaacreditar.svg"
        },{
            name : "adorable_animals",
            reason : "Segue você",
            imgUrl : "assets/img/adorable_animals.svg"
        },{
            name : "smallcutecats",
            reason : "Segue você",
            imgUrl : "assets/img/smallcutecats.svg"
        },
        
    ]

    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

            {
                suggestionsData.map(({name, reason, imgUrl}, i)=>{
                    return (<Suggestion name={name} reason={reason} imgUrl={imgUrl} key={i}/>)
                })
            }
          

        </div>
    )
}