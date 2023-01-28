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
        status: "",
        error: null
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

    handleLoad = () => {
        
        this.setState(prevState => ({ page: prevState.page + 1, items: [...prevState.items] }))
        console.log(this.state.page);
    }

    handleSubmit = (e) => {
        e.preventDefault();

      this.setState(prevState => {
        const queryValue = e.target.elements.query.value;

        if (prevState.query === queryValue && prevState.items.length < 13) {

          return ({
            page: 1,
            query: queryValue,
          })
        } 
          return {
            page: 1,
            query: queryValue,
            items: [],
          }; 

        })
    }
    toggleSmth = () => {
        this.setState({isLoading: !this.state.isLoading})
  }
    render() {
      const { items, status, query } = this.state;
      console.log(this.state.items.length)
        return (
          <div>
            <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />

            <Container>
              {query === "" && (
                <CenterCss>Please, enter the name</CenterCss>
              )}

              {this.state.items.length > 0 && <ImageGallery items={items} />}

              {status === "pending" && <Loader />}

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