import logo from "./logo.svg";
import "./App.css";
import { InMemoryCache, gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/client";
import Overview from "./components/Overview";
import About from "./components/About";
import Projects from "./components/Projects";
import Admin from "./components/Admin";
import BlogFormat from "./components/BlogFormat";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/** Simple app that just shows the LightsOut game. */
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql/",
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

// client
//   .query({
//     query: gql`
//       query blogs {
//         blogs {
//           title
//           text
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result.data.blogs[0].title));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Switch>
          <Route path="/" component={Overview} exact />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/admin" component={Admin} />
          <Route path="/GNOMEAsia2019" component={BlogFormat} />
          <Route path="/SchoolVisit" component={BlogFormat} />
          <Route path="/IncubateINDHackathon,Kochi" component={BlogFormat} />
          <Route
            path="/ERROR2002HY000Can'tconnecttoMySQLserver"
            component={BlogFormat}
          />
          <Route path="/MyFirstFossTalk!!!" component={BlogFormat} />
          <Route path="/Part1:HowtoinstallMediaWiki" component={BlogFormat} />
          <Route
            path="/Pythonasthefirstprogramminglangaugetolearn"
            component={BlogFormat}
          />
          <Route path="/MyFirstFossTalk!!!" component={BlogFormat} />
          <Route component={Error} />
        </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;
