import Post from './Post'
import Stories from './Stories'

export default function Feed(){

    const postsData = [
        {
            user : {
                username : "meowed",
                imgUrl : "assets/img/meowed.svg"
            },
            postContent : "assets/img/gato-telefone.svg",
            likes : {
                highlightImg : "assets/img/respondeai.svg",
                name : "respondeai",
                likesQtd : "101.523"
            }
        },{
            user : {
                username : "barked",
                imgUrl : "assets/img/barked.svg"
            },
            postContent : "assets/img/dog.svg",
            likes : {
                highlightImg : "assets/img/adorable_animals.svg",
                name : "adorable_animals",
                likesQtd : "99.159"
            }
        },
    ]

    return(
        <div className="esquerda">
            <Stories />

            <div className="posts">
                {
                    postsData.map((post, i)=>{
                        return (
                        <Post imgUrl={post.user.imgUrl}
                            username={post.user.username}
                            content={post.postContent} 
                            highlightImg={post.likes.highlightImg} 
                            highlightName={post.likes.name} 
                            likesQtd={post.likes.likesQtd}
                            key={i}
                        />)
                    })
                }
            </div>
      </div>
    )
}