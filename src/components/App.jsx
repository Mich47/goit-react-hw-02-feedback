import { Feedback } from './Feedback';
import data from '../assets/data.json';

export const App = () => {
  return (
    <>
      <Feedback title="Upload stats" stats={data} />
    </>
  );
};
