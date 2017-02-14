import Ember from 'ember';
import { translationMacro as t } from "ember-i18n";

export default Ember.Controller.extend({
  i18n: Ember.inject.service(),

  selectedOrderType: null,
  selectedLibrary: null,
  showConfirmation: false,

  selectedOrderTypeIsBook: Ember.computed.equal('selectedOrderType', 'book'),
  selectedOrderTypeIsJournal: Ember.computed.equal('selectedOrderType', 'journal'),
  selectedOrderTypeIsDatabase: Ember.computed.equal('selectedOrderType', 'database'),
  selectedOrderTypeIsOther: Ember.computed.equal('selectedOrderType', 'other'),

  libraries: Ember.computed('i18n.locale', function() {
    let libraries = Ember.A([
      {code: 'g', value: 'Humanities Library'},
      {code: 'gcl', value: 'Campus Linne'},
      {code: 'ge', value: 'Economics Library'},
      {code: 'ghdk', value: 'Art Library'},
      {code: 'gk', value: 'Social Sciences Library'},
      {code: 'gm', value: 'Biomedical Library'},
      {code: 'gp', value: 'Education Library'},
      {code: 'gumu', value: 'Music and Drama Library'},
      {code: 'gv', value: 'Biomedical Library - Learning Centre'}
    ]);

    return libraries.map((obj) => {
      return {
        code: obj.code,
        value: obj.value,
        label: this.get('i18n').t(`libraries.${obj.code}`)
      };
    });
  }),

  bookTypeOptions: Ember.computed('i18n.locale', function() {
    let options = Ember.A(['print', 'e', 'any']);

    return options.map((obj) => {
      return {
        value: obj,
        label: this.get('i18n').t(`form.book_form.book_type_options.${obj}`)
      };
    });
  }),

  order: {
    name: null,
    email: null,
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
    },

    onLibrarySelect(value) {
      let libraryGroupString = this.get('libraries').findBy('code', value);

      this.set('selectedLibrary', value);
      this.set('order.book.library', libraryGroupString);
    },
    onBookTypeSelect(value) {
      let bookTypeString = this.get('bookTypeOptions').findBy('value', value);

      this.set('selectedBookType', value);
      this.set('order.book.bookType', )
    }
  }

});
