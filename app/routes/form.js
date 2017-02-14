import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller) {

    let orderTypes = Ember.A(['book', 'journal', 'database', 'other']);

    controller.set('orderTypes', orderTypes);

  },

  buildProblemString() {

  },

  actions: {
    submitOrder() {

      let controller = this.get('controller');
      let order = controller.get('order');

      let url = 'http://130.241.35.161:3006/easitapi/new';

      // TODO: Change to correct group and make dependent on ENV for testing?.

      let data = {
        cmd:      'newticket',
        // TODO: Change to correct group and make dependent on ENV for testing?.
        grp:      'group8',
        // TODO: Make translatable
        subject:  'Test subject',
        // TODO: Build string based on order type
        problem:  'This is the message text.\nThis is hopefully a new line.',
        // TODO: Set to library choice
        xlibrary: 'nochoice',
        name:     order.name || 'Anonym',
        email:    order.email || 'anonym.anonym@ub.gu.se',
        kid:      Date.now().toString()
      };

      let settings = {
        data: data,
        method: 'POST'
      };

      console.log(data);

      // Ember.$.ajax(url, settings).then(() => {
      //   controller.set('showConfirmation', true);
      // });
    }
  }
});

// <input type="hidden" name="cmd"     value="newticket" />
// <input type="hidden" name="style"   value="patron_inkop" />
// <input type="hidden" name="sid"     value="" />
// <input type="hidden" name="do"      value="1" />
// <input type="hidden" name="grp"     value="group15" />
// <input type="hidden" name="tid"     value="" />
// <input type="hidden" name="form"    value="" />
// <input type="hidden" name="subject" value=" Purchase suggestion" />
// <input type="hidden" name="problem" value="init" />
// <input type="hidden" name="special" value="inkop" />
// <input type="hidden" name="lang"    value="en" />
// <input type="hidden" name="version" value="init" id="versionField"/>
