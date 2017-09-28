Meteor.methods({
  test1() {
    this.unblock()
    console.log('doing test1')
    Meteor.defer(function () {
      Meteor._sleepForMs(10000)
    })
    console.log('test1 has done')
    return 1
  },

  test2() {
    console.log('doing test2')
    Meteor._sleepForMs(5000)
    console.log('test2 has done')
    return 2
  },
})
