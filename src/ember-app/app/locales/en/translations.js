import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamat17БазаКлючейLForm from './forms/i-i-s-postamat17-база-ключей-l';
import IISPostamat17МестоположениеLForm from './forms/i-i-s-postamat17-местоположение-l';
import IISPostamat17ПользовательLForm from './forms/i-i-s-postamat17-пользователь-l';
import IISPostamat17ПостаматLForm from './forms/i-i-s-postamat17-постамат-l';
import IISPostamat17ПосылкаLForm from './forms/i-i-s-postamat17-посылка-l';
import IISPostamat17СлужбаДоставкиLForm from './forms/i-i-s-postamat17-служба-доставки-l';
import IISPostamat17УведомлениеLForm from './forms/i-i-s-postamat17-уведомление-l';
import IISPostamat17ХранениеLForm from './forms/i-i-s-postamat17-хранение-l';
import IISPostamat17ЯчейкаLForm from './forms/i-i-s-postamat17-ячейка-l';
import IISPostamat17БазаКлючейEForm from './forms/i-i-s-postamat17-база-ключей-e';
import IISPostamat17МестоположениеEForm from './forms/i-i-s-postamat17-местоположение-e';
import IISPostamat17ПользовательEForm from './forms/i-i-s-postamat17-пользователь-e';
import IISPostamat17ПостаматEForm from './forms/i-i-s-postamat17-постамат-e';
import IISPostamat17ПосылкаEForm from './forms/i-i-s-postamat17-посылка-e';
import IISPostamat17СлужбаДоставкиEForm from './forms/i-i-s-postamat17-служба-доставки-e';
import IISPostamat17УведомлениеEForm from './forms/i-i-s-postamat17-уведомление-e';
import IISPostamat17ХранениеEForm from './forms/i-i-s-postamat17-хранение-e';
import IISPostamat17ЯчейкаEForm from './forms/i-i-s-postamat17-ячейка-e';
import IISPostamat17БазаКлючейModel from './models/i-i-s-postamat17-база-ключей';
import IISPostamat17КлючModel from './models/i-i-s-postamat17-ключ';
import IISPostamat17МестоположениеModel from './models/i-i-s-postamat17-местоположение';
import IISPostamat17ПользовательModel from './models/i-i-s-postamat17-пользователь';
import IISPostamat17ПостаматModel from './models/i-i-s-postamat17-постамат';
import IISPostamat17ПосылкаModel from './models/i-i-s-postamat17-посылка';
import IISPostamat17РегистрПосылкиModel from './models/i-i-s-postamat17-регистр-посылки';
import IISPostamat17РегистрХранModel from './models/i-i-s-postamat17-регистр-хран';
import IISPostamat17СлужбаДоставкиModel from './models/i-i-s-postamat17-служба-доставки';
import IISPostamat17УведомлениеModel from './models/i-i-s-postamat17-уведомление';
import IISPostamat17ХранениеModel from './models/i-i-s-postamat17-хранение';
import IISPostamat17ЯчейкаModel from './models/i-i-s-postamat17-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat17-база-ключей': IISPostamat17БазаКлючейModel,
    'i-i-s-postamat17-ключ': IISPostamat17КлючModel,
    'i-i-s-postamat17-местоположение': IISPostamat17МестоположениеModel,
    'i-i-s-postamat17-пользователь': IISPostamat17ПользовательModel,
    'i-i-s-postamat17-постамат': IISPostamat17ПостаматModel,
    'i-i-s-postamat17-посылка': IISPostamat17ПосылкаModel,
    'i-i-s-postamat17-регистр-посылки': IISPostamat17РегистрПосылкиModel,
    'i-i-s-postamat17-регистр-хран': IISPostamat17РегистрХранModel,
    'i-i-s-postamat17-служба-доставки': IISPostamat17СлужбаДоставкиModel,
    'i-i-s-postamat17-уведомление': IISPostamat17УведомлениеModel,
    'i-i-s-postamat17-хранение': IISPostamat17ХранениеModel,
    'i-i-s-postamat17-ячейка': IISPostamat17ЯчейкаModel
  },

  'application-name': 'Postamat17',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat17',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat17',
          title: 'Postamat17'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        postamat17: {
          caption: 'Postamat17',
          title: 'Postamat17',
          'i-i-s-postamat17-база-ключей-l': {
            caption: 'База ключей',
            title: ''
          },
          'i-i-s-postamat17-уведомление-l': {
            caption: 'Уведомление',
            title: ''
          },
          'i-i-s-postamat17-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat17-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-postamat17-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat17-посылка-l': {
            caption: 'Посылка',
            title: ''
          },
          'i-i-s-postamat17-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-postamat17-местоположение-l': {
            caption: 'Местоположение',
            title: ''
          },
          'i-i-s-postamat17-ячейка-l': {
            caption: 'Ячейка',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat17-база-ключей-l': IISPostamat17БазаКлючейLForm,
    'i-i-s-postamat17-местоположение-l': IISPostamat17МестоположениеLForm,
    'i-i-s-postamat17-пользователь-l': IISPostamat17ПользовательLForm,
    'i-i-s-postamat17-постамат-l': IISPostamat17ПостаматLForm,
    'i-i-s-postamat17-посылка-l': IISPostamat17ПосылкаLForm,
    'i-i-s-postamat17-служба-доставки-l': IISPostamat17СлужбаДоставкиLForm,
    'i-i-s-postamat17-уведомление-l': IISPostamat17УведомлениеLForm,
    'i-i-s-postamat17-хранение-l': IISPostamat17ХранениеLForm,
    'i-i-s-postamat17-ячейка-l': IISPostamat17ЯчейкаLForm,
    'i-i-s-postamat17-база-ключей-e': IISPostamat17БазаКлючейEForm,
    'i-i-s-postamat17-местоположение-e': IISPostamat17МестоположениеEForm,
    'i-i-s-postamat17-пользователь-e': IISPostamat17ПользовательEForm,
    'i-i-s-postamat17-постамат-e': IISPostamat17ПостаматEForm,
    'i-i-s-postamat17-посылка-e': IISPostamat17ПосылкаEForm,
    'i-i-s-postamat17-служба-доставки-e': IISPostamat17СлужбаДоставкиEForm,
    'i-i-s-postamat17-уведомление-e': IISPostamat17УведомлениеEForm,
    'i-i-s-postamat17-хранение-e': IISPostamat17ХранениеEForm,
    'i-i-s-postamat17-ячейка-e': IISPostamat17ЯчейкаEForm
  },

});

export default translations;
