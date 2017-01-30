// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by ladda-bootstrap.js.
import { name as packageName } from "meteor/theara:ladda-bootstrap";

// Write your tests here!
// Here is an example.
Tinytest.add('ladda-bootstrap - example', function (test) {
  test.equal(packageName, "ladda-bootstrap");
});
