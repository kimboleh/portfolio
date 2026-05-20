import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useParams, Navigate, Outlet } from "react-router-dom";
import routes from './routes';

/** Layout wrapper that extracts the locale */
function LocaleWrapper() {
    const { t, i18n } = useTranslation();
    const { locale } = useParams<{ locale: string }>();

    // ensure locale is one we support (currently only Spanish)
    const supportedLocales = ['es'];
    if (!supportedLocales.includes(locale || '')) {
        return <Navigate to="/" replace />;
    }

    // set the language on first render or when locale changes
    useEffect(() => {
        if (locale && i18n.language !== locale) {
        i18n.changeLanguage(locale);
        }
    }, [locale, i18n]);

    return (
        <>
        <Outlet />
        </>
    );
    }

    function DefaultLayout() {
        const { t, i18n } = useTranslation();

        // set language to English by default if no other locale is specified
        useEffect(() => {
            if (i18n.language !== 'en') {
            i18n.changeLanguage('en');
            }
        }, [i18n]);

        return (
            <>
            <Outlet />
            </>
        );
    }

    export default function App() {
        return (
            <Routes>
            {/* Default English routes */}
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

            {/* Localized routes with an '/es' */}
            <Route path="/:locale" element={<LocaleWrapper />}>
                {routes.map(({ path, element }) => (
                <Route
                    key={`localized-${path || 'index'}`}
                    index={path === ''}
                    path={path || undefined}
                    element={element}
                />
                ))}
            </Route>
            </Routes>
        );
}