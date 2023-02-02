import { useTranslation } from "react-i18next";

export const ErrorMsg = () => {
    const { t } = useTranslation();

    return (
        <div className="text-center m-2">
            <h2>{t('ERROR.IMPOSIBLE_LOAD_DATA')}</h2>
            <p>{t('ERROR.REFRESH_TRY_AGAIN')}</p>
        </div>
    );
};
