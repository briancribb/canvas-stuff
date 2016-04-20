var classes = classes || {}; // Giving a namespace to the class we're creating. It keeps things out of global.

//http://createjs.com/tutorials/Inheritance/
(function() {

	/*
	We're creating a temporary object that lives only during this anonymous setup function. Once it's built up and 
	ready, we will add it to our classes object to be used by an outside application.
	*/

	//function Ship(canvas, id, x, y, vx, vy, vr) {
	function Ship(settings) {
		this.Shape_constructor();
		// Assign properties from what is passed in.
		this.x			= settings.x || 0;
		this.y			= settings.y || 0;
		//this.width		= 30;						// All of our squares will be the same size.
		//this.height		= 30;
		//this.regX		= this.width/2;				// Setting the registration point so we can rotate around the center of the square.
		//this.regY		= this.height/2;
		//this.rotation	= 0;						// This is the default value anyway, but I wanted to set it here for readability.


		//this.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,1)").drawCircle(160,60,40);
		//this.graphics.beginStroke("#FFF").beginFill("#bad").drawRect(0, 0, this.width, this.height);
		this.graphics = grShip;
	}

	// extend() builds our temporary object up with the parent as it's prototype. It then returns the new prototype, 
	// so we could give this a shorter variable name if we wanted to.
	Ship.prototype = createjs.extend(Ship, createjs.Shape);

	/*
	Now we're actually going to create the class and use it. Any methods we override will be renamed
	to prefix_methodName(), as in: Container_draw(). We're adding the resulting class to our classes
	object to avoid polluting the global namespace.
	*/
	
	classes.Ship = createjs.promote(Ship, "Shape");

	var grShip	=  new createjs.Graphics().beginFill("#ffffff").drawCircle(0, 0, 30),
		grShip2	=  new createjs.Graphics().beginFill("#ffffff").drawCircle(0, 0, 40);

	Ship.prototype.smallCircle = function() {
		this.graphics = grShip;
	}
	Ship.prototype.largeCircle = function() {
		this.graphics = grShip2;
	}









}());