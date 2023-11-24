import { Controller, Get } from '@nestjs/common';
import { Feriado } from './models/Feriado';
import { FeriadoService } from './services/feriado.service';

@Controller()
export class AppController {
  constructor(private readonly feriadoService: FeriadoService) { }

  @Get('/feriados')
  getFeriados(): Promise<Feriado[]> {
    return this.feriadoService.getFeriados();
  }

  @Get('/feriados/irrenunciables')
  getFeriadosIrrenunciables(): Promise<Feriado[]> {
    return this.feriadoService.getFeriados(true);
  }
}
