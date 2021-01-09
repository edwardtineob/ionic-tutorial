import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/models/vehicle.models';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage implements OnInit {

  vehicles: Vehicle[] = [
    {
      brand: 'Nissan',
      model: 'Skyline',
      year: 2020,
      capacity: 5,
      image: '../src/resources/skyline.jpeg'
    },
    {
      brand: 'Toyota',
      model: 'Supra',
      year: 2020,
      capacity: 2,
      image: '../src/resources/supra.jpeg'
    },
    {
      brand: 'Honda',
      model: 'Civic Type R',
      year: 2021,
      capacity: 4,
      image: '../src/resources/civic.jpeg'
    }
  ]

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async delete(vehicle: Vehicle){
    let msg = `Quieres eliminar el vehiculo ${vehicle.brand} ${vehicle.model} ${vehicle.year}`
    const alert = await this.alertController.create({
      header: "Aviso",
      message: msg,
      buttons: ['Cancel', 'OK']
    })

    await alert.present();
  }

  async update(vehicle: Vehicle){
    let msg = `Quieres actualizar el vehiculo ${vehicle.brand} ${vehicle.model} ${vehicle.year}`
    const alert = await this.alertController.create({
      header: "Aviso",
      message: msg,
      buttons: ['Cancel', 'OK']
    })

    await alert.present();
  }

  async favorite(vehicle: Vehicle){
    let msg = `Quieres marcar como favorito el vehiculo ${vehicle.brand} ${vehicle.model} ${vehicle.year}`
    const alert = await this.alertController.create({
      header: "Aviso",
      message: msg,
      buttons: ['Cancel', 'OK']
    })

    await alert.present();
  }

}
