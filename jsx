import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TeamAvailabilityApp from './TeamAvailabilityApp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamAvailabilityApp />} />
      </Routes>
    </Router>
  );
}
