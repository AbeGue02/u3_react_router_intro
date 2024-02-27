import { Routes, Route } from 'react-router-dom'
import Home from "./Home";
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

export default function Main () {
    return (
        <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/componentA'} element={<ComponentA/>}/>
        <Route path={'/componentB'} element={<ComponentB/>}/>
      </Routes>
    )
}