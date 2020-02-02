import {Priority} from "../model/Priority";
import {Category} from "../model/Category";
import {Task} from "../model/Task";

export class TestData {

  static categories: Category[] =[

    {id: 1, title:"Введение в Java"},
    {id: 2, title:"Типы данных"},
    {id: 1, title:"Операторы"},
    {id: 1, title:"Логика"},
    {id: 1, title:"ООП"},
    {id: 1, title:"Инкапсуляция"},
    {id: 1, title:"Наследование"},
    {id: 1, title:"Полиморфизм"},
    {id: 1, title:"Паттерны"},
    {id: 1, title:"Списки"},


  ];


  static priorities: Priority[] =[
    {id: 1, title:"why not?", color: '#e5e5e5'},
    {id: 2, title:"preferable", color: '#85D1B2'},
    {id: 3, title:"important", color: '#F1828D'},
    {id: 4, title:"very important", color: '#F1128D'},

  ];

  //индексация приоритетов и категорий начинается с нуля

  static task: Task[] =[
    {
      id: 1,
      title: "Все о Java(Ну или почти все)",
      completed: true,
      priority: TestData.priorities[3],
      date: new Date ('2020-02-01'),

    },
    {
      id: 2,
      title: "Типы данных",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 3,
      title: "Операторы",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 4,
      title: "Логика(правда или ложь)",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 5,
      title: "ООП",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 6,
      title: "Инкапсуляция",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 7,
      title: "Наследование",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 8,
      title: "Полиморфизм",
      completed: true,
      //category: testData.categories[]
      priority: TestData.priorities[3],

    },
    {
      id: 9,
      title: "Любимые Паттерны",
      completed: false,
      //category: testData.categories[]
      priority: TestData.priorities[0],

    },
    {
      id: 10,
      title: "Списки(и даже чуток про Map)",
      completed: false,
      //category: testData.categories[]
      priority: TestData.priorities[2],

    }

  ];
}
