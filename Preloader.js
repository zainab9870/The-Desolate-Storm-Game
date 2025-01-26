DesolateStorm.Preloader = function(game) {
    
    this.ready = false;
    
};

DesolateStorm.Preloader.prototype = {
	
	preload: function () {
        this.load.image('bathroom','bathroom.png')
        this.load.atlasXML('adultBedroom','bedroom_sprite.png','bedroomsprite.xml');
        this.load.atlasXML('bloodyAdultBedroom','bloody_bedroom_sprite.png','bloody_bedroom_sprite.xml') ;
        this.load.image('bloodyHallway1','bloody_hallway1.png');
        this.load.image('bloodyHallway2','bloody_hallway2.png');
        this.load.atlasXML('bloodyKidsBedroom','bloody_kids_bedroom_spritesheet.png','bloody_kids_bedroom_spritesheet.xml')
        this.load.image('bloodyBathroom','bloodyBathroom.png')
        this.load.atlasXML('bloodyEntrance','BloodyChandelierSpriteSheet.png','BloodyChandelierSpriteSheet.xml')
        this.load.atlasXML('bloodyKitchen','bloodyKitchen.png','bloodyKitchen.xml')
        this.load.atlasXML('bloodyLivingRoom','Bloodylivingroom.png','Bloodylivingroom.xml') ;
        this.load.atlasXML('entrance','chandelier_sprite.png','chandeliersprite.xml') ;
        this.load.audio('metalclang', 'clinksound.mp3');
        this.load.image('deadGuy','Dead_guy.png');
        this.load.image('hallWay1','Hallway1.png');
        this.load.image('hallWay2','Hallway2.png');
        this.load.image('kid','Kid.gif');
        this.load.atlasXML('kidsBedroom', 'Kids_bedroom_sprite.png','Kids_bedroom_sprite.xml');
        this.load.atlasXML('kitchen','kitchen_sprite.png','kitchensprite.xml');
        this.load.image('leadPipe','Lead_Pipe.png');
        this.load.atlasXML('livingroom','livingroom_sprite.png','livingroomsprite.xml');
        this.load.image('policeRadio','Police_Radio.png');
        this.load.atlasXML('policeOfficer','Policeofficersprite.png','Policeofficersprite.xml');
        this.load.bitmapFont('scaryFont','Pixel_Font.png', 'font/Pixel_Font.fnt');
        this.load.image('speechBubble','Speech_bubble.png');
        this.load.audio('thunderSound','thundersound.mp3');
        this.load.image('titleScreen','Title_screen.png');
    },

	create: function () { 
	},

	update: function () {
        this.ready = true;
	   	this.state.start('Startmenu')
	}
};