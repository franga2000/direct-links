import {extend} from 'flarum/extend';
import app from 'flarum/app';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ComposerPage from './components/ComposerPage';

app.initializers.add('flagrow-direct-links', () => {
    app.routes.flagrowDirectLinksLogin = {
        path: '/login',
        component: LoginPage
    };
    app.routes.flagrowDirectLinksSignup = {
        path: '/signup',
        component: SignupPage
    };
    app.routes.flagrowDirectLinksComposer = {
        path: '/composer',
        component: ComposerPage
    };
});
