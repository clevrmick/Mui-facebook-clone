import { Navbar, Feed, RightBar, Sidebar } from './components';
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </div>
  );
}

export default App;
