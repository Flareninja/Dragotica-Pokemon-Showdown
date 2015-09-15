// jscs:disable
/* jshint ignore:start */
exports.commands = {
    /*********************************************************
     * TC'S HERE!
     *********************************************************/
    
    dong: 'dongshare',
    dongshare: (function() {
        var randomdong = [
            "( ͡° ͜ʖ ͡°).",
            "ヽ༼ຈل͜ຈ༽ﾉʀᴀɪsᴇ ʏᴏᴜʀ ᴅᴏɴɢᴇʀsヽ༼ຈل͜ຈ༽ﾉ ",
            "ᕙ༼ຈل͜ຈ༽ᕗ flex your dongers ᕙ༼ຈل͜ຈ༽ᕗ",
            "┌༼ຈل͜ຈ༽┐ lower your dongers ┌༼ຈل͜ຈ༽┐",
            " (▀̿ ̿Ĺ̯̿̿▀̿ ̿)̄ ɴᴀᴍᴇ's ᴅᴏɴɢ. ᴊᴀᴍᴇs ᴅᴏɴɢ (̿▀̿ ̿Ĺ̯̿̿▀̿ ̿)",
            "¯\\_(ツ)_/¯.",
            "༼ﾉຈل͜ຈ༽ﾉ Y u no raise donger?"
        ];

        return function(target, room, user) {

            var selecteddong = target || randomdong[Math.floor(Math.random() * randomdong.length)];
            if (!this.canTalk(selecteddong)) return false;
            return this.parse(selecteddong);

        };
    })(),
  
    raisedong: 'dongers',
    raisedongers: 'dongers',
    dongers: function(target, room, user) {
        if (!this.canBroadcast()) return;
        this.sendReplyBox('<center><img src="http://107.161.19.92:8000/TCs/Dong.gif"><br />' +
            '<font size=3><i><font color=red><b><blink>ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ</blink></b></font></i></font><br />')
    },

    spank: function(target, room, user) {
        if (!target) return this.sendReply('/spank needs a target.');
        return this.parse('/me spanks ' + target + '!');
    },
    
    drago: 'dragotic',
    Drago: 'dragotic', 
    Dragotic: 'dragotic',
    dragotic: function(target, room, user) {
        if (!this.canBroadcast()) return false;
        return this.sendReplyBox('<center><b><font style="font-family:Verdana"><h2>Come At Me !</h2></font></b></center><center><img src="http://i.imgur.com/iDbZUsa.jpg" height="100" width="100"></center><br /><center>Ace:Fear</center>');
    },

    /*********************************************************
     * TC'S STOP HERE!
     *********************************************************/
};
/* jshint ignore:end */