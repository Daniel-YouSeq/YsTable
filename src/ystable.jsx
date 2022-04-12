import React from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';

export default class YsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      csvData: '',
      hello: ''
    };
  }
  componentDidMount() {
    this.setState({
      hello: 'componentDidMount working nicely'
    });
    this.handleFiles();
  }
  //
  handleFiles = () => {
    let request = new XMLHttpRequest();
    //request.setRequestHeader('Content-Type', 'text');
    request.open('GET', this.props.src);
    request.setRequestHeader('Content-Type', 'text');
    //request.onreadystatechange = function() { this.setState({
    //  hello: 'onreadystatechange, check!' //reader.result
    //})}.bind(this)
    let that = this;
    request.addEventListener('load', function(event) {
      let response = event.target.responseText;
      that.setState ({
        hello: 'state set inside EventListener'
      });
      let doc = new DOMParser();
      let txt = doc.parseFromString(response, 'text/html');
      console.error(txt.body);
      that.setState ({
        csvData: txt.body.innerHTML,
      });
    });
    request.send();
  }

  render () {
    return (
      // React.createElement('h1', {}, this.state.hello);
      // React.createElement(
      //  'CsvToHtmlTable',
      //  {csvDelimiter: ",", tableClassName: "table table-striped table-hover", data: this.state.csvData }
      //)
      <CsvToHtmlTable data={this.state.csvData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />
    );
  }
}

//function csvToArray(str, delimiter = ",") {

//  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
//  const rows = str.slice(str.indexOf("\n") + 1).split("\n");


//}

