class Solver {
    constructor() { }
    formatCurrency(nationID, style, typeCurrency, number) {
        return Intl.NumberFormat(nationID, { style: style, currency: typeCurrency }).format(number);
    }
    getPercentPrice(newPrice, oldPrice) {
        return (100 * (oldPrice - newPrice) / oldPrice).toFixed(0);
    }
    getPercentNumber(number) {
        return (100 / number);
    }
    getAPIString(URL, Path) {
        return URL + Path;
    }
    getDateFormat(dateString) {
        var date = new Date(dateString);
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        return dd + '-' + mm + '-' + yyyy;
    }
    format2(n, currency) {
        return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

}
export default Solver;