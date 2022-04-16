const Convert = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export default Convert