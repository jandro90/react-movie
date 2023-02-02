import { useTranslation } from "react-i18next";

export const Loader = () => {
    const { t } = useTranslation();

    return (
        <div className="text-center m-2">
            <h2> { t('LOADER.LOADING_DATA') } <i className="fa fa-refresh fa-spin" aria-hidden="true"></i></h2>
            <p> { t('LOADER.BE_PATIENT') } </p>
        </div>
    );
};
