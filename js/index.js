////Task 2
class ExtendedDate extends Date {
    constructor(...args) {
        super(...args);
    }

    formatDateText() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    isFuture() {
        return this.getTime() >= Date.now();
    }

    isLeapYear() {
        const year = this.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    getNextDate() {
        const nextDay = new Date(this);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
    }
}
const currentDate = new ExtendedDate();
console.log("Текущая дата :", currentDate.formatDateText());
console.log("Является ли текущая дата будущей или текущей:", currentDate.isFuture());
console.log("Является ли текущий год високосным:", currentDate.isLeapYear());
console.log("Следующая дата:", currentDate.getNextDate());

