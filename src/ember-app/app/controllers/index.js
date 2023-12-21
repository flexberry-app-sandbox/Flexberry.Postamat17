import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat17.caption'),
          title: i18n.t('forms.application.sitemap.postamat17.title'),
          children: [{
            link: 'i-i-s-postamat17-база-ключей-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-база-ключей-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-база-ключей-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-postamat17-уведомление-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-уведомление-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-уведомление-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-postamat17-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-хранение-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postamat17-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-пользователь-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-postamat17-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-постамат-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-postamat17-посылка-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-посылка-l.title'),
            children: null
          }, {
            link: 'i-i-s-postamat17-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-служба-доставки-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-postamat17-местоположение-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-местоположение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-местоположение-l.title'),
            children: null
          }, {
            link: 'i-i-s-postamat17-ячейка-l',
            caption: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat17.i-i-s-postamat17-ячейка-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})