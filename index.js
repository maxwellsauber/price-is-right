const calculateSubTotals = (items) => items.map(updateTotal)

const updateTotal = (item) => {
  item.total = parseFloat((item.price * item.quantity * (1 - item.discount)).toFixed(2))

  return item
}

module.exports = calculateSubTotals
