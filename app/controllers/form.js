import Ember from 'ember';

export default Ember.Controller.extend({

  selectedOrderType: null,
  showConfirmation: false,
  contactOptOut: false,

  selectedOrderTypeIsBook: Ember.computed.equal('selectedOrderType', 'book'),
  selectedOrderTypeIsJournal: Ember.computed.equal('selectedOrderType', 'journal'),
  selectedOrderTypeIsDatabase: Ember.computed.equal('selectedOrderType', 'database'),
  selectedOrderTypeIsOther: Ember.computed.equal('selectedOrderType', 'other'),

  showContactInputs: Ember.computed.equal('contactOptOut', false),

  order: {
    book: {
      title: null,
      author: null,
      isbn: null,
      year: null,
      other: null,
      eBook: false,
      reserveBook: false,
      libraryCard: null
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
