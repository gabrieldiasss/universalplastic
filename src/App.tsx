import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { Container } from "./styles.app";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<>
			<GlobalStyle />
			<Container>
				<Sidebar />
				<Content />
			</Container>
		</>
	);
}

export default App;
