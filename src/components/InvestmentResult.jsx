import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function InvestmentResult({ investmentForm }) {
  const results = calculateInvestmentResults(investmentForm);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
