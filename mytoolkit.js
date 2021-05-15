// File name: mytoolkit.js

import {SVG} from './svg.min.js';

var MyToolkit = (function() {
    var Button = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(80);
        
        var rect = draw.rect(100,50).fill('#6699cc')

        var txt = draw.text('Button')
        .font({size: 20, family: 'Helvetica'});
        
        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null
        
        rect.mouseover(function(){
            this.fill({ color: '#808080'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        rect.mouseout(function(){
            this.fill({ color: '#6699cc'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        rect.mouseup(function(){
            this.fill({ color: '#6699cc'})
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        rect.click(function(event){
            this.fill({ color: 'pink'})
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
                txt.move(x+21,y+12);
            },
            setText: function(text){
                txt.text(text);
                rect.size(40+txt.length(),50)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    var CheckBox = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(50);
        
        var rect = draw.rect(15,15).fill('none').stroke({ width: 2, color: '#808080' })     

        var text = draw.text('Check Box Label')
        .font({size: 16, family: 'Helvetica'});

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        rect.mouseover(function(){
            this.fill({ color: 'white'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        rect.mouseout(function(){
            this.fill({ color: 'white'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        rect.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        rect.click(function(event){
            var text = draw.text('✓')
            .font({size: 17, family: 'Helvetica', weight: "bold"})
            .move(rect.x()+1, rect.y()-1.5);
            text.click(function(event){
                text.remove();
                if(clickEvent != null)
                clickEvent(event)
            })
            if(clickEvent != null)
                clickEvent(event)
        })
        return {
            move: function(x, y) {
                rect.move(x, y);
                text.move(x+20,y-1)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    var RadioButton = function(){
        var draw = SVG().addTo('body').size('100%','100%').height(30);
        
        var circle  = draw.circle(15).fill('none').stroke({ width: 2, color: '#808080' })     

        var text = draw.text('Radio Label')
        .font({size: 16, family: 'Helvetica'});

        var clickEvent = null
        var mouseoverEvent = null
        var mouseoutEvent = null
        var mouseupEvent = null

        circle.mouseover(function(){
            this.fill({ color: 'white'})
            if(mouseoverEvent != null)
                mouseoverEvent(event)
        })
        circle.mouseout(function(){
            this.fill({ color: 'white'})
            if(mouseoutEvent != null)
            mouseoutEvent(event)
        })
        circle.mouseup(function(){
            if(mouseupEvent != null)
                mouseupEvent(event)
        })
        circle.click(function(event){
            // var clicked = false;
            // if(clicked != true){
                var radio  = draw.circle(10).fill('black').move(circle.x()+2.6, circle.y()+2.3); 
            //     clicked = true;
            // }
            // if(clicked != true){
            radio.click(function(event){
                radio.remove();
                if(clickEvent != null)
                clickEvent(event)
            })
                if(clickEvent != null)
                    clickEvent(event)
        })
        return {
            move: function(x, y) {
                circle.move(x, y);
                text.move(x+20,y-1)
            },
            onclick: function(eventHandler){
                clickEvent = eventHandler
            },
            onmouseout: function(eventHandler){
                mouseoverEvent = eventHandler
            },
            onmouseup: function(eventHandler){
                mouseoutEvent = eventHandler
            },
            onmouseover: function(eventHandler){
                mouseupEvent = eventHandler
            }
        }
    }
    
return {Button,CheckBox,RadioButton}
}());

export{MyToolkit}
