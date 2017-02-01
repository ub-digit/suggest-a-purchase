import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),

  beforeModel(transition) {

    // if (transition.queryParams.lang) {
    //   this.set('i18n.locale', transition.queryParams.lang);
    // }

    this._super(...arguments);
  }
});
