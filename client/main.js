Meteor.call('test1', function (err, resp) {
  console.log('test1 is', err, resp)
})

Meteor.call('test2', function (err, resp) {
  console.log('test2 is', err, resp)
})
