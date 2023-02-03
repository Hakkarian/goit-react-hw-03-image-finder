import axios from "axios";
import { Component, useCallback, useEffect, useRef, useState } from "react";
import { Container } from ".";
import { fetchMyApi, getPhoto } from "../../services/api";
import Button from "../Button";
import ImageGallery from "../ImageGallery";
import Loader from "../Loader";
import SearchBar from "../SearchBar/SearchBar";
import { CenterCss } from "./App.styled";

axios.defaults.baseURL = "https://pixabay.com/api";

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const API_KEY = "31597946-edfd908ff545bca0474323597";


const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(items);


  const fetchMyApi = async ({ query = '', page = 1 } = {}) => {
  setStatus("pending")
  console.log(query, page);
  return await axios.get(
    `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (!response.ok) {
      Promise.reject(new Error("Nothind found"))
    }
    return response.data.hits;
  })
};

  useEffect(() => {

    if (query === '') {
      return;
    }
    try {
      setIsLoading(true)

      fetchMyApi({ query, page }).then(images => {
        console.log(images.length)
        if (images.length === 0) {
          setIsLoading(false);
          return setStatus("rejected")
        }
        setStatus("fulfilled");
        setItems(prevItems => [...prevItems, ...images])
        setIsLoading(false);
      }
      )
    } catch(error) {
      console.log(error.message)
    }
    
    // document.addEventListener('keydown', closeEscape)

    // return document.removeEventListener('keydown', closeEscape)
  }, [query, page])

  

  const handleLoad = () => {
      
        
    setPage(prevState => prevState + 1)
    console.log(page)

    }

  const handleSubmit = (e) => {
    e.preventDefault();


    const queryValue = e.target.elements.query.value;
      

    setPage(1);
    setQuery(prevQuery => queryValue !== prevQuery ? queryValue : alert("very clever, don't you? ;)"));
      setItems([])
      e.target.reset();
  }

  // //for modal

  // const close = () => {
  //   setIsModalOpen(false);
  // };

  // const closeEscape = (e) => {
  //   if (e.key === "Escape") close();
  // };

  // //

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />

      <Container>

        {query === '' && <CenterCss>Please, enter the name</CenterCss>}

        {items.length > 0 && <ImageGallery items={items} />}

        {isLoading && <Loader />}

        {status === "fulfilled" && (
          <Button text="Load more" onLoad={handleLoad}>
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



// export class App extends Component {
//     state = {
//         page: 1,
//         items: [],
//         query: '',
//         status: "",
//         error: null
//     }

//     async componentDidUpdate(prevProps, prevState) {
//         if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
//             console.log(this.state.query)
//             this.setState({ status: "pending" });
//                 const enterValue = await getPhoto(
//                     this.state.query,
//                     this.state.page,
//                 )
//                  this.setState((prevState) => ({
//                   items: prevState.items.concat(enterValue),
//                   status: "fulfilled",
//                 }));
//                 if (enterValue.length === 0) {
//                     this.setState({ status: "rejected" });
//                 }
//                 return;

//         }
//     }

//     handleLoad = () => {
        
//         this.setState(prevState => ({ page: prevState.page + 1, items: [...prevState.items] }))
//         console.log(this.state.page);
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//       this.setState(prevState => {
//         const queryValue = e.target.elements.query.value;

//         if (prevState.query === queryValue && prevState.items.length < 13) {

//           return ({
//             page: 1,
//             query: queryValue,
//           })
//         } 
//           return {
//             page: 1,
//             query: queryValue,
//             items: [],
//           }; 

//         })
//     }
//     toggleSmth = () => {
//         this.setState({isLoading: !this.state.isLoading})
//   }
//     render() {
//       const { items, status, query } = this.state;
//       console.log(this.state.items.length)
//         return (
//           <div>
//             <SearchBar onSubmit={this.handleSubmit} onChange={this.handleChange} />

//             <Container>
//               {query === "" && (
//                 <CenterCss>Please, enter the name</CenterCss>
//               )}

//               {this.state.items.length > 0 && <ImageGallery items={items} />}

//               {status === "pending" && <Loader />}

//               {status === "fulfilled" && (
//                 <Button text="Load more" onLoad={this.handleLoad}>
//                   Load more
//                 </Button>
//               )}

//               {status === "rejected" && (
//                 <CenterCss>An error occured rendering your page</CenterCss>
//               )}
//             </Container>
//           </div>
//         );
//     }
    
    
// }

export default App;