const FollowToggle = require("./follow_toggle.js");

$( () => {
    $('button.follow-toggle').each(function(index, element) {
        new FollowToggle(element)
    });
});