function getEnding(num, root, endings){
    const numSlice = Number(`${num}`.slice(-2))
    if(numSlice > 10 && numSlice < 15){
        return root + endings[2]
    }else if(numSlice % 10 === 1){
        return root + endings[0]
    }else if(numSlice % 10 > 1 && numSlice % 10 < 5){
        return root + endings[1]
    }else return root + endings[2]
}

function logName(n, root, endings){
    for (let i = 1; i < n; i++){
        console.log(i, getEnding(i, root, endings))
    }
}

// logName(2000, 'Серг', ['ей', 'ея', 'еев'])

function addSpouse(sp1, sp2){
    sp1.spouse = sp2
    sp2.spouse = sp1
}

function Person(age, work, likes){
    this.age = age
    this.work = work
    this.likes = likes
}

const Enrique = new Person(30, 'Программист', 'Пробежки по утрам и свежевыжатый сок.')
      Sarah = new Person(26, 'Юрист', 'Смотреть сериалы, а иногда пишет довольно неплохие статьи в местную газету.')
      Ann = new Person(4, '', 'Рисовать мелками и играть с соседским мальчиком в песочнице.')
      Jim = new Person(60, 'Пенсионер', 'путешествовать по родной Англии.')
      Kelly = Object.assign(Jim)
      Enrique.mother = new Person(65, 'Пенсионер', 'Кафе')
      Nik = new Person(70, 'Начальника охраны', 'Играет первой скрипкой в Ливерпульском оркестре.')



for (el of [Enrique, Sarah, Ann]) el.city = 'Лондон'
for (el of [Jim, Kelly]) el.city = 'Манчестер'
for (el of [Enrique.mother, Nik]) el.city = 'Ливерпуль'

addSpouse(Enrique, Sarah)
addSpouse(Enrique.mother, Nik)
addSpouse(Jim, Kelly)

Ann.parrents = [Enrique, Sarah]
Sarah.parrents = [Jim, Kelly]
Enrique.parrents = [Enrique.mother, Nik]

