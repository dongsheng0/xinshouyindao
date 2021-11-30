import React, { useEffect } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { userRoutes } from "../router";
const Main = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    // const ignorePath = [
    //   /\/report\/detail/,
    //   /^(\/portal\/|\/projectContent\/portal\/edit)/,
    // ]
    // if (ignorePath.every((p) => !p.test(pathname))) {
    //   document.title = '奥丁分析平台'
    // }
  }, [pathname])

  return (
    <Switch>
      {userRoutes.map((item, i) => (
        <Route
          key={i}
          exact
          path={item.path}
          component={item.component}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  )
}

export default Main
