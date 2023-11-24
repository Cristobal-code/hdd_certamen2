import { Injectable } from '@nestjs/common';
import { Feriado } from 'src/models/Feriado';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { FeriadoResponse } from 'src/interfaces/FeriadoResponse';

@Injectable()
export class FeriadoService {
    constructor(private readonly configService: ConfigService) { }

    async getFeriados(onlyIrrenunciable: boolean = false): Promise<Feriado[]> {
        const url: string = this.configService.get<string>('PUBLIC_API_URL');
        const feriados = (await axios.get(url)).data as FeriadoResponse[]

        return feriados.filter(f => !onlyIrrenunciable || f.irrenunciable !== '0').map(f => {
            return {
                nombre: f.nombre,
                fecha: f.fecha.toString(),
                irrenunciable: f.irrenunciable == '0' ? 'No' : 'Si',
            }
        })

    }
}
