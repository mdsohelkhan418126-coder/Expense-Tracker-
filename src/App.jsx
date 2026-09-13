import { appRoutes } from './routes/appRoutes';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const route = useRoutes(appRoutes);
  return route;
};

export default App;
