import Storie from "./Storie"

export default function Stories(){

    const storiesData = [
        {
            name : "9gag",
            imgUrl : "assets/img/9gag.svg"
        },{
            imgUrl : "assets/img/meowed.svg",
            name : "meowed"
        },{
            imgUrl : "assets/img/barked.svg",
            name : "barked"
        },{
            imgUrl : "assets/img/nathanwpylestrangeplanet.svg",
            name : "nathanwpylestrangeplanet"
        },{
            imgUrl : "assets/img/wawawicomics.svg",
            name : "wawawicomics"
        },{
            imgUrl : "assets/img/respondeai.svg",
            name : "respondeai"
        },{
            imgUrl : "assets/img/filomoderna.svg",
            name : "filomoderna"
        },{
            imgUrl : "assets/img/memeriagourmet.svg",
            name : "memeriagourmet"
        }
    ]
    return(
        <div className="stories">
            
        {
            storiesData.map((data, i)=>{
                return (<Storie key={i} name={data.name} imgUrl={data.imgUrl}/>);
            })
        }  
        
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}