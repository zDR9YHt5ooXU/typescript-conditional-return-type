// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class ByteData {
  // type: 'byte';
}
class PacketData {
  // type: 'packet';
}
class IssuesData {
  // type: 'IssuesData';
}
class BarChartData {
  flag: 1;
}

class LineChartData {
  flag: 2;
}
type Out<T extends ByteData | PacketData | IssuesData> = T extends ByteData
  ? LineChartData
  : BarChartData;
function formatDatumEntry<T extends ByteData | PacketData | IssuesData>(
  data: T
): Out<T> {
  if (data instanceof IssuesData || data instanceof PacketData) {
    return new BarChartData() as Out<T>;
  }
  return new LineChartData() as Out<T>;
}

const barcharts: BarChartData[] = [];
const linecharts: LineChartData[] = [];
const lineChart: LineChartData = formatDatumEntry(new ByteData());
linecharts.push(formatDatumEntry(new ByteData()));
barcharts.push(formatDatumEntry(new PacketData()));
