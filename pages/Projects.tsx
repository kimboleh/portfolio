import { useTranslation } from "react-i18next";

export default function Volunteer() {
    const { t } = useTranslation();
    return (
        <div>
        <h1 className="font__header-two color__primary-green">{t('Projects')}</h1>
        <div>
            <p className="font__section-subtitle">Projects I've made!</p>
        </div>
        </div>
    );
}