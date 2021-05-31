(function ( $ ) { 
    $(document).ready(function() {
      
      new WOW().init();
  
      function animateLauch() {
  
        particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1,
              "box-shadow": "rgba(0,0,0,0.8) 0 0 10px"
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        
        });
        
        
      }
      animateLauch();

      function tableScheduleHover() {

        $('.column100').on('mouseover',function(){
          var table1 = $(this).parent().parent().parent();
          var table2 = $(this).parent().parent();
          var verTable = $(table1).data('vertable')+"";
          var column = $(this).data('column') + ""; 
      
          $(table2).find("."+column).addClass('hov-column-'+ verTable);
          $(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
        });
      
        $('.column100').on('mouseout',function(){
          var table1 = $(this).parent().parent().parent();
          var table2 = $(this).parent().parent();
          var verTable = $(table1).data('vertable')+"";
          var column = $(this).data('column') + ""; 
      
          $(table2).find("."+column).removeClass('hov-column-'+ verTable);
          $(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
        });

      }

      tableScheduleHover();

    });
  }( jQuery ));