/**
 * Created by rob on 6/20/17.
 */
import ReactGA from 'react-ga'
import config from '../config'

export const initGA = () => {
  ReactGA.initialize(config.googleAnalytics, {
    debug: !config.isProduction,
  })
};

export const logPageView = (
  pageName = window.location.pathname + window.location.search
) => {
  ReactGA.set({page: pageName});
  ReactGA.pageview(pageName)
};

export const trackCustomEvent = (category, action) =>
  ReactGA.event({category, action});

export default undefined