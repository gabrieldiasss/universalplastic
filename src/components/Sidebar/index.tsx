import { Container } from "./styles";
import { RiDashboardLine, RiSearch2Line, RiChat3Line, RiNotification2Line, RiSendPlaneLine, RiSettings3Fill} from 'react-icons/ri'

import Logo from '../../images/logo.png'

export default function Sidebar() {

    return (
        <Container>
            <img src={Logo} alt="" />

            <nav>
                <li> <RiDashboardLine/> Feed</li>
                <li> <RiSearch2Line/> Explore</li>
                <li> <RiSendPlaneLine /> Direct</li>
                <li> <RiNotification2Line /> Notifications</li>
                <li> <RiSettings3Fill /> Settings</li>
            </nav>

        </Container>
    )
}