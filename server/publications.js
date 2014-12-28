Meteor.publish('roundballoons', function () {
  return Roundballoons.find();
});

Meteor.publish('charges', function () {
  return Charges.find();
});

Meteor.publish('adriteeconomyline', function () {
  return Adriteeconomyline.find();
});

Meteor.publish('outdoorballoons', function () {
  return Outdoorballoons.find();
});