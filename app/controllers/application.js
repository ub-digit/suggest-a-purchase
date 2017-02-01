import Ember from 'ember';

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  queryParams: ['lang'],
  lang: 'sv',

  languageObserver: Ember.observer('lang', function() {
    this.set('i18n.locale', this.get('lang'));
  }),

  actions: {
    toggleLanguage() {
      let lang = this.get('lang');
      if (lang === 'sv') {
        this.set('lang', 'en');
      } else {
        this.set('lang', 'sv');
      }
    }
  }

});
