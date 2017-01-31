import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller) {

    let orderTypes = Ember.A(['book', 'journal', 'database', 'other']);

    controller.set('orderTypes', orderTypes);

  },

  actions: {
    submitOrder() {
      console.log('submitOrder in route');

      let url = 'http://130.241.35.161:3006/easitapi/new';

      // TODO: Change to correct group and make dependent on ENV for testing?.


      let data = {
        cmd:      'newticket',
        grp:      'group8',
        subject:  'Test subject',
        problem:  'This is the message text',
        xlibrary: 'nochoice',
        name:     'Magnus',
        email:    'magnus.kull@ub.gu.se',
        kid:      Date.now().toString()
      };

      let settings = {
        data: data,
        method: 'POST'
      }

      Ember.$.ajax(url, settings).then(() => {
        console.log('success!!');
      });
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


// variable_get('ubn_entityform_ttx2easit_endpoint', 'http://130.241.35.161:3006/easitapi/new'),
// array(
//   'headers' => array('Content-Type' => 'application/x-www-form-urlencoded'),
//   'method' => 'POST',
//   'data' => http_build_query($ttx_data, '', '&'),
//   'timeout' => 20,
