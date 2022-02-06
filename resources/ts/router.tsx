import React,{ useEffect } from "react"
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    RouteProps,
    Redirect
} from "react-router-dom"
import TaskPage from './pages/tasks'
import HelpPage from './pages/help'
import LoginPage from './pages/login'
import { useLogout, useUser } from "./queries/AuthQuery"
import { useAuth } from "./hooks/AuthContext"

const Router = () => {
    const logout = useLogout()
    const { isAuth, setIsAuth } = useAuth()
    const { isLoading, data: authUser } = useUser()

    useEffect(() => {
        if (authUser) {
            setIsAuth(true)
        }
    },[authUser])


    const GuardRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/login" />
            return <Route {...props} />
    }

    const LoginRoute = (props: RouteProps) => {
        if (isAuth) return <Redirect to="/" />
        return <Route {...props} />
    }

    const navigationHeader = (
        <header className="global-head">
            <ul>
                <li><Link to="/">ホーム</Link></li>
                <li><Link to="/help">ヘルプ</Link></li>
                <li onClick={() => logout.mutate()}><span>ログアウト</span></li>
            </ul>
        </header>
    )

    const loginNavigation = (
        <header className="global-head">
            <ul>
                <li><Link to="/help">ヘルプ</Link></li>
                <li><Link to="/login">ログイン</Link></li>
            </ul>
        </header>
    )

    if (isLoading) return <div className="loader"></div>

    return (
        <BrowserRouter>
                { isAuth ? navigationHeader : loginNavigation }
                <Switch>
                    <Route path="/help">
                        <HelpPage />
                    </Route>
                    <LoginRoute path="/login">
                        <LoginPage />
                    </LoginRoute>
                    <GuardRoute path="/">
                        <TaskPage />
                    </GuardRoute>
                </Switch>
        </BrowserRouter>
    )
}
export default Router
