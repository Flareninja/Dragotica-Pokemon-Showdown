 var jukebox = ["|raw|<div class=\"infobox\"> <audio src=\"http://mp3free.link/mp3-cache/o1YR7dIHzq/in-the-end-linkin-park-in-the-end-in-the-end-linkin-park-in-the-end.mp3\" title=\"In The End - Linkin Park\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://a.tumblr.com/tumblr_lr2bgeRYrS1r0xuh4o1.mp3 \" title=\" This Side Of Paradise - Pokemon\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://onlinekaraoke.tv/assets/songs/20000-20999/20227-let-it-go-idina-menzel.mp3\" title=\" Let It Go - Idina Menzel\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://onlinekaraoke.tv/assets/songs/30000-30999/30571-hotel-california-eagles--1411573388.mp3 \" title=\" Hotel California - Eagles\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://music.huoxing.com/upload/20130327/1364362887245_9758.mp3 \" title=\" You're My Zing - Hotel Transylvania\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://a.tumblr.com/tumblr_mj5iokE0Nz1s0iflso1.mp3 \" title=\" Best Day Of My Life - American Authors\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://www.semialism.com/music/Uprising.mp3 \" title=\" Uprising - Muse\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://mp3with.me/storage/mp3/c375e3f57e25d7d349d99025227903ab/r-city-locked-away-feat-adam-levine.mp3 \" title=\" R-City Locked Away - Feat Adam Levine\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://sound2mp3.com/a/cache/Let%20It%20Go%20-%20Demi%20Lovato%20-%20Let%20It%20Go%20(Frozen)%20Let%20It%20Go%20-%20Demi%20Lovato%201.mp3 \" title=\" Let It Go - Demi Lovato\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://mqxreview.free.fr/musique/Walt%20Disney/(Soundtrack)Aladdin%20-%20A%20Whole%20New%20World.mp3 \" title=\" A Whole New World - Aladdin\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://uhmp3.com/a/cache/Shake%20It%20Off%20-%20Taylor%20Swift%20Shake%20-%20Taylor%201.mp3 \" title=\" Shake It Off - Taylor Swift\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://mp3with.me/storage/mp3/e7e11b2bed3e0971b48d867fe7c90afd/nano-neverland.mp3 \" title=\" Nano - Neverland\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
                "|raw|<div class=\"infobox\"> <audio src=\"http://mp3free.link/mp3-cache/RJGwjdz8ob/see-you-again-wiz-khalifa-see-you-again-see-you-again-see-you-again-wiz-khalifa-see-you-again-wiz-khalifa.mp3 \" title=\" See You Again - Wiz Khalifa\" type=\"audio/mp3\" controls=\"\" style=\"background-color:gold; border-radius:2px inset gold; width: 100% ;\"></audio></div>",
];

exports.commands = {

jukebox: function(arg, user, room) {
        if (!this.can('makeroom')) return;
    var randjuke = jukebox[Math.floor(Math.random()*jukebox.length)];
    this.sendReply(randjuke)
},

songoftheday: 'sotd',
sotd: function(arg, user, room) {
        if (!this.can('makeroom')) return;
	var sotd = jukebox[8];
	this.sendReply("Song Of The Day Is : Let It Go - Demi Lovato\n"+ sotd)
},

play: function(arg, user, room) {
        if (!this.can('makeroom')) return;
	    var argu = arg.split(",");
        if (!argu[0] || !argu[1] || !argu[2] || !arg.has('.mp3')) {
    	this.sendReply('The format is "/play songlink.mp3 , Song Title , Song Name".')
    	}else{
    	this.sendReply('|raw|<div class="infobox"><h2>'+argu[2]+'</h2><audio src="'+argu[0]+'" title="'+argu[1]+'" type="audio/mp3" controls="" style="width: 100% ;"></audio></div>');
}
},

playlist: function(arg, user, room) {
        if (!this.can('makeroom')) return;
	if (arg === "dragotic" || arg === "Dragotic") {
		var dragoticplaylist = [jukebox[8],jukebox[2],jukebox[11],jukebox[12]] 
		var randsong = 	dragoticplaylist[Math.floor(Math.random()*dragoticplaylist.length)];
		this.sendReply(randsong)
	}else if (arg === "kuro" || arg === "Kuro") {
		var kuroplaylist = [jukebox[11]] 
		var randsong = 	kuroplaylist[Math.floor(Math.random()*kuroplaylist.length)];
		this.sendReply(randsong)

	}else{
		this.sendReply("No playlist with this name found!.")
	}
},
};