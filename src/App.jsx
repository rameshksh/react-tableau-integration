import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
export default function App(){return(<div><nav>
<Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/inventory">Inventory</Link>
</nav>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/inventory" element={<Inventory/>}/>
</Routes>
</div>);}