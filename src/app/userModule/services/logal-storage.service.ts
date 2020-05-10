import { Inject, Injectable } from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LogalStorageService {

  public userList : User ;

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(user: User) : void{
    const userListStorage = this.storage.get('USER_LIST') || [];
    userListStorage.push({username: user.nombre, correo: user.correo, contraseña: user.contrasena, fecha: new Date()});
    this.storage.set('USER_LIST', userListStorage);
    this.userList = userListStorage;

  }

  public readLocalStorage() : object{
    return this.storage.get('USER_LIST');
  }

}
