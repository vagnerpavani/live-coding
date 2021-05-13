import SideBarHeader from "./SideHeader"
import Suggestions from "./Suggestions"

export default function SideBar(){
    const userInfo = {
        userName : "Catana",
        nickName : "Catanacomics"
    }

    return (
        <div className="sidebar">
        
        <SideBarHeader userName={userInfo.userName} nickName={userInfo.nickName}/>
        <Suggestions />

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}