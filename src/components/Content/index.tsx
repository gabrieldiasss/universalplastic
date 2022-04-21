import { Feed } from "../Feed";
import Header from "../Header";
import { Storys } from "../Stories";
import { Suggestions } from "../Suggestions";
import { Container } from "./styles";

export default function Content() {
    return (
        <Container>
            <Header />
            <Storys />
            <Suggestions />
            <Feed />
        </Container>
    )
}