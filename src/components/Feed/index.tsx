import { Container, Content, Post } from "./styles";
import { RiHeartLine, RiChat1Line } from 'react-icons/ri'

export function Feed() {

    return (
        <Container>
            <h1>Feed</h1>
            <Content>
                <Post>
                    <img src="https://github.com/diego3g.png" alt="" />

                    <footer>
                        <div>
                            <img src="https://github.com/diego3g.png" alt="" />
                        </div>

                        <div className="engagement" >
                            <div className="icon" >
                                <RiHeartLine />
                                <span>54k</span>
                            </div>
                           
                            <div className="icon" >
                                <RiChat1Line />
                                <span>298</span>
                            </div>
                           
                        </div>
                        
                    </footer>
                </Post>
            </Content>
        </Container>
    )
}