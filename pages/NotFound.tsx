import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();
    return (
        <div>
        <h1 className="font__header-two color__primary-green">{t('Page Not Found')}</h1>
        <div>
            <p className="font__section-subtitle">Please navigate to the <a href="/">homepage</a>.</p>
        </div>
        </div>
    );
}