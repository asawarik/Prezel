class AgendaSlide {
  constructor(title, list, templateID) {
    this.title = title;
    this.agendaList = list;
    this.slide= pptx.addNewSlide();
    this.generateSlide()
  }
  generateSlide() {
  //pull template from the template from here to inteact with this model
    var template = null //call to template
    var titlePos = { x:1.0, y:0.5, font_size:42, color:'00FF00' };
    this.slide.addText(this.title, titlePos)
    }
   }

 };

module.exports = AgendaSlide;
