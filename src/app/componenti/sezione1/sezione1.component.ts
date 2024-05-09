import { Component, ElementRef, ViewChild } from '@angular/core';
import { Voci } from 'src/app/voci';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sezione1',
  templateUrl: './sezione1.component.html',
  styleUrls: ['./sezione1.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        maxHeight: '1000px', // Altezza massima quando il pannello è aperto
        opacity: 1 // Opacità massima quando il pannello è aperto
      })),
      state('closed', style({
        maxHeight: '0', // Altezza nulla quando il pannello è chiuso
        opacity: 0 // Opacità nulla quando il pannello è chiuso
      })),
      transition('open => closed', [
        animate('0.9s ease-out') // Transizione di chiusura
      ]),
      transition('closed => open', [
        animate('2.8s ease-in') // Transizione di apertura più lenta
      ])
    ]),
  trigger('expandCollapse', [
    state('collapsed', style({ height: '0px', overflow: 'hidden' })),
    state('expanded', style({ height: '*' })),
    transition('collapsed <=> expanded', [
      animate('400ms ease-in-out') // Modifica la durata e il tipo di transizione come desiderato
    ])
  ])
],

})
export class Sezione1Component {
  @ViewChild('cardContainer') cardContainer!: ElementRef;


  voce = new Voci();
  scrollStep: number = 300;

  scrollCards(direction: 'left' | 'right'): void {
    const container = this.cardContainer.nativeElement;
    if (direction === 'left') {
      container.scrollLeft -= this.scrollStep; // Scorri a sinistra
    } else {
      container.scrollLeft += this.scrollStep; // Scorri a destra
    }
  }

  isAccordionOpen: string = '';

  toggleAccordion(id: string): void {
    if (this.isAccordionOpen === id) {
      this.isAccordionOpen = '';
    } else {
      this.isAccordionOpen = id;
    }
  }

  panelOpenState = false;

  panels: { title: string, content: string, isOpen: boolean }[] = [];

  constructor() {
    // Aggiungi qui i tuoi pannelli di accordion
    this.panels = [
      { title: 'Panel 1', content: 'Content 1', isOpen: false },
      { title: 'Panel 2', content: 'Content 2', isOpen: false },
      { title: 'Panel 3', content: 'Content 3', isOpen: false }
    ];
  }

  togglePanel(panel: { title: string, content: string, isOpen: boolean }): void {
    panel.isOpen = !panel.isOpen;
  }

}
