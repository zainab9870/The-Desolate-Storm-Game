var DesolateStorm = {};

DesolateStorm.Boot = function(game) {};

DesolateStorm.Boot.prototype = {
	
	preload: function() {
        
        
    },

	create: function() {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 1080;
		this.scale.minHeight = 960;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;  
		this.scale.setScreenSize(true); 
		this.input.addPointer();
		this.stage.backgroundColor = '#202123';
        this.state.start ('Preloader')
	}
	
};