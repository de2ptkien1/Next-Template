import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { storeInitialState } from './initialConfig/storeInitialState'
import { Provider } from 'react-redux'
import Home from '@/pages/index'
import configureStore, { MockStore } from 'redux-mock-store'
import { increment } from '@/store/slice/counterSlice'

const mockStore = configureStore()
jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      locale: '',
    });
  },
}))
jest.mock('@/assets/icons/upload.svg', () => 'svg')

describe('Home', () => {
  let store: MockStore, component
  beforeEach(() => {
    store = mockStore(storeInitialState)
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    store.dispatch = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }))
    component = render(<Provider store={store}><Home /></Provider>)
  })
  it('should render with given state from Redux store', () => {
    const heading = component.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })
    expect(heading).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    const incrementNumberButton = screen.getByRole('button', { name: 'Counter + 1' })
    fireEvent.click(incrementNumberButton)
  });

  it('should dispatch an action on button click', async () => {
    await component.getByRole('button').click()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(increment())
    // expect(store.getState().counter.value).toBe(1)
  });

  // How to test React-Redux connected Components : https://www.robinwieruch.de/react-connected-component-test/
  // https://ogzhanolguncu.com/blog/testing-react-redux-toolkit-with-typescript
})