import Ember from 'ember';

export default Ember.Controller.extend({

  selectedOrderType: null,

  selectedOrderTypeIsBook: Ember.computed.equal('selectedOrderType', 'book'),
  selectedOrderTypeIsJournal: Ember.computed.equal('selectedOrderType', 'journal'),
  selectedOrderTypeIsDatabase: Ember.computed.equal('selectedOrderType', 'database'),
  selectedOrderTypeIsOther: Ember.computed.equal('selectedOrderType', 'other'),

  order: {
    book: {
      title: null,
      author: null
    },
    journal: {
      title: null
    },
    database: {
      title: null
    },
    other: {
      description: null
    }
  }

});
