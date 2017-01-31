import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['button-group-selector', 'btn-group', 'btn-group-justified'],
  ariaRole: 'list',

  activeItem: null,

  isActiveItem(item) {
    return this.get('activeItem.item') === item;
  },

  itemsAsObjects: Ember.computed('items', 'activeItem', function() {
    return this.get('items').map((item) => {
      return {item: item, isActive: this.isActiveItem(item)};
    });
  }),

  actions: {
    setActiveItem(item) {
      this.set('activeItem', item);
      this.set('value', this.get('activeItem.item'));
    }
  }
});
