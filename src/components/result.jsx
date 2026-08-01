import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({
  initialInvestment,
  annualInvestment,
  duration,
  expectedReturn,
  ...rest
}) {
  let result = [];
  if (initialInvestment && annualInvestment && expectedReturn && duration) {
    result = calculateInvestmentResults({
      initialInvestment: Number(initialInvestment),
      annualInvestment: Number(annualInvestment),
      expectedReturn: Number(expectedReturn),
      duration: Number(duration),
    });
  }

  const tableData = result.map((row, index) => {
    const totalInterest = result
      .slice(0, index + 1)
      .reduce((sum, item) => sum + item.interest, 0);

    const investedCapital =
      Number(initialInvestment) + Number(annualInvestment) * (index + 1);

    return {
      ...row,
      totalInterest,
      investedCapital,
    };
  });
  console.log(initialInvestment, annualInvestment, expectedReturn, duration);
  console.log(result);

  return (
    <table {...rest}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(
          ({
            year,
            valueEndOfYear,
            interest,
            totalInterest,
            investedCapital,
          }) => (
            <tr key={year}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}
