import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['button-group-selector', 'btn-group', 'btn-group-justified'],
  ariaRole: 'list',

  isActiveItem(item) {
    return this.get('value') === item;
  },

  itemsAsObjects: Ember.computed('items', 'value', function() {
    return this.get('items').map((item) => {
      return {value: item, isActive: this.isActiveItem(item)};
    });
  }),

  actions: {
    setActiveItem(item) {
      this.set('value', item.value);
    }
  }
});
