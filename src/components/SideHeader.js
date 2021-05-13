export default function SideBarHeader({userName, nickName}){
    return(
        <div className="usuario">
          <img src="assets/img/catanacomics.svg" />
          <div className="texto">
            <strong>{userName}</strong>
            {nickName}
          </div>
        </div>
    )
}