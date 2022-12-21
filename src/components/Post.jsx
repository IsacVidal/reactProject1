import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/IsacVidal.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Isac Vidal</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='16 de Dezembro às 19:05' dateTime='2022-12-16 19:04:24'> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>
                <p>👉<a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'/>

                <footer>
                    <button type='Submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}