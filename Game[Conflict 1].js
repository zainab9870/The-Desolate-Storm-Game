DesolateStorm.Game = function (game) {
    
    
};

DesolateStorm.Game.prototype = {
    create: function () { 
        
        this.openingSequence();
    },
    openingSequence () {
        this.stage.backgroundColor = '#000000';
        this.add.bitmapText(this.world.centerX - 300, this.world.centerY + 180, 'scaryFont', '415 PR at 536 Fulton Street. This was the call that changed everything.', 24);
        
        this.buildWorld
    },
    
    buildWorld: function () {
        game.add.image(0,0, 'entrance')
    },
    
}
