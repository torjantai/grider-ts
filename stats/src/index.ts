import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
const { matches } = matchReader;

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matches);
