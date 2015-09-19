// jscs:disable
/* jshint ignore:start */
exports.commands = {
    /*********************************************************
     * TC'S HERE!
     *********************************************************/
    
    drago: 'dragotic',
    Drago: 'dragotic', 
    Dragotic: 'dragotic',
    dragotic: function(target, room, user) {
        if (!this.canBroadcast()) return false;
        return this.sendReplyBox('<center><b><font style="font-family:Verdana"><h2>Come At Me !</h2></font></b></center><center><img src="http://i.imgur.com/iDbZUsa.jpg" height="300" width="300"></center><br /><center>Ace:Fear</center>');
    },

    /*********************************************************
     * TC'S STOP HERE!
     *********************************************************/
};
/* jshint ignore:end */