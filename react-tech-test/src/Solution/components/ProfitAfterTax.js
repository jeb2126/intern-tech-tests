const ProfitAfterTax = (props) => {
  let totalProfit;
  const taxThreshold = 10;

  // If 10 or under work out total profit
  if (props.product.quantitySold < 11) {
    totalProfit =
      (props.product.soldPrice - props.product.costToBusiness) *
      props.product.quantitySold;
  } else {
    // No tax on first 10 quantitySold
    const nonTaxProfit =
      (props.product.soldPrice - props.product.costToBusiness) * taxThreshold;
    const minusNonTax = props.product.quantitySold - taxThreshold;

    // Work out gross profit
    const grossProfit =
      (props.product.soldPrice - props.product.costToBusiness) * minusNonTax;

    // Work out tax amount
    const taxPayment = grossProfit * props.TAX_RATE;

    // Work out net profit
    const netProfit = grossProfit - taxPayment;

    // Work out total profit
    totalProfit = netProfit + nonTaxProfit;
  }

  return <td>{`£${totalProfit.toFixed(2)}`}</td>;
};

export default ProfitAfterTax;
