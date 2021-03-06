import { InMemoryDbService } from 'angular-in-memory-web-api';

export class WorkoutsData implements InMemoryDbService {

  createDb() {
    const workoutsTotal: any = {
      'workoutsAmount': 6,
      'id:': 100
    };
    const performanceTargets: any = {
          'bike': '2500',
          'run': '4000',
          'row': '1000',
          'id:': 5
        };
    const locations: any[] = [
      {
        'id': 1,
        'name': 'Outfit Gym'
      },
      {
        'id': 2,
        'name': 'Shalom Gym'
      },
      {
        'id': 3,
        'name': 'Work Gym'
      },
      {
        'id': 4,
        'name': 'Best Gym'
      },
      {
        'id': 5,
        'name': 'Caesar Gym'
      },
      {
        'id': 6,
        'name': 'Yarkon Park'
      },
      {
        'id': 7,
        'name': 'Big Park'
      },
      {
        'id': 8,
        'name': 'Hrtzl Park'
      }
    ];

    const workouts: any[] =  [
      {
        'rating': 4,
        'date': '2018-11-7',
        'time': {
          'hour': 13,
          'minute': 7,
          'second': 0
        },
        'distance': '100',
        'type': 'row',
        'location': 'Yarkon Park',
        'id': 3
      },
      {
        'rating': 5,
        'type': 'run',
        'date': '2018-11-14',
        'time': null,
        'distance': '50',
        'location': 'Best Gym',
        'id': 4
      },
      {
        'rating': 4,
        'type': 'bike',
        'date': '2018-11-23',
        'time': {
          'hour': 14,
          'minute': 1,
          'second': 0
        },
        'distance': '100',
        'location': 'Work Gym',
        'id': 5
      },
      {
        'rating': 5,
        'date': '2018-11-1',
        'type': 'bike',
        'time': {
          'hour': 13,
          'minute': 3,
          'second': 0
        },
        'distance': '200',
        'location': 'Outfit Gym',
        'id': 7
      },
      {
        'rating': 4,
        'distance': '200',
        'location': 'Outfit Gym',
        'time': {
          'hour': 3,
          'minute': 4,
          'second': 0
        },
        'date': '2018-12-1',
        'type': 'row',
        'id': 8
      },
      {
        'rating': 4,
        'type': 'bike',
        'date': '2018-11-16',
        'time': {
          'hour': 16,
          'minute': 3,
          'second': 0
        },
        'distance': '200',
        'location': 'Caesar Gym',
        'id': 9
      }
    ];

    return { workouts, workoutsTotal, locations, performanceTargets };
  }
}
