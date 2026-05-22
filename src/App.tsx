import { Routes, Route, Outlet } from "react-router-dom";
import routes from './routes';

function DefaultLayout() {
    return (
        <>
        <Outlet />
        </>
    );
}

export default function App() {
    return (
        <Routes>
            {/* Default English  -
              * there's room for i18n here if needed in the future
              */}
            <Route element={<DefaultLayout />}>
                {routes.map(({ path, element }) => (
                <Route
                    key={`en-${path || 'index'}`}
                    index={path === ''}
                    path={path || undefined}
                    element={element}
                />
                ))}
            </Route>
        </Routes>
    );
}