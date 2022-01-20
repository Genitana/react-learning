import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Main from "../7-ref/components/Main";
import RefDemo1 from "./components/forward-ref-demo/Demo1";

export default function Page () {

    const routeMatch = useRouteMatch();
    const {path, url} = routeMatch;

    console.log('routeMatch', routeMatch);
    

    return (
    <div>
        <hr></hr>
        <ul>
            <li>
                <Link to={`${url}/3ways`}>类组件获取 Ref 三种方式</Link>
            </li>
            <li>
                <Link to={`${url}/demo1`}>ref不能通过props传递</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path={`${path}/3ways`}>
                <h2>类组件获取 Ref 三种方式</h2>
                <Main></Main>
            </Route>
            <Route exact path={`${path}/demo1`}>
                <h2>ref不能通过props传递</h2>
                <RefDemo1></RefDemo1>
            </Route>
        </Switch>
    </div>)
}