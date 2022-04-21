import { Content, HeaderContainer } from './styles'
import { RiAddBoxFill, RiSearchLine } from 'react-icons/ri'

import Logo from '../../images/logo.png'

export default function Header() {

    return (
        <HeaderContainer>
            <Content>

                <img className='logo' src={Logo} alt="" />

                <div className='input' >
                    <RiSearchLine />
                    <input placeholder='Search' type="text" />
                </div>

                <div className='infos' >
                    <div>
                        <button type="button"> < RiAddBoxFill/> Add Post</button>
                    </div>

                    <img className='user' src="https://github.com/gabrieldiasss.png" alt="" />
                </div>
            </Content>
        </HeaderContainer>
    )
}