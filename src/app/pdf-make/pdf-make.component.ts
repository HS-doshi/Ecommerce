import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf-make',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-make.component.html',
  styleUrl: './pdf-make.component.css'
})
export class PdfMakeComponent{

  clientData = {
    name:'John Doe',
    address: 'Prahaladnagar',
    city:'Ahmedabad',
    state:'GJ',
    zip:'388120',
    transition:[
      { date:'2020-01-22',amount:'150',description:'Product A'},
      { date:'2021-01-22',amount:'250',description:'Product B'},
      { date:'2022-01-22',amount:'350',description:'Product C'},
      { date:'2023-01-22',amount:'450',description:'Product D'},
      { date:'2023-01-22',amount:'550',description:'Product E'},
      { date:'2024-01-22',amount:'650',description:'Product F'},
      { date:'2024-01-22',amount:'750',description:'Product G'},
    ]
  }

  generatePDf(){
    const docDefi = new jsPDF()
    docDefi.setFont('Helvetica');
    docDefi.text(`Monthly report of ${this.clientData.name}`,10,20)
    docDefi.text(`Client City : ${this.clientData.city}`,10,30)
    docDefi.text(`Client State: ${this.clientData.state}`,10,40)
    docDefi.text(`Client Address : ${this.clientData.address}`,10,50)

    let yPos = 70;
    this.clientData.transition.forEach((transation)=>{
      docDefi.text(`
      ${transation.date} - ${transation.description}  $${transation.amount}`,
    10,
    yPos);
    yPos+=10;
    });

    docDefi.setFontSize(15);
    docDefi.addImage(`https://hips.hearstapps.com/hmg-prod/images/avatar-concept-1580768332.jpg?crop=0.668xw:0.668xh;0.188xw,0.135xh&resize=640:*`,
    'PNG',
    30,yPos+=10,120,100
    );
    docDefi.save('hello.pdf')
  }
};
