

function FollowToggle(el){
    this.$el = $(el);
    this.userId=this.$el.data('user-id');
    this.followState=this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
}


FollowToggle.prototype.render = function() {
    if (this.followState === "unfollowed") {
        this.$el.text("Follow!");
    } else {
        this.$el.text("Unfollow!");
    }
}

FollowToggle.prototype.handleClick = function(e) {
    const followToggle = this;
    e.preventDefault();

    if (this.followState==="unfollowed") {
        $.ajax({
            url: `/users/${this.userId}/follow`,
            type: 'POST',
            dataType: 'JSON',
        })
        followToggle.render();
        APIUtil
    } else {
        $.ajax({
            url: `/users/${this.userId}/follow`,
            type: 'DELETE',
            dataType: 'JSON'
        })
        followToggle.render();
    }
}


module.exports=FollowToggle;