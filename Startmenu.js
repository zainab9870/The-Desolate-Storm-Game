DesolateStorm.Startmenu = function (game) {
    this.startBG;
    this.startPrompt;
};
DesolateStorm.Startmenu.prototype = {
	
	create: function () {
        this.thundermusic = this.add.audio('thunderSound');
        this.thundermusic.play();
		startBG = this.add.image(0, 0, 'titleScreen');
        var scalex = this.rnd.realInRange(1.1,1.1);
        var scaley = this.rnd.realInRange(1.4,1.4)
        startBG.scale.x = scalex;
        startBG.scale.y = scaley;
		startBG.inputEnabled = true;
		startBG.events.onInputDown.addOnce(this.startGame, this);
		startPrompt = this.add.bitmapText(this.world.centerX - 120, this.world.centerY + 75, 'scaryFont', 'Face Your Fears!', 24);
        startPrompt = this.add.bitmapText(this.world.centerX - 75, this.world.centerY + 50, 'scaryFont', 'Click to ', 24);
	},

	startGame: function (pointer) {
		this.state.start('Game');
	}
};