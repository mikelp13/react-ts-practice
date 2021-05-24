import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import UsersPage from './components/UserPage'
import TodosPage from './components/TodosPage'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users" style={{ marginRight: 10 }}>
            USERS
          </NavLink>
          <NavLink to="/todos">TODO LIST</NavLink>
        </div>
        <Route path={'/users'} exact>
          <UsersPage />
        </Route>
        <Route path={'/todos'} exact>
          <TodosPage />
        </Route>
        <Route path={'/users/:id'}>
          <UserItemPage />
        </Route>
        <Route path={'/todos/:id'}>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App

/* <EventsExample />
      <Card
        onClick={() => console.log('click')}
        width="200px"
        height="200px"
        variant={CardVariant.primary}
      >
        <button>Click me</button>
      </Card> */
