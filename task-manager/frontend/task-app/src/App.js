import { Provider } from 'react-redux';
import TaskRoutes from './routes/TaskRoutes';
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <TaskRoutes />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
