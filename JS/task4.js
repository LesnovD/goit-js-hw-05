class StringBuilder {
  constructor([value]) {
    this._value = [value];
  }
  get value() {
    return this._value.join(" ");
  }
  append(str) {
    this._value.push(str);
    return this._value.join(" ");
  }
  prepend(str) {
    this._value.unshift(str);
    return this._value.join(" ");
  }
  pad(str) {
    this._value.push(str);
    this._value.unshift(str);
    return this._value.join(" ");
  }
}

// Добавь классу следующий функционал:

//     Геттер value - возвращает текущее значение поля _value
//     Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
//     Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
//     Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
