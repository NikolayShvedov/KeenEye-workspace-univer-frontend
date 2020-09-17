import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api/interfaces';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line: typedef
  createDb() {
    const students = [
      {id: 0, fio: 'Фамилия', group_of_students: 'Группа', phone_number: 'Телефон'},
      {id: 1, fio: 'Фамилия 1', group_of_students: 'Группа 1', phone_number: 'Телефон 1'},
      {id: 2, fio: 'Фамилия 2', group_of_students: 'Группа 2', phone_number: 'Телефон 2'},
    ];
    return {students};
  }

  getId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
  }

}
