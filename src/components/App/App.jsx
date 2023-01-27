import { Component } from "react";
import { Container } from ".";
import { getPhoto } from "../../services/api";
import Button from "../Button";
import ImageGallery from "../ImageGallery";
import Loader from "../Loader";
import SearchBar from "../SearchBar/SearchBar";
import { CenterCss } from "./App.styled";




export class App extends Component {
    state = {
        page: 1,
        items: [],
        query: '',
        status: "idle",
        error: null
    }
    async componentDidMount() {
        this.setState({ status: "idle" });
    }
    async componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
            console.log(this.state.query)
            this.setState({ status: "pending" });
                const enterValue = await getPhoto(
                    this.state.query,
                    this.state.page,
                )
                 this.setState((prevState) => ({
                  items: prevState.items.concat(enterValue),
                  status: "fulfilled",
                }));
                if (enterValue.length === 0) {
                    this.setState({ status: "rejected" });
                }
                return;

        }
    }

    handleLoad = async () => {
        
        this.setState(prevState => ({ page: prevState.page + 1, items: [...prevState.items] }))
        console.log(this.state.page);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({
          page: 1,
            query: e.target.elements.query.value,
            items: []
        });

    }
    toggleSmth = () => {
        this.setState({isLoading: !this.state.isLoading})
    }

    render() {
        const { items, status } = this.state;
        return (
          <div>
            <SearchBar onSubmit={this.handleSubmit} />

            <Container>
              {status === "idle" && (
                <CenterCss>Please, enter the name</CenterCss>
              )}

              {status === "pending" && <Loader />}

              {status === "fulfilled" && <ImageGallery items={items} />}
              {status === "fulfilled" && (
                <Button text="Load more" onLoad={this.handleLoad}>
                  Load more
                </Button>
              )}

              {status === "rejected" && (
                <CenterCss>An error occured rendering your page</CenterCss>
              )}
            </Container>
          </div>
        );
    }
    
    
}

export default App;