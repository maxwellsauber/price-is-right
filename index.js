const calculateSubTotals = (items) => items.map(updateTotal)

const updateTotal = (item) => {
  return { ...item, total: parseFloat((item.price * item.quantity * (1 - item.discount)).toFixed(2)) }
}

module.exports = calculateSubTotals
