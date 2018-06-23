var keyData = {
		a: {
			color: "purple",
			sound: new Howl({src: ['./audio/clay.mp3']})
		},

		b: {
			color: "yellow",
			sound: new Howl({src: ['./audio/confetti.mp3']})
		},

		c: {
			color: "green",
			sound: new Howl({src: ['./audio/corona.mp3']})
		},

		d: {
			color: "blue",
			sound: new Howl({src: ['./audio/bubbles.mp3']})
		},
		e: {
			color: "orange",
			sound: new Howl({src: ['./audio/dotted-spiral.mp3']})
		},
		f: {
			color: "pink",
			sound: new Howl({src: ['./audio/flash-1.mp3']})
		},
		g: {
			color: "#E8F5E9",
			sound: new Howl({src: ['./audio/flash-2.mp3']})
		},
		h: {
			color: "maroon",
			sound: new Howl({src: ['./audio/flash-3.mp3']})
		},
		i: {
			color: "yellow",
			sound: new Howl({src: ['./audio/glimmer.mp3']})
		},
		j: {
			color: "aqua",
			sound: new Howl({src: ['./audio/moon.mp3']})
		},
		k: {
			color: "teal",
			sound: new Howl({src: ['./audio/pinwheel.mp3']})
		},
		l: {
			color: "fuchsia",
			sound: new Howl({src: ['./audio/piston-1.mp3']})
		},
		m: {
			color: "navy",
			sound: new Howl({src: ['./audio/piston-2.mp3']})
		},
		n: {
			color: "#D2B4DE",
			sound: new Howl({src: ['./audio/piston-3.mp3']})
		},
		o: {
			color: "#F5B7B1",
			sound: new Howl({src: ['./audio/prism-1.mp3']})
		},
		p: {
			color: "#F4D03F",
			sound: new Howl({src: ['./audio/zig-zag.mp3']})
		},
		q: {
			color: "#BB8FCE",
			sound: new Howl({src: ['./audio/prism-3.mp3']})
		},
		r: {
			color: "#B9770E",
			sound: new Howl({src: ['./audio/splits.mp3']})
		},
		s: {
			color: "#EC407A",
			sound: new Howl({src: ['./audio/splits.mp3']})
		},

		t: {
			color: "#C5CAE9",
			sound: new Howl({src: ['./audio/squiggle.mp3']})
		},

		u: {
			color: "#FFCA28",
			sound: new Howl({src: ['./audio/strike.mp3']})
		},
		v: {
			color: "#4DB6AC",
			sound: new Howl({src: ['./audio/suspension.mp3']})
		},
		w: {
			color: "#A1887F",
			sound: new Howl({src: ['./audio/timer.mp3']})
		},
		x: {
			color: "#00897B  ",
			sound: new Howl({src: ['./audio/ufo.mp3']})
		},
		y: {
			color: "#546E7A",
			sound: new Howl({src: ['./audio/veil.mp3']})
		},

		z: {
			color: "#D32F2F",
			sound: new Howl({src: ['./audio/wipe.mp3']})
		}


	}
    paper.install(window);
    var tool1;
	window.onload = function() {
		var canvas = document.getElementById('myCanvas');
		paper.setup(canvas);
	    tool1 = new Tool();

		tool1.onKeyDown = function(event){
			if (keyData[event.key]){
     		var inner = new Path.Circle({
    		center: [Number(50 + Math.random() * 1100), 100+Number(Math.random() * 500)],
    		radius: Number(Math.random() * 800),
   //  		fillColor:  {
			// 	hue: Math.random() * 360,
			// 	saturation: 1,
			// 	brightness: 1
			// }
			fillColor: keyData[event.key].color
		});

		inner.onFrame = function(event){
    		// Every frame, rotate the path by 3 degrees:
    		inner.scale(0.9);
    		inner.fillColor.hue += 1;

    		}
        //var sound = new Howl({src: ['bubbles.mp3']}).play(); 	
        var sound = keyData[event.key].sound.play(); 
    }
	 	}//onKeyDown
	}//windows.onload	