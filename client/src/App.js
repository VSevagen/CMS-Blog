import "./App.css";
import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import Routes from "./components/Routes";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_SERVER_URL}`,
  cache: new InMemoryCache(),
  fetchOptions: {
    credentials: "include",
  },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
