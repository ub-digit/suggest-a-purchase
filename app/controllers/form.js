import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  selectedOrderType: null,
  showConfirmation: false,
  contactOptOut: false,

  selectedOrderTypeIsBook: Ember.computed.equal('selectedOrderType', 'book'),
  selectedOrderTypeIsJournal: Ember.computed.equal('selectedOrderType', 'journal'),
  selectedOrderTypeIsDatabase: Ember.computed.equal('selectedOrderType', 'database'),
  selectedOrderTypeIsOther: Ember.computed.equal('selectedOrderType', 'other'),

  showContactInputs: Ember.computed.equal('contactOptOut', false),

  libraries: Ember.computed('i18n.locale', function() {
    let libCodes = Ember.A(['g', 'gcl', 'ge', 'ghdk', 'gk', 'gm', 'gp', 'gumu', 'gv']);
    return libCodes = libCodes.map((code) => {
      return {
        key: code,
        label: this.get('i18n').t(`libraries.${code}`)
      };
    });

  }),

  order: {
    book: {
      title: null,
      author: null,
      isbn: null,
      year: null,
      other: null,
      eBook: false,
      reserveBook: false,
      library: null,
      libraryCard: null,
      pickup: null,
      validDate: null
    },
    journal: {
      title: null,
      issn: null,
      other: null
    },
    database: {
      title: null,
      other: null
    },
    other: {
      description: null
    }
  },

  actions: {
    onOrderTypeSelect(value) {
      this.set('selectedOrderType', value);
    }
  }

});
