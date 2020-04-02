const calculateSubTotals = (items) => items.map(updateTotal)

const updateTotal = (item) => {
  const returnItem = item

  returnItem.total = parseFloat((item.price * item.quantity * (1 - item.discount)).toFixed(2))

  return returnItem
}

module.exports = calculateSubTotals
