import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('EN', () => import('./pages/lang/en.json'));
register('RU', () => import('./pages/lang/ru.json'));

init({
  fallbackLocale: 'EN',
  initialLocale: getLocaleFromNavigator(),
});