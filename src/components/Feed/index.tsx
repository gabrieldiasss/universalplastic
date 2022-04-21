import { Container, Content, Post } from "./styles";
import { RiHeartLine, RiChat1Line } from 'react-icons/ri'

import Foto1 from '../../images/foto-1.jpg'
import Foto2 from '../../images/foto-2.jpg'
import Foto3 from '../../images/foto-3.jpg'
import Foto4 from '../../images/foto-4.jpg'

export function Feed() {

    return (
        <Container>
            <h1>Feed</h1>
            <Content>
                <Post>
                    <img src={Foto1} alt="" />

                    <footer>
                        <div>
                            <img src={Foto4} alt="" />
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

                <Post>
                    <img src={Foto2} alt="" />

                    <footer>
                        <div>
                            <img src={Foto4} alt="" />
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

                <Post>
                    <img src={Foto3} alt="" />

                    <footer>
                        <div>
                            <img src={Foto4} alt="" />
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