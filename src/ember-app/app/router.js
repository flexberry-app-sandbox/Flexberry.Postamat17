import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat17-база-ключей-l');
  this.route('i-i-s-postamat17-база-ключей-e',
  { path: 'i-i-s-postamat17-база-ключей-e/:id' });
  this.route('i-i-s-postamat17-база-ключей-e.new',
  { path: 'i-i-s-postamat17-база-ключей-e/new' });
  this.route('i-i-s-postamat17-местоположение-l');
  this.route('i-i-s-postamat17-местоположение-e',
  { path: 'i-i-s-postamat17-местоположение-e/:id' });
  this.route('i-i-s-postamat17-местоположение-e.new',
  { path: 'i-i-s-postamat17-местоположение-e/new' });
  this.route('i-i-s-postamat17-пользователь-l');
  this.route('i-i-s-postamat17-пользователь-e',
  { path: 'i-i-s-postamat17-пользователь-e/:id' });
  this.route('i-i-s-postamat17-пользователь-e.new',
  { path: 'i-i-s-postamat17-пользователь-e/new' });
  this.route('i-i-s-postamat17-постамат-l');
  this.route('i-i-s-postamat17-постамат-e',
  { path: 'i-i-s-postamat17-постамат-e/:id' });
  this.route('i-i-s-postamat17-постамат-e.new',
  { path: 'i-i-s-postamat17-постамат-e/new' });
  this.route('i-i-s-postamat17-посылка-l');
  this.route('i-i-s-postamat17-посылка-e',
  { path: 'i-i-s-postamat17-посылка-e/:id' });
  this.route('i-i-s-postamat17-посылка-e.new',
  { path: 'i-i-s-postamat17-посылка-e/new' });
  this.route('i-i-s-postamat17-служба-доставки-l');
  this.route('i-i-s-postamat17-служба-доставки-e',
  { path: 'i-i-s-postamat17-служба-доставки-e/:id' });
  this.route('i-i-s-postamat17-служба-доставки-e.new',
  { path: 'i-i-s-postamat17-служба-доставки-e/new' });
  this.route('i-i-s-postamat17-уведомление-l');
  this.route('i-i-s-postamat17-уведомление-e',
  { path: 'i-i-s-postamat17-уведомление-e/:id' });
  this.route('i-i-s-postamat17-уведомление-e.new',
  { path: 'i-i-s-postamat17-уведомление-e/new' });
  this.route('i-i-s-postamat17-хранение-l');
  this.route('i-i-s-postamat17-хранение-e',
  { path: 'i-i-s-postamat17-хранение-e/:id' });
  this.route('i-i-s-postamat17-хранение-e.new',
  { path: 'i-i-s-postamat17-хранение-e/new' });
  this.route('i-i-s-postamat17-ячейка-l');
  this.route('i-i-s-postamat17-ячейка-e',
  { path: 'i-i-s-postamat17-ячейка-e/:id' });
  this.route('i-i-s-postamat17-ячейка-e.new',
  { path: 'i-i-s-postamat17-ячейка-e/new' });
});

export default Router;
