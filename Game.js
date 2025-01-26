DesolateStorm.Game = function (game) {
this.character;
this.cursors;
    
};


DesolateStorm.Game.prototype = {
    create: function () { 
        var character ;
        var cursors ;
        this.cursors = this.input.keyboard.createCursorKeys();
        //this.character = this.add.sprite(865, 375, 'policeOfficer');


        //this.DesolateStorm.physics.arcade.enable(this.character);
        //this.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.openingSequence();
    },
    openingSequence () {
        
        this.stage.backgroundColor = '#000000';
        this.add.bitmapText(this.world.centerX - 135, this.world.centerY + 140, 'scaryFont', 'Four fifteen PR at five thirty six Fulton Street.', 24);
        this.add.bitmapText(this.world.centerX - 135, this.world.centerY + 160, 'scaryFont', 'This was the call that changed everything.', 24);
        
        this.input.onDown.add(this.buildWorld, this);
        
    },
    
    buildWorld: function (pointer) {
        var scalex2 = this.rnd.realInRange(10.5,10.5);
        var scaley2 = this.rnd.realInRange(11.5,11.5);
        
        var entranceRoom = this.add.sprite(0, 0, 'entrance');
        
        entranceRoom.scale.x = scalex2;
        entranceRoom.scale.y = scaley2;
        this.firstRoom();
    },
    firstRoom: function(){
        
        this.character = this.add.sprite(950, 350, 'policeOfficer');
        
            
        this.character.anchor.setTo(0.5,0.5);
        this.character.scale.setTo(2.5,2.5);
        this.character.animations.add('walk', [1,2,3,4,5,6,7,8], 8, true);
        this.character.animations.play('walk');
    },
    movement: function(){
         //character.body.velocity.setZeroVelocity();

        if (this.cursors.left.isDown)
        {
            this.character.body.velocity.x = -100;
            //this.character.play('left');
            this.character.animations.play('walk');
        }
        else if (this.cursors.right.isDown)
        {
            this.character.body.velocity.x = 100;
            //this.character.play('right');
            this.character.animations.play('walk');
        }
        else
        {
            this.character.animations.stop();
        }
        
    },
    
    update: function(){
        //this.character = this.add.sprite(865, 375, 'policeOfficer');
        //this.movement();
    },

}

