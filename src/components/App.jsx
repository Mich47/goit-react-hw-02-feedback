import { Statistics } from './Statistics/Statistics';
import data from '../assets/data.json';

export const App = () => {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
