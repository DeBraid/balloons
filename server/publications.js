Meteor.publish('outdoorpals', function () {
  return Outdoorpals.find();
});

Meteor.publish('outdoorbasicpals', function () {
  return Outdoorbasicpals.find();
});

Meteor.publish('popupbanners', function () {
  return Popupbanners.find();
});

Meteor.publish('admaxminisportballs', function () {
  return Admaxminisportballs.find();
});

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