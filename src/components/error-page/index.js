import {Helmet} from 'react-helmet';
import { useTranslation } from 'react-i18next';

import ID from '../ID.jsx';
import ItemSearch from '../item-search/index.js';

import './index.css';

function ErrorPage(props) {
    const { t } = useTranslation();
    return [
        <Helmet
            key = {'loot-tier-helmet'}
        >
            <meta charSet="utf-8" />
            <title>
                {t(`Page not found - Escape from Tarkov`)}
            </title>
            <meta
                name="description"
                content= {t(`This is not the page you are looking for`)}
            />
        </Helmet>,
        <div
            className="page-wrapper error-page"
            key = {'display-wrapper'}
        >
            <h1>
                {t(`Sorry, that page doesn't exist!`)}
            </h1>
            <ItemSearch
                showDropdown
            />
        </div>,
        <ID
            key = {'session-id'}
            sessionID = {props.sessionID}
        />
    ];
};

export default ErrorPage;


